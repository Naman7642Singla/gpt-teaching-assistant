Here’s your README file with proper setup instructions, including git clone, cd navigation, and environment setup.

GPT Teaching Assistant

Overview

GPT Teaching Assistant is a chat-based application designed to help users understand Data Structures and Algorithms (DSA) problems. Users can submit a LeetCode problem link along with their doubts, and the assistant (powered by GPT/Gemini) provides hints and guidance without revealing direct solutions.

Features
	•	Submit LeetCode problem URLs and doubts.
	•	Interactive chat-based UI for seamless conversations.
	•	AI-generated hints and thought-provoking questions to guide problem-solving.

Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/Naman7642Singla/gpt-teaching-assistant.git
cd gpt-teaching-assistant

2️⃣ Backend Setup

cd backend
npm install

	•	Copy .env_example to a new file named .env

cp .env_example .env

	•	Open .env and paste your Gemini API key:

GEMINI_API_KEY=your_api_key_here


	•	Start the backend server

node server.js

3️⃣ Frontend Setup

cd ../frontend
npm install
npm run dev

Usage
	1.	Open the frontend in your browser (default: http://localhost:5173).
	2.	Enter the LeetCode problem URL and your doubt.
	3.	The AI assistant will generate hints and responses to help you understand the problem.

Folder Structure

gpt-teaching-assistant/
│── backend/       # Backend server (Node.js, Express)
│── frontend/      # Frontend (React, Tailwind CSS)
│── README.md      # Project documentation

Technologies Used
	•	Frontend: React, Tailwind CSS
	•	Backend: Node.js, Express
	•	AI Model: Gemini API (or OpenAI GPT)

Contribution

Feel free to submit pull requests or open issues to improve the project!

Let me know if you need any modifications! 🚀
