import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import eventsData from "../data/events.json";
import event1 from "../assets/Event1.jpeg";
import event2 from "../assets/Event2.jpg";
import event3 from "../assets/Event3.jpeg";
import event4 from "../assets/Event4.jpg";

const HomePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const mappedEvents = eventsData.map((evt) => {
      let importedImage;
      switch (evt.image) {
        case "Event1.jpeg":
          importedImage = event1;
          break;
        case "Event2.jpg":
          importedImage = event2;
          break;
        case "Event3.jpeg":
          importedImage = event3;
          break;
        case "Event4.jpg":
          importedImage = event4;
          break;
        default:
          importedImage = event1; 
      }
      return { ...evt, image: importedImage };
    });

    setEvents(mappedEvents);
  }, []);

  return (
    <div className="bg-gradient-to-t from-black to-redish/60 from-30% text-white min-h-screen p-6">
      <div>
    <ul class="flex justify-between text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-2 -ml-1 opacity-85">
    <li class="me-2">
        <a href="#" class="inline-block px-4 py-3 text-white bg-cream/60 rounded-xl">Concerts</a>
    </li>
    <li class="me-2">
    <a href="#" class="inline-block px-4 py-3 text-white bg-cream/60 rounded-xl">Comedy</a>
    </li>
    <li class="me-2">
    <a href="#" class="inline-block px-4 py-3 text-white bg-cream/60 rounded-xl">Theatre</a>
    </li>
    <li class="me-2">
    <a href="#" class="inline-block px-4 py-3 text-white bg-cream/60 rounded-xl">Poetry</a>
    </li>

    </ul>

      </div>
      <div className="flex justify-between">
        <div>
          <h3 className="text-sm font-sans opacity-70 -mb-1">
            Saturday, March 08
          </h3>
          <h2 className="text-2xl font-bold opacity-85 mb-4">Events</h2>
        </div>
        <div className="pt-5 pl-10"><Searchbar/></div>
      </div>

      {events.map((event) => (
        <Link
          key={event.id}
          to={`/event/${event.id}`} 
          className="relative w-full mb-6 rounded-xl overflow-hidden shadow-lg 
                     transition duration-150 hover:scale-110 hover:opacity-125 
                     block"
        >
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-48 object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-5 left-5">
            <p className="text-sm opacity-75">{event.type}</p>
            <h3 className="text-lg font-bold">{event.name}</h3>
            <p className="text-xs opacity-75">{event.votes} Interested</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
