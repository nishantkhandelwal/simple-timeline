import React from 'react';

export default function Event(props) {
  return (
    <div className={`wrapper ${props.alignment}`}>
      <div className="content">
        <time>{props.time}</time>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
