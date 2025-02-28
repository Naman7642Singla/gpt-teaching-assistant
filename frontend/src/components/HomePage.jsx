import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white px-6">
      {/* Title & Subtitle */}
      <h1 className="text-5xl font-extrabold text-center drop-shadow-lg mb-4">
        GPT Teaching Assistant
      </h1>
      <p className="text-lg text-gray-200 text-center max-w-2xl">
        Struggling with Data Structures & Algorithms? Our AI-powered assistant guides you step-by-step with smart hints and explanations.
      </p>

      {/* ✨ Motivational Line */}
      <p className="mt-6 text-2xl font-semibold italic text-yellow-300 text-center max-w-xl">
        "Let's solve and understand problems together, and embark on a new journey!"
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex space-x-6">
        <Link to="/chat">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-200 transition transform hover:scale-105">
            Start Asking Doubts
          </button>
        </Link>
        <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
          <button className="border-2 border-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-white hover:text-blue-600 transition transform hover:scale-105">
            Explore LeetCode
          </button>
        </a>
      </div>

      {/* Features Section */}
    </div>
  );
}

export default HomePage;