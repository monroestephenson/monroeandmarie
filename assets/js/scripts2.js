document.addEventListener("DOMContentLoaded", () => {
    // Initialize Navigation Menu Toggle (Hamburger)
    const initializeNavbar = () => {
      const hamburger = document.querySelector(".hamburger");
      const navbar = document.querySelector(".navbar");
  
      if (hamburger && navbar) {
        hamburger.addEventListener("click", () => {
          navbar.classList.toggle("active");
        });
      }
    };
  
    // Initialize Love Vault
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
  
    // Initialize Interactive Christmas Tree
    const initializeChristmasTree = () => {
      const treeImage = document.querySelector("#christmas-tree img");
  
      if (treeImage) {
        treeImage.addEventListener("click", () => {
          alert("Merry Christmas, my love! Each ornament is a piece of my heart. ❤️");
        });
      }
    };

    // Initialize Love Counter
    const initializeLoveCounter = () => {
      const loveCounterElement = document.getElementById("love-counter");
      const startDate = new Date("2023-09-28T16:00:00");
  
      // Log to verify the element and start date
      console.log("[LOVE-COUNTER] Love Counter Element:", loveCounterElement);
      console.log("[LOVE-COUNTER] Start Date:", startDate);
  
      if (!loveCounterElement) {
        console.error("Error: Love Counter element not found!");
        return;
      }
  
      if (isNaN(startDate.getTime())) {
        console.error("Error: Invalid start date. Check the date format.");
        return;
      }
  
      const updateLoveCounter = () => {
        const now = new Date();
        console.log("[LOVE-COUNTER] Current Time:", now);
  
        const diff = now - startDate;
        console.log("[LOVE-COUNTER] Time Difference (ms):", diff);
  
        if (diff < 0) {
          loveCounterElement.innerText = "Love begins in the future!";
          console.warn("Start date is in the future. Counter will not count.");
          return;
        }
  
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
  
        // Log the calculated time
        console.log({
          days,
          hours,
          minutes,
          seconds,
        });
  
        loveCounterElement.innerText = `In love for ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds!`;
      };
  
      // Log before setting up the interval
      console.log("[LOVE-COUNTER] Setting up interval for love counter...");
      setInterval(updateLoveCounter, 1000);
      updateLoveCounter();
    };
  
    // Initialize Lightbox
    const initializeLightbox = () => {
      const lightboxModal = document.getElementById("lightbox-modal");
      const lightboxImage = document.getElementById("lightbox-image");
      const lightboxCaption = document.getElementById("lightbox-caption");
      const closeBtn = document.querySelector(".lightbox-modal .close");
      const polaroids = document.querySelectorAll(".card img");
  
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
  
    // Initialize Scroll Reveal
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
    initializeLoveCounter();
    initializeLightbox();
    initializeScrollReveal();
  });