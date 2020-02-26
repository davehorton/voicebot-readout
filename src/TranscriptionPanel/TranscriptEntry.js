import React from 'react';
import 'antd/dist/antd.css';
import ChatBox from './ChatBox';
import TranscriptionIcon from './TranscriptionIcon';

export default props => {
  const type = props.t.type;
  const justifyContent =
    type === 'transcript'
      ? 'flex-start'
      : type === 'prompt'
        ? 'flex-end'
        : 'center';

  return (
    <div
      style={{
        marginBottom: '0.5rem',
        display: 'flex',
        justifyContent,
      }}
    >
      {
        (type === 'transcript' || type === 'prompt') &&
        <TranscriptionIcon type={type} />
      }
      <ChatBox t={props.t} />
    </div>
  );
};
