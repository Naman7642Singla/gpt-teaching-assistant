import { Link } from "react-router-dom";
function HomePage() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white p-6">
        <h1 className="text-4xl font-extrabold mb-4 drop-shadow-lg">Welcome to GPT Teaching Assistant</h1>
        <p className="text-lg text-gray-200 mb-6 max-w-lg text-center">
          Struggling with Data Structures & Algorithms? Our AI-powered assistant helps you understand concepts, provides hints, and guides you toward solutions without giving direct answers.
        </p>
        <div className="flex space-x-4">
          <Link to="/chat">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-200 transition">Start Asking Doubts</button>
          </Link>
          <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-white hover:text-blue-600 transition">Explore LeetCode</button>
          </a>
        </div>
        <div className="mt-10 max-w-2xl text-center text-gray-300">
          <h2 className="text-2xl font-bold">Features:</h2>
          <ul className="mt-3 space-y-2">
            <li>Get intuitive hints to approach problems</li>
            <li>Learn key DSA concepts with guided explanations</li>
            <li>Improve problem-solving skills step by step</li>
          </ul>
        </div>
      </div>
    );
  }
export default HomePage;