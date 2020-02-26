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
      calls: [
        {
          "uuid": "3b86ecd3-65db-4eb8-a624-5fb0a86cac77",
          "callingNumber": "15083084809",
          "calledNumber": "15083333456",
          "startTime": "Wed, 02 Oct 2002 13:00:00 GMT",
          "status": "in-progress",
          "agent": "flight status"
        },
        {
          "uuid": "222b4210-f94a-4caf-b1df-5d66f23be830",
          "callingNumber": "16173333456",
          "calledNumber": "15083333456",
          "startTime": "Wed, 02 Oct 2002 13:05:00 GMT",
          "status": "completed",
          "agent": "flight status"
        }
      ],
      transcripts: [
        {
          "uuid": "99dbbaf1-517e-4f78-8d10-7824a22d2103",
          "call-uuid": "3b86ecd3-65db-4eb8-a624-5fb0a86cac77",
          "text": "What time is my flight.",
          "confidence": 0.9223,
          "time": "Wed, 02 Oct 2002 13:00:00 GMT",
          "speaker": "caller"
        },
        {
          "uuid": "99dbbaf1-517e-4f78-8d10-7824a22d2104",
          "call-uuid": "3b86ecd3-65db-4eb8-a624-5fb0a86cac77",
          "text": "Let me take a look. One moment please.",
          "time": "Wed, 02 Oct 2002 13:00:03 GMT",
          "speaker": "callee"
        },
      ],
      intents: [
        {
          "uuid": "41d5f14f-ea3b-4985-abfc-4a8c2cac2848",
          "call-uuid": "3b86ecd3-65db-4eb8-a624-5fb0a86cac77",
          "time": "Wed, 02 Oct 2002 13:00:02 GMT",
          "name": "flight status"
        },
      ],
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
            transcripts={this.state.transcripts}
            intents={this.state.intents}
          />
        </Row>
      </Layout>
    );
  }
}

export default App;
