import React from "react";

function ProfileCard({ profile }) {
  return (
    <div className="flex items-center bg-white rounded-md shadow p-4 mb-2">
      <img
        src={profile.profilePic}
        alt={profile.name}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h4 className="font-bold text-purpleish">{profile.name}, {profile.age}</h4>
        <p className="text-sm text-gray-600">{profile.bio}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
