import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import timeFormat from '../util/time-format';

const MenuHeaderSpan = props => (
  <span
    style={{
      paddingRight: '24px',
      color: '#FFFFFF',
      fontWeight: 'bold',
    }}
  >
    {props.children}
  </span>
);

const MenuSpan = props => (
  <span
    style={{
      paddingRight: '24px',
    }}
  >
    {props.children}
  </span>
);

export default props => {

  // Split props used in this component from props to be handed down
  const {
    header,
    startTime,
    callingNumber,
    agent,
    status,
    ...menuItemProps
  } = props;

  return (
    <Menu.Item
      {...menuItemProps}
      style={{
        cursor: props.header && 'default',
        height: !props.header && '64px',
        lineHeight: !props.header && '64px',
      }}
      disabled={props.header}
    >
      {startTime     ? <MenuSpan>{timeFormat(startTime)}</MenuSpan> : <MenuHeaderSpan>Start</MenuHeaderSpan>}
      {callingNumber ? <MenuSpan>{callingNumber}</MenuSpan>         : <MenuHeaderSpan>From</MenuHeaderSpan>}
      {agent         ? <MenuSpan>{agent}</MenuSpan>                 : <MenuHeaderSpan>Agent</MenuHeaderSpan>}
      {status        ? <MenuSpan>{status}</MenuSpan>                : <MenuHeaderSpan>Status</MenuHeaderSpan>}
    </Menu.Item>
  );
};
