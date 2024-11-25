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

  // Display loading message
  outputDiv.innerText = "Thinking...";

  try {
    // Send request to Vercel backend (updated endpoint)
    const response = await fetch("https://monroeandmarie.vercel.app/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        model: "gemini-1.5-flash-latest",
        parameters: {
          maxOutputTokens: 200,
          temperature: 0.7,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    outputDiv.innerText = data.response || "No response received.";
  } catch (error) {
    console.error("Error generating content:", error);
    outputDiv.innerText = "Something went wrong. Monroe still loves you!";
  }
});
