import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, message } from 'antd';
import CallListPanel from './CallListPanel';
import TranscriptionPanel from './TranscriptionPanel';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedCall: null,
      calls: [],
      transcriptEvents: [],
    };
    this.selectCall = this.selectCall.bind(this);
  }

  ws = new WebSocket('ws://18.130.114.255:8080');

  componentDidMount() {
    this.ws.onopen = () => {
      message.success('WebSocket connection has opened successfully')
    }

    this.ws.onclose = () => {
      message.info('WebSocket connection has closed')
    }

    this.ws.onerror = error => {
      message.error('WebSocket connection error. Please refresh to try again.')
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
