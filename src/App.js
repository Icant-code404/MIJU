import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import ProfilePage from "./pages/ProfilePage";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  console.log("🔥 App Component Rendered");
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event/:eventId" element={<EventDetails />} />
            <Route path="/swipe/:eventId" element={<ProfilePage />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
