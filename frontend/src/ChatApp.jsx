import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Send, Loader } from "lucide-react";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [question, setQuestion] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!url.trim() || !question.trim()) return;

    setLoading(true);

    // Format user input for proper display
    const userMessage = {
      sender: "user",
      text: `Problem URL: ${url}\nQuestion: ${question}`,
    };

    setMessages((prev) => [...prev, userMessage]);

    // Show "AI is thinking..." message while waiting for the response
    const thinkingMessage = {
      sender: "AI",
      text: "AI Assistant is thinking...",
      temp: true, // Mark it as temporary
    };
    setMessages((prev) => [...prev, thinkingMessage]);

    try {
      const response = await axios.post("http://localhost:5001/ask-gemini", {
        url,
        doubt: question,
      });

      const data = response.data;
      
      // Remove the "AI is thinking..." message
      setMessages((prev) =>
        prev.filter((msg) => !msg.temp).concat({
          sender: "AI",
          text: data.response,
        })
      );
    } catch (error) {
      console.error("Error fetching response:", error);
      
      // Remove the "thinking" message and show an error
      setMessages((prev) =>
        prev.filter((msg) => !msg.temp).concat({
          sender: "AI",
          text: "Error: Failed to fetch response. Please try again.",
        })
      );
    }

    setLoading(false);
    setUrl("");
    setQuestion("");
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 text-center text-xl font-semibold shadow-md">
        DSA GPT Assistant
      </header>

      {/* Chat Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[75%] px-4 py-2 rounded-lg whitespace-pre-line ${
              msg.sender === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-700 text-white"
            }`}
          >
            <p className="text-sm opacity-80">
              {msg.sender === "user" ? "You" : "AI Assistant"}
            </p>
            <p className="mt-1">{msg.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="bg-gray-800 p-4 flex gap-2">
        <input
          type="text"
          placeholder="Enter LeetCode URL..."
          className="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-white outline-none"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your question..."
          className="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-white outline-none"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          className={`px-4 py-2 rounded-lg flex items-center justify-center ${
            loading ? "bg-gray-600 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
          onClick={sendMessage}
          disabled={loading}
        >
          {loading ? <Loader className="animate-spin" size={20} /> : <Send size={20} />}
        </button>
      </div>
    </div>
  );
}

export default ChatApp;