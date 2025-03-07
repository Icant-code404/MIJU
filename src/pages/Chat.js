import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Chat() {
  const navigate = useNavigate();

  // Example data for people who like you
  const [likes] = useState([
    { id: "like1", name: "Alice", pic: "https://picsum.photos/200/300?random=201" },
    { id: "like2", name: "Bob", pic: "https://picsum.photos/200/300?random=202" },
    { id: "like3", name: "Chloe", pic: "https://picsum.photos/200/300?random=203" },
    { id: "like4", name: "David", pic: "https://picsum.photos/200/300?random=204" },
    { id: "like5", name: "Emily", pic: "https://picsum.photos/200/300?random=205" },
    { id: "like6", name: "Frank", pic: "https://picsum.photos/200/300?random=206" },
    { id: "like7", name: "Gina", pic: "https://picsum.photos/200/300?random=207" },
    { id: "like8", name: "Harry", pic: "https://picsum.photos/200/300?random=208" },
  ]);

  // Example data for your matches
  const [matches] = useState([
    {
      id: "match1",
      name: "Zara",
      pic: "https://picsum.photos/200/300?random=210",
      lastMessage: "Hey, how's your day?",
    },
    {
      id: "match2",
      name: "Mike",
      pic: "https://picsum.photos/200/300?random=211",
      lastMessage: "Up for a movie night?",
    },
    {
      id: "match3",
      name: "Nina",
      pic: "https://picsum.photos/200/300?random=212",
      lastMessage: "Loved the concert!",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purpleish bg-opacity-40 to-black text-white p-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center bg-black/40 text-white p-2 rounded-full mb-4"
      >
        <FaArrowLeft className="mr-2" />
        Back
      </button>

      {/* Likes Section */}
      <h2 className="text-xl font-heading text-white mb-4">Likes</h2>
      <div className="overflow-x-auto flex space-x-4 pb-2">
        {likes.map((person) => (
          <div
            key={person.id}
            className="flex-none w-24 h-36 rounded-md overflow-hidden bg-gray-300 relative"
          >
            {/* Blurred Image */}
            <img
              src={person.pic}
              alt={person.name}
              className="w-full h-full object-cover blur-sm"
            />
            {/* Optional Name Overlay */}
            <div className="absolute bottom-2 left-2 text-white text-sm bg-black/50 px-2 py-1 rounded">
              {person.name}
            </div>
          </div>
        ))}
      </div>

      {/* Matches Section */}
      <h2 className="text-xl font-heading text-white mt-6 mb-4">Matches</h2>
      <div className="space-y-4">
        {matches.map((match) => (
          <div
            key={match.id}
            className="flex items-center bg-white/10 rounded-lg p-3"
          >
            <img
              src={match.pic}
              alt={match.name}
              className="w-12 h-12 rounded-full object-cover mr-3"
            />
            <div>
              <p className="font-semibold text-white">{match.name}</p>
              <p className="text-sm text-gray-300">{match.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
