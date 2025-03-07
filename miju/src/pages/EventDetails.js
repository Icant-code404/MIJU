import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaEye, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [eventData, setEventData] = useState(null);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Load events
    import("../data/events.json").then((data) => {
      const found = data.default.find((evt) => String(evt.id) === eventId);
      setEventData(found);
    });

    // Load profiles
    import("../data/profiles.json").then((data) => {
      setProfiles(data.default);
    });
  }, [eventId]);

  if (!eventData) {
    return (
      <div className="p-4 text-white bg-gradient-to-b from-purpleish to-black h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purpleish to-black text-white">
      {/* Banner Image */}
      <div className="relative w-full h-72 mb-4">
        <img
           src={require(`../assets/${eventData.image}`)}
           alt={eventData.name}
          className="w-full h-full object-cover"
        />
  {/* Arrow Button (absolute, with higher z-index) */}
        <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 bg-black/40 text-white p-2 rounded-full z-10"
        >
           <FaArrowLeft size={20} />
         </button>

  {/* Gradient overlay (no z-index or lower z-index) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
       </div>

      {/* Details Card */}
      <div className="bg-white text-black rounded-3xl p-6 -mt-4 relative">
        {/* Event Title / Date / Location */}
        <h2 className="text-2xl font-bold">{eventData.name}</h2>
        <p className="text-sm">
          {eventData.date}
          {eventData.time ? ` at ${eventData.time}` : ""}
        </p>
        {eventData.location && (
          <p className="text-sm mb-2">{eventData.location}</p>
        )}

        {/* 'I'm Interested' button */}
        <button
          onClick={() => navigate(`/swipe/${eventData.id}`)}
          className="bg-orange text-white px-4 py-2 rounded-md hover:bg-redish float-right"
        >
          I’m Interested
        </button>

        {/* Eye Icon + Participant Count */}
        <div className="flex items-center gap-2 mt-2 text-orange text-sm font-semibold">
          <FaEye size={18} />
          <span>{eventData.participants}</span>
          2,548
        </div>

        {/* Interested Profiles Row */}
        <h3 className="mt-6 mb-2 font-heading text-lg text-purpleish">
          Interested Profiles
        </h3>
        <div className="flex space-x-4 overflow-x-auto">
          {profiles.map((profile) => (
            <img
              key={profile.id}
              src={profile.profilePic}
              alt={profile.name}
              className="w-14 h-14 rounded-full object-cover"
            />
          ))}
        </div>

        {/* Description */}
        <h3 className="text-lg font-semibold text-gray-800 mb-1 mt-4">
          Description
        </h3>
        <p className="text-gray-800 text-sm whitespace-pre-line">
          {eventData.description}
        </p>
      </div>
    </div>
  );
}

export default EventDetails;
