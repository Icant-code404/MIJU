import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function ProfilePage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    import("../data/profiles.json").then((data) => {
      const foundUser = data.default.find((profile) => profile.id === eventId);
      setUser(foundUser);
    });
  }, [eventId]);

  if (!user) {
    return (
      <div className="p-4 text-white bg-gradient-to-b from-purpleish to-black h-screen flex items-center justify-center">
        Loading user...
      </div>
    );
  }

  // If user has no photos, just show "no content"
  if (!user.photos || user.photos.length === 0) {
    return (
      <div className="p-4 text-white bg-gradient-to-b from-purpleish to-black h-screen flex flex-col items-center justify-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-black/40 text-white p-2 rounded-full mb-4"
        >
          &larr; Back
        </button>
        <h2 className="text-2xl font-bold">No Photos Found</h2>
      </div>
    );
  }

  /**
   * We'll build a feed array:
   *  1) Main photo (first in user.photos)
   *  2) Then alternate: prompt -> photo -> prompt -> photo...
   */
  const mainPhoto = user.photos[0];
  const otherPhotos = user.photos.slice(1); // everything after the first
  const prompts = user.prompts || [];

  // We'll alternate them in a single array
  const feedItems = [];
  // Start with the main photo
  feedItems.push({ type: "mainPhoto", content: mainPhoto });

  // Indices for otherPhotos & prompts
  let photoIndex = 0;
  let promptIndex = 0;
  const maxLen = Math.max(otherPhotos.length, prompts.length);

  // Alternate: Prompt -> Photo -> Prompt -> Photo...
  for (let i = 0; i < maxLen; i++) {
    // If there's a prompt available
    if (promptIndex < prompts.length) {
      feedItems.push({ type: "prompt", content: prompts[promptIndex] });
      promptIndex++;
    }
    // If there's another photo available
    if (photoIndex < otherPhotos.length) {
      feedItems.push({ type: "photo", content: otherPhotos[photoIndex] });
      photoIndex++;
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purpleish to-black text-white">
      {/* Back Button */}
      <div className="relative p-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-black/40 text-white p-2 rounded-full z-10"
        >
          <FaArrowLeft size={20}/>
        </button>
      </div>

      {/* User Info at top of the white card */}
      <div className="bg-white text-black rounded-t-3xl px-6 pt-6 pb-10 relative">
        <h2 className="text-2xl text-purpleish font-bold mb-1">
          {user.name}, {user.age}
        </h2>
        <p className="text-gray-700 text-sm mb-4">{user.bio}</p>

        <div className="space-y-6">
          {feedItems.map((item, index) => {
            if (item.type === "mainPhoto") {
              // Larger card for the first item
              return (
                <div
                  key={index}
                  className="w-full h-80 rounded-lg overflow-hidden shadow-lg relative"
                >
                  <img
                    src={item.content}
                    alt="Main"
                    className="w-full h-full object-cover"
                  />
                  {/* Interests & Events Attended overlay at the bottom of main photo */}
                  <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-3">
                    <p className="text-sm mb-1">
                      <span className="font-semibold">Interests:</span>{" "}
                      {user.interests}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Events Attended:</span>{" "}
                      {user.eventsAttended}
                    </p>
                  </div>
                </div>
              );
            } else if (item.type === "photo") {
              // Normal photo card
              return (
                <div
                  key={index}
                  className="w-full h-64 rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={item.content}
                    alt="Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            } else if (item.type === "prompt") {
              // Prompt card
              return (
                <div
                  key={index}
                  className="bg-white border rounded-lg p-4 shadow-sm"
                >
                  <h3 className="font-bold text-purpleish mb-1">
                    {item.content.question}
                  </h3>
                  <p className="text-sm text-gray-800">{item.content.answer}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
