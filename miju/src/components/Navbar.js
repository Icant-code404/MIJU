import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-purpleish text-white p-4 flex justify-around items-center font-heading">
      <Link
        to="/"
        className={`${
          location.pathname === "/" ? "underline" : ""
        } text-lg`}
      >
        Events
      </Link>
      <Link
        to="/chat"
        className={`${
          location.pathname === "/chat" ? "underline" : ""
        } text-lg`}
      >
        Chat
      </Link>
      <Link
        to="/profile"
        className={`${
          location.pathname === "/profile" ? "underline" : ""
        } text-lg`}
      >
        Profile
      </Link>
    </nav>
  );
}

export default Navbar;
