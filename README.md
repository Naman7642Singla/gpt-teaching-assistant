# GPT Teaching Assistant

## Overview
This is a GPT-based teaching assistant for Data Structures and Algorithms (DSA) problems. Users can submit a LeetCode problem URL along with their doubts, and the chatbot will guide them through the problem-solving process with hints and intuition-building questions.

## Project Structure
```
GPT-Teaching-Assistant/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env_example
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── .env
│   └── components/
└── README.md
```

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/Naman7642Singla/GPT-Teaching-Assistant.git
cd GPT-Teaching-Assistant
```

### 2. Backend Setup
```sh
cd backend
npm install
cp .env_example .env
```
- Open `.env` and add your Gemini API key:
```
GEMINI_API_KEY=your_api_key_here
```
- Start the backend server:
```sh
node server.js
```

### 3. Frontend Setup
- Open new terminal
```sh
cd ../frontend
npm install
npm run dev
```

## How It Works
1. Users input a LeetCode problem link and their doubts in the chat interface.
2. The frontend sends this data to the backend.
3. The backend processes the request and interacts with the Gemini API (or GPT-based model).
4. The assistant provides hints and guidance without revealing the direct solution.
5. Users receive structured responses that help them build intuition and problem-solving skills.

## API Routes (Backend)
- `POST /ask` → Accepts LeetCode URL and doubt, returns a guided response.

## Technologies Used
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **AI Model**: Gemini API (or OpenAI GPT)

## Contribution
Feel free to contribute by creating pull requests or reporting issues.

## License
MIT License
