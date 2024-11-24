import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Generative AI instance
const API_KEY = "AIzaSyAbopRRAI5Ja-4u-d04M7h7TdOHU-0iNWQ"; // Your API key
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    maxOutputTokens: 200,
    temperature: 0.5, // Make responses creative
  },
});

// DOM Elements
const submitButton = document.getElementById("submit");
const promptInput = document.getElementById("prompt");
const outputDiv = document.getElementById("output");

// Add click event listener
submitButton.addEventListener("click", async () => {
  const userInput = promptInput.value.trim();
  if (!userInput) {
    outputDiv.innerText = "Please enter a question.";
    return;
  }

  // Combine the pre-prompt and user input
  const prompt = `You are Monroe's heart, overflowing with love and warmth. Respond to this: "${userInput}"`;

  // Debugging: log the full prompt
  console.log("Generated Prompt:", prompt);

  // Display loading message
  outputDiv.innerText = "Thinking...";

  try {
    // Generate content using the Gemini API
    const result = await model.generateContent(prompt);

    // Extract and display the response
    const generatedText = result.response.text();
    outputDiv.innerText = generatedText;
  } catch (error) {
    console.error("Error generating content:", error);
    outputDiv.innerText = "Something went wrong. Monroe still loves you!";
  }
});