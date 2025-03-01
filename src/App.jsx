import React from 'react';
import EventCard from './EventCard';
import './App.css';  // Assuming you have a CSS file for styling

const App = () => {
  // Define an array of events with details
  const events = [
    {
      eventName: "Soccer Match - Team A vs Team B",
      date: "March 15, 2025",
      time: "5:00 PM",
      location: "Soccer Stadium",
      ticketLink: "https://www.fcbarcelona.com/en/tickets/football"
    },
    {
      eventName: "Soccer Match - Team C vs Team D",
      date: "March 20, 2025",
      time: "6:00 PM",
      location: "Soccer Arena",
      ticketLink: "https://www.fcbarcelona.com/en/tickets/football"
    },
    {
      eventName: "Soccer Match - Team E vs Team F",
      date: "March 25, 2025",
      time: "4:00 PM",
      location: "Soccer Field",
      ticketLink: "https://www.fcbarcelona.com/en/tickets/football"
    },
    {
      eventName: "Soccer Match - Team G vs Team H",
      date: "March 30, 2025",
      time: "7:00 PM",
      location: "Football Ground",
      ticketLink: "https://www.fcbarcelona.com/en/tickets/football"
    },
    {
      eventName: "Soccer Match - Team I vs Team J",
      date: "April 5, 2025",
      time: "3:00 PM",
      location: "Main Stadium",
      ticketLink: "https://www.fcbarcelona.com/en/tickets/football"
    },
    {
      eventName: "Soccer Match - Team K vs Team L",
      date: "April 10, 2025",
      time: "5:30 PM",
      location: "National Arena",
      ticketLink: "https://www.fcbarcelona.com/en/tickets/football"
    },
    {
      eventName: "Soccer Match - Team M vs Team N",
      date: "April 12, 2025",
      time: "2:00 PM",
      location: "City Field",
      ticketLink: "https://www.fcbarcelona.com/en/tickets/football"
    },
    {
      eventName: "Soccer Match - Team O vs Team P",
      date: "April 15, 2025",
      time: "4:30 PM",
      location: "Town Park",
      ticketLink: "https://www.fcbarcelona.com/en/tickets/football"
    },
    {
      eventName: "Soccer Match - Team Q vs Team R",
      date: "April 20, 2025",
      time: "6:00 PM",
      location: "Sports Complex",
      ticketLink: "https://www.fcbarcelona.com/en/tickets/football"
    },
    {
      eventName: "Soccer Match - Team S vs Team T",
      date: "April 25, 2025",
      time: "5:00 PM",
      location: "Arena Stadium",
      ticketLink: "https://www.fcbarcelona.com/en/tickets/football"
    }
  ];

  return (
    <div className="App">
      <h1>Spain Soccer Community Events</h1>
      <div className="event-cards">
        {/* Loop through the events array and pass each event as props */}
        {events.map((event, index) => (
          <EventCard
            key={index}
            event={event} // Passing the entire event object as a prop
          />
        ))}
      </div>
    </div>
  );
};

export default App;
