import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Send, Loader } from "lucide-react";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [question, setQuestion] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!url.trim() || !question.trim()) return;

    setLoading(true);

    const userMessage = {
      sender: "user",
      text: `Problem URL: ${url}\n\nQuestion: ${question}`,
    };

    setMessages((prev) => [...prev, userMessage, { sender: "AI", text: "Thinking...", temp: true }]);

    try {
      const response = await axios.post("http://localhost:5001/ask-gemini", { url, doubt: question });

      setMessages((prev) =>
        prev.filter((msg) => !msg.temp).concat({ sender: "AI", text: response.data.response })
      );
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) =>
        prev.filter((msg) => !msg.temp).concat({ sender: "AI", text: "Error: Could not fetch response. Try again." })
      );
    }

    setLoading(false);
    setUrl("");
    setQuestion("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100 text-gray-900">
      {/* Assistant Header */}
      <header className="p-4 bg-white shadow-md text-center text-lg font-semibold text-gray-800">
        DSA Assistant
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[75%] px-4 py-2 rounded-lg shadow-md whitespace-pre-line ${
              msg.sender === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-300 text-gray-900"
            }`}
          >
            <p className="text-xs font-bold opacity-80">{msg.sender === "user" ? "You" : "SolveMate"}</p>
            <p className="mt-1">{msg.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="p-4 bg-white shadow-md border-t">
        <div className="flex flex-col gap-3 p-4 bg-gray-50 rounded-lg border border-gray-300">
          <input
            type="text"
            placeholder="Enter LeetCode URL..."
            className="px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 outline-none shadow-sm focus:ring-2 focus:ring-blue-500"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className="flex gap-2">
            <textarea
              placeholder="Ask your question..."
              className="flex-1 px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 outline-none resize-none h-14 shadow-sm focus:ring-2 focus:ring-blue-500"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className={`px-4 py-2 rounded-lg flex items-center justify-center transition ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              } text-white shadow-md`}
              onClick={sendMessage}
              disabled={loading}
            >
              {loading ? <Loader className="animate-spin" size={20} /> : <Send size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;