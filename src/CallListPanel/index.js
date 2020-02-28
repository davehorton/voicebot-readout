import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Icon, Menu } from 'antd';
import MenuItem from './MenuItem';
import ConfigureServer from './ConfigureServer';

export default class CallListPanel extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.selectCall(e.key);
  }

  render() {
    return (
      <div
        style={{
          background: '#FFFFFF',
          height: '100vh',
          overflowY: 'auto',
          maxWidth: '50%',
          boxShadow: '0 0 2px rgba(0, 0, 0, 0.15), 0 0 1rem rgba(0, 0, 0, 0.05)',
        }}
      >
        <ConfigureServer
          serverUrl={this.props.serverUrl}
          changeServerUrl={this.props.changeServerUrl}
        />

        <Menu
          mode="inline"
          selectedKeys={this.props.selectedCall}
        >
          <MenuItem header />
          {
            this.props.calls.map((call, i) => (
              <MenuItem key={call.uuid}
                start={call.start}
                stop={call.stop}
                callingNumber={call.callingNumber}
                agent={call.agent}
                status={call.status}
                onClick={this.handleClick}
              />
            ))
          }
        </Menu>
      </div>
    );
  }
}
