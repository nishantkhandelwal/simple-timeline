import { useState, useEffect } from 'react';
import './App.css';
import Timeline from './components/Timeline/Timeline';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Here goes the logic/data fetching for a new event
      // For now very basic implementatio is implemented, here we can implement some real time data fetch/polling
      // Generate a random string and set that as Event title.
      let randomTitle = (Math.random() + 1).toString(36).substring(7);
      let date = new Date();
      let time = date.toLocaleTimeString();
      let newEvent = {
        title: `Title-${randomTitle}`,
        eventID: date.getTime(),
        time: time,
        description: `Descritpion for ${randomTitle} - Lorem ipsum dolor sit amet, consectetuer adipiscing elit,`,
      };
      setEvents((oldEvents) => {
        if (oldEvents.length === 5) {
          oldEvents.pop();
        }
        return [newEvent, ...oldEvents];
      });
    }, 5000); // timer is set to 5000 - to refresh the timeline for new event.
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {
          events.length ? 
          <Timeline events={events} /> :
          <h1>Loading Timeline...</h1>
        }
      </header>
    </div>
  );
}

export default App;
