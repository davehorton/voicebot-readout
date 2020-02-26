import React from 'react';
import 'antd/dist/antd.css';
import timeFormat from '../util/time-format';

const P = props => (
  <p
    style={{
      margin: '0.5rem 0',
      ...props.style
    }}
  >
    {props.children}
  </p>
);

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
        padding: '0 0.75rem',
        borderRadius: '0.25rem',
        background,
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)',
        textAlign: (props.t.type === 'intent') && 'center',
      }}

    >
      <P style={{ color: '#000000' }}>
        {
          props.t.type === 'intent'
            ? `Intent: ${props.t.data}`
            : props.t.type === 'transcript'
              ? props.t.data.text
              : props.t.data
        }
      </P>

      {
        props.t.type !== 'intent' &&
        <P>{timeFormat(props.t.date, true)}</P>
      }

      {
        // Have to compare against undefined to account for when confidence === 0
        props.t.data.confidence !== undefined &&
          <P>Confidence: {props.t.data.confidence}</P>
      }

    </div>
  );
};
