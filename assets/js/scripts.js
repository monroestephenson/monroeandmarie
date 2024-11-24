import { GoogleGenerativeAI } from "@google/generative-ai"; // Import GoogleGenerativeAI

document.addEventListener("DOMContentLoaded", () => {

  // Initialize Gemini API Interaction
  const initializeLLMInteraction = () => {
    const API_KEY = "YOUR_API_KEY_HERE"; // Replace with your actual API key
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        maxOutputTokens: 200,
        temperature: 0.9,
      },
    });

    const submitButton = document.getElementById("submit");
    const promptInput = document.getElementById("prompt");
    const outputDiv = document.getElementById("output");

    if (submitButton && promptInput && outputDiv) {
      submitButton.addEventListener("click", async () => {
        const userInput = promptInput.value.trim();

        if (!userInput) {
          outputDiv.innerText = "Please enter a question.";
          return;
        }

        const prompt = `You are Monroe's heart, overflowing with love and warmth. Respond poetically to this: "${userInput}"`;

        outputDiv.innerText = "Thinking...";

        try {
          const result = await model.generateContent(prompt);
          const generatedText = result?.response?.text() || "Monroe loves you infinitely!";
          outputDiv.innerText = generatedText;
        } catch (error) {
          console.error("Error:", error);
          outputDiv.innerText = "Something went wrong. Monroe still loves you!";
        }
      });
    }
  };

  initializeLLMInteraction();
});