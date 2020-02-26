import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import timeFormat from '../util/time-format';
import phoneNumberFormat from '../util/phone-number-format';

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
      {
        props.header
          ? <React.Fragment>
              <MenuHeaderSpan>Start</MenuHeaderSpan>
              <MenuHeaderSpan>From</MenuHeaderSpan>
              <MenuHeaderSpan>Agent</MenuHeaderSpan>
              <MenuHeaderSpan>Status</MenuHeaderSpan>
            </React.Fragment>
          : <React.Fragment>
              <MenuSpan>{timeFormat(startTime)}</MenuSpan>
              <MenuSpan>{phoneNumberFormat(callingNumber)}</MenuSpan>
              <MenuSpan>{agent}</MenuSpan>
              <MenuSpan>{status}</MenuSpan>
            </React.Fragment>
      }
    </Menu.Item>
  );
};
