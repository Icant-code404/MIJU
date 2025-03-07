import React from "react";
import { Link, useLocation } from "react-router-dom";
// Example icons; swap them for whichever icons you prefer
import { FaCalendar, FaComments, FaUser } from "react-icons/fa";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 mb-4 mx-4 bg-purpleish/60 rounded-3xl text-white p-3 flex justify-around items-center z-50">
      {/* Events Link */}
      <Link
        to="/"
        className= "flex flex-col items-center opacity-70 hover:opacity-100"

      >
        <FaCalendar size={24} />
        <span className="text-xs mt-1 ">Events</span>
      </Link>

      {/* Chat Link */}
      <Link
        to="/chat"
        className= "flex flex-col items-center opacity-70 hover:opacity-100"

      >
        <FaComments size={24} />
        <span className="text-xs mt-1">Chat</span>
      </Link>

      {/* Profile Link */}
      <Link
        to="/profile"
        className= "flex flex-col items-center opacity-70 hover:opacity-100"
      >
        <FaUser size={24} />
        <span className="text-xs mt-1">Profile</span>
      </Link>
    </nav>
  );
}

export default Navbar;
