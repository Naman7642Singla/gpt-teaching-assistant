# **GPT Teaching Assistant**

## **Overview**
GPT Teaching Assistant is an AI-powered chatbot designed to help users understand **Data Structures and Algorithms (DSA)** problems. Users can submit a **LeetCode problem URL** along with their doubts, and the chatbot will provide **hints and explanations** to guide them toward solutions **without giving direct answers**.

---

## **Features**
✅ AI-driven guidance using **Gemini-3.5-Turbo**.  
✅ Helps users understand problems through **hints** rather than direct solutions.  
✅ Simple and **intuitive UI** for submitting questions.  
✅ Supports **natural language input** for seamless interaction.  

---

## **Prerequisites**
Before running this project, ensure you have the following installed on your system:

1. **Node.js (>= 18.x.x) & npm**  
   - Download and install from [Node.js Official Website](https://nodejs.org/)
   - Verify installation:
     ```sh
     node -v
     npm -v
     ```

2. **Git**  
   - Download and install from [Git Official Website](https://git-scm.com/)
   - Verify installation:
     ```sh
     git --version
     ```

3. **A Gemini API Key**  
   - Obtain one from [Google AI Studio](https://aistudio.google.com/app/apikey).

4. **A modern browser** (Chrome, Firefox, Edge, or Safari).  

---

## **Project Structure**
```
GPT-Teaching-Assistant/
├── backend/
│   ├── server.js         # Backend server handling API calls
│   ├── package.json      # Backend dependencies
│   ├── .env_example      # Environment variables example file
├── frontend/
│   ├── src/              # React components
│   ├── public/           # Public assets
│   ├── package.json      # Frontend dependencies         
│   └── components/       # UI components
└── README.md             # Documentation
```

---

## **Setup Instructions**

### **1. Clone the Repository**
```sh
git clone https://github.com/Naman7642Singla/gpt-teaching-assistant.git
cd GPT-Teaching-Assistant
```

### **2. Backend Setup**
```sh
cd backend
npm install
cp .env_example .env
```
- Open `.env` and add your **Gemini API key**:  
- Get your Gemini API key from: [Google AI Studio](https://aistudio.google.com/app/apikey)
```
GEMINI_API_KEY=your_api_key_here
```
- Start the backend server:
```sh
node server.js
```

### **3. Frontend Setup**
- Open a new terminal:
```sh
cd frontend
npm install
npm run dev
```

---

## **Architecture**
🔹 **Frontend**: Built with **React**, **Tailwind CSS**, and `axios` for API communication.  
🔹 **Backend**: Uses **Node.js (Express.js)** to handle API requests and communicate with Gemini AI.  
🔹 **AI Integration**: The chatbot interacts with **Gemini-3.5-Turbo** via **Google AI’s API** to generate intelligent responses.  

---

## **How It Works**
1. The user enters a **LeetCode problem URL** and describes their **doubt**.  
2. The **frontend** sends a request to the **backend** (`server.js`).  
3. The **backend** processes the request and calls the **Gemini-3.5-Turbo API**.  
4. The AI model generates a **response**, which is sent back to the frontend.  
5. The **response is displayed** to the user in a chat format.  
6. 🎥 **Demo Video**: [Watch Here](https://youtu.be/zlWwYBps3oA)  

---

## **Usage Guidelines**
🔹 Ask **specific** questions about your problem.  
🔹 The assistant will provide **hints and explanations** but will not give **direct solutions**.  

---

## **Made with ❤️ by Naman Singla 🚀**

