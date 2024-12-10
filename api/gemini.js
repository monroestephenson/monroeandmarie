import Cors from "cors";
import fetch from "node-fetch";

// Utility function to initialize middleware
function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

// Initialize the middleware
const cors = initMiddleware(
  Cors({
    origin: "https://marieandmonroe.com", // Allow only your production domain
    methods: ["POST", "OPTIONS"], // Allowed methods
  })
);

export default async function handler(req, res) {
  // Run the CORS middleware
  await cors(req, res);

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
      `https://generativelanguage.googleapis.com/v1beta/tunedModels/monroechatbot-ql4fhe5lcckn:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt, // Send the user prompt
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API Error: ${errorText}`);
    }

    const data = await response.json();

    // Extract the generated content
    const generatedContent =
      data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";

    res.status(200).json({ response: generatedContent });
  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    res.status(500).json({ error: "Failed to generate content." });
  }
}
