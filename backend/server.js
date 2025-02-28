require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(express.json());
app.use(cors());

// Load API key from environment variables
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    console.error("Error: Missing GEMINI_API_KEY in .env file");
    process.exit(1);
}

// Initialize Google Generative AI model
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

/**
 * POST endpoint to process user queries related to DSA problems.
 * Expects a LeetCode URL and a doubt as input.
 */
app.post('/ask-gemini', async (req, res) => {
    try {
        console.log("Received request:", req.body);

        const { url, doubt } = req.body;
        if (!url || !doubt) {
            return res.status(400).json({ error: "Missing required fields: url and doubt" });
        }

        // Structured prompt for enhanced response quality
        const prompt = `You are an expert DSA mentor. A student needs help with a LeetCode problem: ${url}.

### Student's Doubt:
${doubt}

### Guidelines for your response:
1. **Understanding the Problem:** Provide a brief explanation of what the problem asks.
2. **Key Concepts Involved:** Mention the essential data structures and algorithms relevant to the problem.
3. **Hints & Thought Process:** Guide the student through an approach to solving the problem without revealing the full solution.
4. **Common Mistakes & Optimizations:** Highlight common pitfalls and possible optimizations.
5. **Follow-up Questions:** Suggest similar problems or variations to deepen understanding.

Ensure the response is **clear, structured, and encourages independent thinking.**`;

        console.log("🔹 Sending request to Gemini API...");

        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: prompt }] }]
        });

        const response = await result.response.text();
        console.log("Gemini API Response:\n", response);

        res.json({ response });
    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: "Failed to process request", details: error.message });
    }
});

// Start the server on port 5001
const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));