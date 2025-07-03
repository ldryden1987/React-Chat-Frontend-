import React from "react";

const MessageList = ({ messages }) => {

  return (
    <div className="message-list">
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        messages.map((msg) => (
          <div key={msg._id} className="message-item">
            <strong>{msg.sender?.username || "User"}:</strong> {msg.text}
          </div>
        ))
      )}
    </div>
  );
};

export default MessageList;

