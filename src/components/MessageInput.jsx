import React, { useState } from "react";

const MessageInput = ({ onSend }) => {
    const [text, setText] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onSend(text);
        setText("");
    };

    return (
        <form className="message-input" onSubmit={handleSubmit}>
            <input type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your message." />
            <button type="submit">Send</button>
        </form>
    );
};

export default MessageInput;