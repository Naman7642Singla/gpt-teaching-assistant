require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(express.json());
app.use(cors());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    console.error("Error: Missing GEMINI_API_KEY in .env file");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post('/ask-gemini', async (req, res) => {
    try {
        console.log("Received request:", req.body);

        const { url, doubt } = req.body;
        if (!url || !doubt) {
            return res.status(400).json({ error: "Missing required fields: url and doubt" });
        }

        // Prompt modification: Adding explicit newlines and Markdown formatting
        const prompt = `You are a DSA mentor. A user has a doubt regarding this LeetCode problem: ${url}.

**Doubt:** ${doubt}

---
**Format your response strictly as follows:**
- Each point should be on a **new line** (do not merge everything into one paragraph).
- Use bullet points numbers 1,2,).
- Include clear section headers (e.g., "1 Understanding the Problem").
---


Make sure the response follows this structured format.`;

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

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));