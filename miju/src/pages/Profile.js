import React from "react";

function Profile() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-heading text-purpleish mb-2">My Profile</h2>
      <div className="bg-white p-4 rounded-md shadow-md">
        <img
          src="https://via.placeholder.com/100?text=Me"
          alt="My Profile"
          className="w-16 h-16 rounded-full mb-2"
        />
        <h3 className="font-bold text-purpleish">John Doe, 29</h3>
        <p className="text-gray-600">Lover of events, concerts, and meeting new people!</p>
      </div>
    </div>
  );
}

export default Profile;
