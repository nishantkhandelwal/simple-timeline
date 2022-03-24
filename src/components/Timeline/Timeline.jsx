import React from 'react';
import Event from '../Event/Event';

const Timeline = (props) => {
  return (
    <div className="timeline">
      {props.events.map((event, index) => (
        <Event
          {...event}
          key={event.eventID}
          alignment={index % 2 === 0 ? 'left' : 'right'} // Even in the right and odd in the left
        />
      ))}
    </div>
  );
};

export default React.memo(Timeline);
