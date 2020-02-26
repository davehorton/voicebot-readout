import React from 'react';
import 'antd/dist/antd.css';
import timeFormat from '../util/time-format';

export default props => {

  const background =
    props.t.type === 'transcript'
      ? '#87C5FF'
      : props.t.type === 'prompt'
        ? '#DDDDDD'
        : '#F67B8A';

  return (
    <div
      style={{
        maxWidth: props.t.type === 'intent' ? '100%' : '25rem',
        overflowWrap: 'break-word',
        padding: '1rem',
        borderRadius: '0.25rem',
        background,
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)',
        textAlign: (props.t.type === 'intent') && 'center',
      }}

    >
      <p
        style={{
          color: '#000000',
          marginBottom: '0.5rem',
        }}
      >
        {
          props.t.type === 'intent'
            ? `Intent: ${props.t.data}`
            : props.t.type === 'transcript'
              ? props.t.data.text
              : props.t.data
        }
      </p>

      <p
        style={{
          marginBottom: '0',
        }}
      >{timeFormat(props.t.date, true)}</p>

      {
        // Have to compare against undefined to account for when confidence === 0
        props.t.data.confidence !== undefined &&
          <p
            style={{
              marginTop: '0.5rem',
              marginBottom: '0',
            }}
          >Confidence: {props.t.data.confidence}</p>
      }

    </div>
  );
};
