import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY; // Set this in Vercel Environment Variables
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await fetch("https://api-inference.huggingface.co/models/openai-community/gpt2", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(`Hugging Face API Error: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json({ response: data[0]?.generated_text || "No response generated." });
  } catch (error) {
    console.error("Error communicating with Hugging Face API:", error);
    res.status(500).json({ error: "Failed to generate content." });
  }
}
