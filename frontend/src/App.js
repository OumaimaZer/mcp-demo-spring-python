import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!query.trim()) return;

    // Add user message to chat
    setMessages([...messages, { sender: "user", text: query }]);

    // Send query to backend
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const botReply = await response.text();

    // Add bot reply to chat
    setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    setQuery("");
  };

  return (
      <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
        <h2>Chatbot</h2>
        <div
            style={{
              border: "1px solid #ccc",
              minHeight: 300,
              padding: 10,
              marginBottom: 10,
              overflowY: "auto",
            }}
        >
          {messages.map((msg, i) => (
              <div
                  key={i}
                  style={{
                    textAlign: msg.sender === "user" ? "right" : "left",
                    margin: "10px 0",
                  }}
              >
                <b>{msg.sender === "user" ? "You" : "Bot"}: </b> {msg.text}
              </div>
          ))}
        </div>
        <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your question..."
            style={{ width: "80%", padding: 10 }}
        />
        <button onClick={sendMessage} style={{ padding: 10, marginLeft: 10 }}>
          Send
        </button>
      </div>
  );
}

export default App;
