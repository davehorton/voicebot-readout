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

const Status = props => (
  <span
    style={{
      width: '6rem',
      padding: '0.5rem 0.75rem',
      borderRadius: '0.25rem',
      background: props.status === 'in-progress' ? '#ADFF87' : '#767676',
      color: props.status === 'in-progress' ? '#365C06' : '#FFFFFF',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      lineHeight: '16px',
      textAlign: 'center',
    }}
  >{
    // Capitalize first letter and replace hyphens with spaces
    props.status.charAt(0).toUpperCase() + props.status.replace('-', ' ').slice(1)
  }</span>
);

export default props => {

  // Split props used in this component from props to be handed down
  const {
    header,
    start,
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
      }}
      disabled={props.header}
    >
      {
        props.header
          ? <React.Fragment>
              <MenuHeaderSpan style={{ width: '4rem' }}>Start</MenuHeaderSpan>
              <MenuHeaderSpan style={{ width: '7rem' }}>From</MenuHeaderSpan>
              <MenuHeaderSpan style={{ flexGrow: 1 }}>Agent</MenuHeaderSpan>
              <MenuHeaderSpan style={{ width: '6rem' }}>Status</MenuHeaderSpan>
            </React.Fragment>
          : <React.Fragment>
              <MenuSpan style={{ width: '4rem' }}>{timeFormat(start)}</MenuSpan>
              <MenuSpan style={{ width: '7rem' }}>{phoneNumberFormat(callingNumber)}</MenuSpan>
              <MenuSpan style={{ flexGrow: 1 }}>{agent}</MenuSpan>
              <Status status={status} />
            </React.Fragment>
      }
    </Menu.Item>
  );
};
