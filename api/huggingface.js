import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { inputs, parameters } = req.body;

  try {
    const response = await fetch("https://api-inference.huggingface.co/models/openai-community/gpt2", {
      method: "POST",
      headers: {
        Authorization: `Bearer YOUR_HUGGINGFACE_API_KEY`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: inputs || "Default input text", // Default input if none provided
        parameters: parameters || { max_new_tokens: 50, temperature: 0.7 }, // Default parameters
      }),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("Error from Hugging Face API:", errorDetails);
      res.status(response.status).json(errorDetails);
      return;
    }

    const result = await response.json();
    res.status(200).json(result);
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}
