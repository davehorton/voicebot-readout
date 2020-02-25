import React from 'react';
import 'antd/dist/antd.css';

export default props => {

  const background =
    props.t.speaker === 'caller'
      ? '#87C5FF'
      : props.t.speaker === 'callee'
        ? '#DDDDDD'
        : '#F67B8A';

  const intentName = props.t.name &&
    props.t.name.charAt(0).toUpperCase() + props.t.name.slice(1);

  return (
    <div
      style={{
        maxWidth: !intentName && '25rem',
        padding: '1rem',
        borderRadius: '0.25rem',
        background,
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)',
        textAlign: intentName && 'center',
      }}

    >
      <p
        style={{
          color: '#000000',
          marginBottom: '0.5rem',
        }}
      >{props.t.text || `Intent: ${intentName}`}</p>

      <p
        style={{
          marginBottom: '0',
        }}
      >{props.t.time}</p>

      {
        props.t.confidence &&
          <p
            style={{
              marginTop: '0.5rem',
              marginBottom: '0',
            }}
          >Confidence: {props.t.confidence}</p>
      }

    </div>
  );
};
