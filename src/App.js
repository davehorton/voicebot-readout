import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, message } from 'antd';
import CallListPanel from './CallListPanel';
import TranscriptionPanel from './TranscriptionPanel';

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverUrl: 'ws://18.130.114.255:8080',
      selectedCall: null,
      calls: [],
      transcriptEvents: [],
    };
    this.establishWebSocket = this.establishWebSocket.bind(this);
    this.changeServerUrl = this.changeServerUrl.bind(this);
    this.selectCall = this.selectCall.bind(this);
  }

  async componentDidMount() {
    await this.establishWebSocket(this.state.serverUrl);
  }

  async establishWebSocket(serverUrl) {
    if (this.ws) {
      this.ws.close();
    }
    this.ws = new WebSocket(serverUrl);
    this.ws.onopen = () => {
      message.success('WebSocket connection has opened successfully')
    }

    this.ws.onclose = () => {
      message.info('WebSocket connection has closed')
    }

    this.ws.onerror = error => {
      message.error(`WebSocket connection error: ${JSON.stringify(error)}`)
    }

    this.ws.onmessage = event => {
      let wsmessage = JSON.parse(event.data);
      if (wsmessage.type === 'calls') {
        this.setState({ calls: wsmessage.data})
      } else {
        this.setState(state => ({
          transcriptEvents: [
            ...state.transcriptEvents,
            wsmessage,
          ]
        }))
      }
    }
  }

  async changeServerUrl(serverUrl) {
    if (this.ws.readyState === 1) {
      this.ws.send(JSON.stringify({
        "type": "unsubscribe",
        "uuid": this.state.selectedCall,
      }));
    }
    const oldServerUrl = this.state.serverUrl;
    try {
      await this.establishWebSocket(serverUrl);
      await this.setState({
        serverUrl,
        selectedCall: null,
        calls: [],
        transcriptEvents: [],
      });
      return 'success';
    } catch {
      await this.setState({ serverUrl: oldServerUrl });
      return 'error';
    }
  }

  selectCall(uuid) {
    this.ws.send(JSON.stringify({
      "type": "unsubscribe",
      "uuid": this.state.selectedCall,
    }));
    this.setState({
      selectedCall: uuid,
      transcriptEvents: [],
    });
    this.ws.send(JSON.stringify({
      "type": "subscribe",
      "uuid": uuid
    }));
  }

  render() {
    return (
      <Layout
        style={{
          minHeight: '100vh',
          flexDirection: 'row',
        }}
      >
        <CallListPanel
          serverUrl={this.state.serverUrl}
          changeServerUrl={this.changeServerUrl}
          selectedCall={this.state.selectedCall}
          calls={this.state.calls}
          selectCall={this.selectCall}
        />
        <TranscriptionPanel
          selectedCall={this.state.selectedCall}
          transcriptEvents={this.state.transcriptEvents}
        />
      </Layout>
    );
  }
}

export default App;
