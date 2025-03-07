import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";

function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [eventData, setEventData] = useState(null);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    import("../data/events.json").then((data) => {
      const found = data.default.find((evt) => evt.id === eventId);
      setEventData(found);
    });
    import("../data/profiles.json").then((data) => {
      setProfiles(data.default);
    });
  }, [eventId]);

  if (!eventData) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="bg-purpleish text-white px-3 py-1 rounded-md mb-4"
      >
        Back
      </button>
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-xl font-heading text-purpleish mb-2">{eventData.name}</h2>
        <p className="text-gray-700">
          {eventData.date} at {eventData.time}
        </p>
        <p className="text-gray-700">{eventData.location}</p>
        <p className="text-orange mt-2">
          Voted {eventData.participants} Participants
        </p>
      </div>

      <button
        onClick={() => navigate(`/swipe/${eventData.id}`)}
        className="bg-orange text-white px-4 py-2 rounded-md hover:bg-redish"
      >
        I'm Interested
      </button>

      <h3 className="mt-6 font-heading text-lg text-purpleish">Interested Profiles</h3>
      <div className="mt-2">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default EventDetails;
