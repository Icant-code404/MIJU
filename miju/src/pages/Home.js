import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Load from local JSON
    import("../data/events.json").then((data) => {
      setEvents(data.default);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-heading text-purpleish mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((evt) => (
          <EventCard key={evt.id} event={evt} />
        ))}
      </div>
    </div>
  );
}

export default Home;
