import React from 'react';

const EventCard = (props) => {
  // Access the event data from props
  const { eventName, date, time, location, ticketLink } = props.event; 

  return (
    <div className="event-card">
      <h2>{eventName}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>{location}</p>
      <a href={ticketLink} target="_blank" rel="noopener noreferrer">
        Buy Tickets
      </a>
    </div>
  );
};

export default EventCard;
