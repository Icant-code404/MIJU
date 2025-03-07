import React, { useState, useEffect } from "react";
import data from "../data/profiles.json"; // Import the JSON directly
import { FaCamera, FaQuestionCircle } from "react-icons/fa";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("photos");

  useEffect(() => {
    // Find the user with id === "4" in the JSON
    const foundUser = data.find((profile) => profile.id === "4");
    setUser(foundUser);
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div className="relative w-full h-64">
        <img
          src={user.bannerImage || "https://picsum.photos/800/400"} 
          alt="Banner"
          className="w-full h-full object-cover"
        />
        {/* Optional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
      </div>

      {/* White Card Overlapping Banner */}
      <div className="bg-white rounded-t-3xl p-6 -mt-12 relative">
        {/* Profile Picture - Overlaps Banner */}
        <div className="absolute top-0 left-6 transform -translate-y-1/2">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white object-cover"
          />
        </div>

        {/* Basic Info */}
        <div className="ml-32">
          <h2 className="text-2xl font-bold text-purpleish">
            {user.name}, {user.age}
          </h2>
          <p className="text-sm text-gray-600 mt-1">{user.bio}</p>
          <div className="mt-2 text-sm text-gray-700">
            <p>
              <span className="font-semibold">Interests:</span> {user.interests}
            </p>
            <p>
              <span className="font-semibold">Events Attended:</span>{" "}
              {user.eventsAttended}
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex space-x-4 mt-4 ml-32">
          <button
            onClick={() => setActiveTab("photos")}
            className={`flex items-center px-3 py-1 rounded-full 
              ${
                activeTab === "photos"
                  ? "bg-orange text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
          >
            <FaCamera className="mr-2" />
            Photo Feed
          </button>
          <button
            onClick={() => setActiveTab("prompts")}
            className={`flex items-center px-3 py-1 rounded-full 
              ${
                activeTab === "prompts"
                  ? "bg-orange text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
          >
            <FaQuestionCircle className="mr-2" />
            Prompt Feed
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6 ml-32">
          {activeTab === "photos" ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {user.photos?.map((photo, i) => (
                <div
                  key={i}
                  className="w-full h-40 bg-gray-300 rounded-md overflow-hidden shadow-sm"
                >
                  <img
                    src={photo}
                    alt={`Photo ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {user.prompts?.map((prompt, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-md p-4 shadow-sm"
                >
                  <h3 className="font-bold text-purpleish mb-1">
                    {prompt.question}
                  </h3>
                  <p className="text-sm text-gray-800">{prompt.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
