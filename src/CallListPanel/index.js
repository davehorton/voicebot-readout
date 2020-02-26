import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Col, Icon, Menu } from 'antd';
import MenuItem from './MenuItem';

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
      <Col
        span={12}
        style={{
          background: '#FFFFFF',
          height: '100vh',
          overflowY: 'auto',
        }}
      >
        <Icon
          type="setting"
          style={{
            margin: '24px 24px 16px',
            opacity: 0.65,
            fontSize: '26px',
          }}
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
      </Col>
    );
  }
}
