import React from 'react';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';

export default props => (
  <Avatar
    size={40}
    icon={props.type === 'transcript' ? 'user' : 'phone'}
    style={{
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)',
      marginRight: props.type === 'transcript' && '0.75rem',
      marginLeft: props.type === 'prompt' &&  '0.75rem',
      backgroundColor: '#999999',
      order: props.type === 'prompt' && 2,
      fontSize: props.type === 'transcript' ? '35px' : '25px',
      display: 'flex',
      flexShrink: '0',
      justifyContent: 'center',
      alignItems: props.type === 'transcript' ? 'flex-end' : 'center',
    }}
  />
);
