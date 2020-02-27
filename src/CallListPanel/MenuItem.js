import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import timeFormat from '../util/time-format';
import phoneNumberFormat from '../util/phone-number-format';

const MenuHeaderSpan = props => (
  <span
    style={{
      flexShrink: 0,
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
      flexShrink: 0,
      ...props.style,
    }}
  >
    {props.children}
  </span>
);

const Status = props => (
  <span
    style={{
      padding: '0.5rem',
      marginLeft: '-18px',
      border: '2px solid rgba(73, 129, 0, 0.8)',
      borderRadius: '0.25rem',
      color: '#498100',
    }}
  >
    In Progress
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
              <MenuHeaderSpan style={{ width: '5.5rem' }}>Start</MenuHeaderSpan>
              <MenuHeaderSpan style={{ width: '5.5rem' }}>End</MenuHeaderSpan>
              <MenuHeaderSpan style={{ width: '8rem' }}>From</MenuHeaderSpan>
              <MenuHeaderSpan style={{ flexGrow: 1 }}>Agent</MenuHeaderSpan>
            </React.Fragment>
          : <React.Fragment>
              <MenuSpan style={{ width: '5.5rem' }}>{timeFormat(start)}</MenuSpan>
              <MenuSpan style={{ width: '5.5rem' }}>
                {
                  stop
                    ? timeFormat(stop)
                    : <Status/>
                }
              </MenuSpan>
              <MenuSpan style={{ width: '8rem' }}>{phoneNumberFormat(callingNumber)}</MenuSpan>
              <MenuSpan style={{
                flexGrow: 1,
                flexShrink: 1,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}>{agent}</MenuSpan>
            </React.Fragment>
      }
    </Menu.Item>
  );
};
