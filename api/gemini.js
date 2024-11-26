import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    // Handle CORS preflight request
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const GEMINI_API_KEY = process.env.MY_GEMINI_API_KEY;

  if (!GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is not set!");
    return res.status(500).json({ error: "Server misconfiguration: API key is missing." });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          model: "gemini-1.5-flash",
          parameters: {
            maxOutputTokens: 200,
            temperature: 0.7,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API Error: ${errorText}`);
    }

    const data = await response.json();
    const generatedContent = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";

    // Allow CORS in the actual response
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({ response: generatedContent });
  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    res.status(500).json({ error: "Failed to generate content." });
  }
}
