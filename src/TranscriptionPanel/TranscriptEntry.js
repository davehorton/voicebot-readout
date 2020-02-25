import React from 'react';
import 'antd/dist/antd.css';
import ChatBox from './ChatBox';
import TranscriptionIcon from './TranscriptionIcon';

export default props => {
  const justifyContent =
    props.t.speaker === 'caller'
      ? 'flex-start'
      : props.t.speaker === 'callee'
        ? 'flex-end'
        : 'center';

  return (
    <div
      style={{
        paddingBottom: '1rem',
        display: 'flex',
        justifyContent,
      }}
    >
      {
        props.t.speaker &&
        <TranscriptionIcon speaker={props.t.speaker} />
      }
      <ChatBox t={props.t} />
    </div>
  );
};
