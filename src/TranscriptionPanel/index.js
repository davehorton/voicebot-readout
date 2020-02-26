import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Icon } from 'antd';
import TranscriptEntry from './TranscriptEntry';

export default class TranscriptionPanel extends Component {
  render() {
    return !this.props.transcriptEvents.length ? (
      <div
        style={{
          minHeight: '100vh',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
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
      </div>
    ) : (
      <div
        style={{
          height: '100vh',
          padding: '56px 16px',
          overflowY: 'scroll',
          flexGrow: 1,
        }}
      >
        {this.props.transcriptEvents
          // Remove intents that don't have data
          .filter(t => t.data)
          .map(t => (
            <TranscriptEntry
              key={t.uuid}
              t={t}
            />
          ))
        }
      </div>
    );
  }
}
