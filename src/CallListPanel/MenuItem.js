import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import timeFormat from '../util/time-format';
import phoneNumberFormat from '../util/phone-number-format';

const MenuHeaderSpan = props => (
  <span
    style={{
      paddingRight: '24px',
      color: '#000000',
      fontWeight: 'bold',
      ...props.style,
    }}
  >
    {props.children}
  </span>
);

const MenuSpan = props => (
  <span
    style={{
      paddingRight: '24px',
      ...props.style,
    }}
  >
    {props.children}
  </span>
);

export default props => {

  // Split props used in this component from props to be handed down
  const {
    header,
    start,
    stop,
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
        display: 'flex',
        alignItems: 'center',
        color: status === 'in-progress' && '#000000',
      }}
      disabled={props.header}
    >
      {
        props.header
          ? <React.Fragment>
              <MenuHeaderSpan style={{ width: '4rem' }}>Start</MenuHeaderSpan>
              <MenuHeaderSpan style={{ width: '5rem' }}>End</MenuHeaderSpan>
              <MenuHeaderSpan style={{ width: '7rem' }}>From</MenuHeaderSpan>
              <MenuHeaderSpan style={{ flexGrow: 1 }}>Agent</MenuHeaderSpan>
            </React.Fragment>
          : <React.Fragment>
              <MenuSpan style={{ width: '4rem' }}>{timeFormat(start)}</MenuSpan>
              <MenuSpan style={{ width: '5rem' }}>{stop ? timeFormat(stop) : ''}</MenuSpan>
              <MenuSpan style={{ width: '7rem' }}>{phoneNumberFormat(callingNumber)}</MenuSpan>
              <MenuSpan style={{ flexGrow: 1 }}>{agent}</MenuSpan>
            </React.Fragment>
      }
    </Menu.Item>
  );
};
