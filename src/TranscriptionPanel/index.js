import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Col, Icon } from 'antd';
import TranscriptEntry from './TranscriptEntry';

export default class TranscriptionPanel extends Component {
  constructor() {
    super();
    this.state = {
      transcriptEntries: [],
    };
  }
  componentDidMount() {
    const tempItems = [
      ...this.props.transcripts,
      ...this.props.intents,
    ];
    const sortedItems = [...tempItems].sort((a,b) => {
      return new Date(a.time) - new Date(b.time);
    });
    this.setState({ transcriptEntries: sortedItems });
  }
  render() {
    return !this.props.transcripts.length && !this.props.intents.length ? (
      <Col
        span={12}
        style={{
          minHeight: '100vh',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            borderRadius: '50%',
            background: '#999999',
            height: '50px',
            width: '50px',
            marginBottom: '6px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Icon
            type="phone"
            rotate="225"
            style={{
              color: '#FFFFFF',
              fontSize: '1.5rem',
            }}
          />
        </div>
        <h1
          style={{
            fontSize: '24px',
            color: '#888888',
          }}
        >
          {
            this.props.selectedCall
              ? <span>The selected call<br />has no transcript</span>
              : <span>Choose a call<br />on the left</span>
          }
        </h1>
      </Col>
    ) : (
      <Col
        span={12}
        style={{
          height: '100vh',
          padding: '56px 16px',
          overflowY: 'scroll',
        }}
      >
        {this.state.transcriptEntries.map(t => (
          <TranscriptEntry
            key={t.uuid}
            t={t}
          />
        ))}
      </Col>
    );
  }
}
