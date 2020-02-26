import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Row } from 'antd';
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

  selectCall(uuid) {
    this.setState({ selectedCall: uuid });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Row>
          <CallListPanel
            selectedCall={this.state.selectedCall}
            calls={this.state.calls}
            selectCall={this.selectCall}
          />
          <TranscriptionPanel
            selectedCall={this.state.selectedCall}
            transcriptEvents={this.state.transcriptEvents}
          />
        </Row>
      </Layout>
    );
  }
}

export default App;
