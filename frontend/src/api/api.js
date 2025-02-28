import axios from "axios";

export const askGemini = async (url, doubt) => {
  try {
    const response = await axios.post("http://localhost:5001/ask-gemini", { url, doubt });
    return response.data.response;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("⚠️ Could not fetch response. Please try again.");
  }
};