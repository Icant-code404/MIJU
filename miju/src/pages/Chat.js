import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToCalendar } from "../utils/calendar";

function Chat() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([
    { sender: "Alice", text: "Hey! Ready for the event?" },
    { sender: "You", text: "Yes, let's confirm our plan!" },
  ]);
  const [timer, setTimer] = useState(null);

  const handleSend = () => {
    if (!message) return;
    setChatLog([...chatLog, { sender: "You", text: message }]);
    setMessage("");
  };

  // Long press logic on heart
  const handleHeartPressStart = () => {
    const newTimer = setTimeout(() => {
      // After long press, confirm plan
      addToCalendar();
      alert("Plan confirmed! Event added to calendar (mock).");
    }, 1000); // 1-second press
    setTimer(newTimer);
  };

  const handleHeartPressEnd = () => {
    clearTimeout(timer);
  };

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="bg-purpleish text-white px-3 py-1 rounded-md mb-4"
      >
        Back
      </button>
      <h2 className="text-xl font-heading text-purpleish mb-2">Chat</h2>
      <div className="bg-white rounded-md shadow p-4 h-64 mb-4 overflow-y-auto">
        {chatLog.map((msg, i) => (
          <div key={i} className="mb-2">
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          className="flex-1 p-2 rounded-l-md"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-orange text-white px-4 py-2 rounded-r-md hover:bg-redish"
        >
          Send
        </button>
      </div>
      <div className="mt-4 flex items-center">
        <span className="mr-2">Long press the heart to confirm plan:</span>
        <div
          className="w-10 h-10 bg-redish rounded-full flex items-center justify-center text-white font-bold cursor-pointer"
          onMouseDown={handleHeartPressStart}
          onTouchStart={handleHeartPressStart}
          onMouseUp={handleHeartPressEnd}
          onTouchEnd={handleHeartPressEnd}
        >
          ♥
        </div>
      </div>
    </div>
  );
}

export default Chat;
