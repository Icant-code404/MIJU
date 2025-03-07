import React, { useState } from "react";
import { SwipeableList, SwipeableListItem } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

// Example profiles (replace with your JSON data import if needed)
const profilesData = [
  {
    id: 1,
    name: "Alice",
    image: "https://via.placeholder.com/300x240?text=Alice",
  },
  {
    id: 2,
    name: "Bob",
    image: "https://via.placeholder.com/300x240?text=Bob",
  },
  {
    id: 3,
    name: "Charlie",
    image: "https://via.placeholder.com/300x240?text=Charlie",
  },
];

export default function SwipeCard() {
  // Keep track of which profile is being shown
  const [index, setIndex] = useState(0);

  // If we've swiped through all profiles, show a 'No more profiles' message
  if (index >= profilesData.length) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl text-gray-600">No more profiles!</h2>
      </div>
    );
  }

  const currentProfile = profilesData[index];

  // Swipe actions
  const handleSwipeLeft = () => {
    console.log(`Rejected ${currentProfile.name}`);
    // Move to the next profile
    setIndex(index + 1);
  };

  const handleSwipeRight = () => {
    console.log(`Accepted ${currentProfile.name}`);
    // Move to the next profile
    setIndex(index + 1);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-900">
      <SwipeableList className="w-80">
        <SwipeableListItem
          swipeLeft={{
            content: (
              <div className="bg-red-600 h-full flex items-center justify-center text-white text-xl">
                Reject
              </div>
            ),
            action: handleSwipeLeft,
          }}
          swipeRight={{
            content: (
              <div className="bg-green-600 h-full flex items-center justify-center text-white text-xl">
                Accept
              </div>
            ),
            action: handleSwipeRight,
          }}
        >
          {/* Card Content */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              src={currentProfile.image}
              alt={currentProfile.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {currentProfile.name}
              </h3>
            </div>
          </div>
        </SwipeableListItem>
      </SwipeableList>
    </div>
  );
}
