import React from "react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white">
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-heading text-xl text-purpleish mb-1">
          {event.name}
        </h3>
        <p className="text-sm text-gray-700">
          {event.date} | {event.time}
        </p>
        <p className="text-sm text-gray-700">{event.location}</p>
        <p className="text-sm text-orange mt-2">
          Voted {event.participants} Participants
        </p>
        <Link
          to={`/event/${event.id}`}
          className="mt-2 inline-block bg-orange text-white py-1 px-3 rounded-md hover:bg-redish"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default EventCard;
