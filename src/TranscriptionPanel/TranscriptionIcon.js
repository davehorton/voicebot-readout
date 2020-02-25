import React from 'react';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';

export default props => (
  <Avatar
    size={40}
    icon={props.speaker === 'caller' ? 'user' : 'phone'}
    style={{
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)',
      marginRight: props.speaker === 'caller' && '0.75rem',
      marginLeft: props.speaker === 'callee' &&  '0.75rem',
      backgroundColor: '#999999',
      order: props.speaker === 'callee' && 2,
      fontSize: props.speaker === 'caller' ? '35px' : '25px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: props.speaker === 'caller' ? 'flex-end' : 'center',
    }}
  />
);
