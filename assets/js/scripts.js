// assets/js/scripts.js

import { GoogleGenerativeAI } from "@google/generative-ai"; // Import GoogleGenerativeAI

document.addEventListener("DOMContentLoaded", () => {
  // Navigation Menu Toggle (Hamburger)
  const initializeNavbar = () => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");

    if (hamburger && navbar) {
      hamburger.addEventListener("click", () => {
        navbar.classList.toggle("active");
      });
    }
  };

  // Love Vault
  const initializeLoveVault = () => {
    const unlockButton = document.getElementById("unlock-vault");
    const vaultCodeInput = document.getElementById("vault-code");
    const vaultMessage = document.getElementById("vault-message");
    const correctCode = "09/28/2023";

    if (unlockButton && vaultCodeInput && vaultMessage) {
      unlockButton.addEventListener("click", () => {
        const enteredCode = vaultCodeInput.value.trim();

        if (enteredCode === correctCode) {
          vaultMessage.style.display = "block";
          vaultMessage.style.color = "#1abc9c";
          vaultMessage.innerText = "🎉 You unlocked the vault! I love you more than words can say! 🎉";
        } else {
          vaultMessage.style.display = "block";
          vaultMessage.style.color = "red";
          vaultMessage.innerText = "❌ Incorrect code. Try again!";
        }
      });
    }
  };

  // Interactive Christmas Tree
  const initializeChristmasTree = () => {
    const christmasTreeSection = document.getElementById("christmas-tree");

    if (christmasTreeSection) {
      const treeImage = christmasTreeSection.querySelector("img");

      if (treeImage) {
        treeImage.addEventListener("click", () => {
          alert("Merry Christmas, my love! Each ornament is a piece of my heart. ❤️");
        });
      }
    }
  };

  // Gemini API Integration
  const initializeLLMInteraction = () => {
    const API_KEY = "AIzaSyAbopRRAI5Ja-4u-d04M7h7TdOHU-0iNWQ";
  
    // Initialize GoogleGenerativeAI with your API key
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        maxOutputTokens: 200,
        temperature: 0.9,
      },
    });
  
    // Select DOM elements
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
  
        // Combine the pre-prompt and user input
        const prompt = `You are Monroe's heart, overflowing with love and warmth. Respond poetically to this: "${userInput}"`;
  
        console.log("Generated Prompt:", prompt); // Debugging
  
        outputDiv.innerText = "Thinking..."; // Display a loading message
  
        try {
          // Make a request to the Gemini API
          const result = await model.generateContent(prompt); // Pass the combined prompt
          console.log("API Response:", result); // Debugging
  
          // Extract and display the response
          const generatedText = result?.response?.text() || "Monroe loves you infinitely!";
          outputDiv.innerText = generatedText;
        } catch (error) {
          console.error("Error:", error);
          outputDiv.innerText = "Something went wrong. Monroe still loves you!";
        }
      });
    }
  };

  // Love Counter
  const initializeLoveCounter = () => {
    const loveCounterElement = document.getElementById("love-counter");
    const startDate = new Date("2023-09-28T16:00:00");

    if (loveCounterElement) {
      const updateLoveCounter = () => {
        const now = new Date();
        const diff = now - startDate;

        if (diff < 0) {
          loveCounterElement.innerText = "Love begins in the future!";
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        loveCounterElement.innerText = `In love for ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds!`;
      };

      setInterval(updateLoveCounter, 1000);
      updateLoveCounter();
    }
  };

  // Lightbox Functionality
  const initializeLightbox = () => {
    const lightboxModal = document.getElementById("lightbox-modal");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeBtn = document.querySelector(".lightbox-modal .close");
    const polaroids = document.querySelectorAll(".polaroid img");

    if (lightboxModal && lightboxImage && closeBtn) {
      polaroids.forEach((img) => {
        img.addEventListener("click", () => {
          lightboxModal.style.display = "block";
          lightboxImage.src = img.src;
          lightboxCaption.innerText = img.nextElementSibling.innerText;
        });
      });

      closeBtn.addEventListener("click", () => {
        lightboxModal.style.display = "none";
      });

      window.addEventListener("click", (event) => {
        if (event.target === lightboxModal) {
          lightboxModal.style.display = "none";
        }
      });
    }
  };

  // Reveal Sections on Scroll
  const initializeScrollReveal = () => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
  };

  // Initialize All Features
  initializeNavbar();
  initializeLoveVault();
  initializeChristmasTree();
  initializeLLMInteraction(); // Ensure this is defined
  initializeLoveCounter();
  initializeLightbox();
  initializeScrollReveal();
});