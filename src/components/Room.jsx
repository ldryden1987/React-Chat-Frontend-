import React, {useEffect, useState } from "react";
import MessageInput from "./MessageInput.jsx";
import MessageList from "./MessageList.jsx";

const Room = ({roomID, token}) => {
    const [messages, setMessages] = useState([]);

    const fetchMessage = async () => {
        try{
            const response = await fetch(`http://localhost:5000/api/rooms/${roomID}/messages`,{ headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        setMessages(data);
        } catch (error) {
            console.error("Error fetching message:", error);
        }
    };

    const handleSend = async (text) => {
        try {
            await fetch(`http://localhost:5000/api/rooms/${roomID}/messages`, {
                method: "Post",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ text }),
            });
            fetchMessage();
        } catch (error){
            console.error("Error sending message:", error);
        }
    };

    useEffect(() => {
        fetchMessage();
    }, [roomID]);

    return(
        <div>
            <h2>Room: {roomID}</h2>
            <MessageList messages={messages} />
            <MessageInput onSend={handleSend} />
        </div>
    )
}

export default Room;