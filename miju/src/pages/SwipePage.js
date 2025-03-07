import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SwipeCard from "../components/SwipeCard";

function SwipePage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [cards, setCards] = useState([]); // Flattened items

  useEffect(() => {
    // Load profiles
    import("../data/profiles.json").then((data) => {
      const allProfiles = data.default;
      setProfiles(allProfiles);

      // Flatten each profile's photos/prompts into a single array
      let allItems = [];
      allProfiles.forEach((profile) => {
        profile.photos.forEach((photo) => {
          allItems.push({
            profileId: profile.id,
            type: "photo",
            content: photo,
          });
        });
        profile.prompts.forEach((prompt) => {
          allItems.push({
            profileId: profile.id,
            type: "prompt",
            content: prompt,
          });
        });
      });
      setCards(allItems);
    });
  }, [eventId]);

  const handleSwipe = (direction, content) => {
    // direction: 'left' or 'right'
    // content: the item being swiped
    console.log(`Swiped ${direction} on:`, content);
  };

  if (!cards.length) return <div className="p-4">Loading profiles...</div>;

  return (
    <div className="p-4 relative flex justify-center items-center h-[80vh]">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-purpleish text-white px-3 py-1 rounded-md"
      >
        Back
      </button>
      <h2 className="absolute top-4 text-xl font-heading text-purpleish">
        Swipe on Parts
      </h2>
      {cards.map((item, index) => (
        <div key={index} className="w-72 h-96">
          <SwipeCard
            content={item.content}
            type={item.type}
            onSwipe={handleSwipe}
          />
        </div>
      ))}
    </div>
  );
}

export default SwipePage;
