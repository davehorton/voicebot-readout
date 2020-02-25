import React from 'react';
import 'antd/dist/antd.css';
import { Col, Icon, Menu } from 'antd';
import MenuItem from './MenuItem';

export default props => (
  <Col
    span={12}
    style={{
      background: '#001529',
      color: '#FFFFFF',
      minHeight: '100vh',
    }}
  >
    <Icon
      type="setting"
      style={{
        margin: '16px',
        opacity: 0.65,
        fontSize: '26px',
      }}
    />

    <Menu
      mode="vertical"
      theme="dark"
      selectedKeys={props.selectedCall}
    >
      <MenuItem header />
      {
        props.calls.map((call, i) => (
          <MenuItem key={i}
            startTime={call.startTime}
            callingNumber={call.callingNumber}
            agent={call.agent}
            status={call.status}
          />
        ))
      }
    </Menu>
  </Col>
);
