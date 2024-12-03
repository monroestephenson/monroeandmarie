document.addEventListener("DOMContentLoaded", () => {
    // Initialize Navigation Menu Toggle (Hamburger)
    const initializeNavbar = () => {
      const hamburger = document.querySelector(".hamburger");
      const navbar = document.querySelector("nav ul");
    
      if (hamburger && navbar) {
        // Add event listener for the hamburger click
        hamburger.addEventListener("click", () => {
          navbar.classList.toggle("active");
        });
      }
    };
    
    document.addEventListener("DOMContentLoaded", () => {
      initializeNavbar();
    });
  
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
    if (document.getElementById("particles-js")) {
      particlesJS("particles-js", {
          particles: {
              number: {
                  value: 80,
                  density: {
                      enable: true,
                      value_area: 800,
                  },
              },
              color: {
                  value: "#ffffff",
              },
              shape: {
                  type: "circle",
              },
              opacity: {
                  value: 0.5,
                  anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 0.1,
                  },
              },
              size: {
                  value: 3,
                  random: true,
              },
              line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1,
              },
              move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  random: true,
                  out_mode: "out",
              },
          },
          interactivity: {
              detect_on: "canvas",
              events: {
                  onhover: {
                      enable: true,
                      mode: "grab",
                  },
                  onclick: {
                      enable: true,
                      mode: "push",
                  },
              },
              modes: {
                  grab: {
                      distance: 140,
                      line_linked: {
                          opacity: 1,
                      },
                  },
                  push: {
                      particles_nb: 4,
                  },
              },
          },
          retina_detect: true,
      });
  } else {
      console.error("Error: 'particles-js' element not found!");
  }
    // Initialize All Features
    initializeNavbar();
    initializeLoveVault();
    initializeChristmasTree();
    initializeLoveCounter();
    initializeLightbox();
    initializeScrollReveal();
  });
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.querySelector("header").style.backgroundPosition = `center ${scrollY * 0.5}px`;
});
gsap.fromTo("#tree-ornaments circle", { scale: 0 }, { scale: 1, duration: 1, stagger: 0.3 });
document.querySelector("#dark-mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff", // Adjust color for better contrast
    },
    shape: {
      type: "circle", // Change to other shapes like "star", "triangle", etc.
    },
    opacity: {
      value: 0.5,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
      },
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});
document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.getElementById('backToTop');
  
  // Show/hide button on scroll
  window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
          backToTop.classList.add('visible');
      } else {
          backToTop.classList.remove('visible');
      }
  });
  
  // Scroll back to top when clicked
  backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const notes = document.querySelectorAll(".note");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  let currentNoteIndex = 0; // Start with the first note

  // Function to display the current note
  function showNote(index) {
    notes.forEach((note, i) => {
      note.classList.remove("active");
      if (i === index) {
        note.classList.add("active");
      }
    });
  }

  // Navigate to the next note
  function nextNote() {
    currentNoteIndex = (currentNoteIndex + 1) % notes.length; // Loop back to the start
    showNote(currentNoteIndex);
  }

  // Navigate to the previous note
  function prevNote() {
    currentNoteIndex = (currentNoteIndex - 1 + notes.length) % notes.length; // Loop to the end
    showNote(currentNoteIndex);
  }

  // Event listeners for navigation buttons
  if (nextButton && prevButton) {
    nextButton.addEventListener("click", nextNote);
    prevButton.addEventListener("click", prevNote);
  }

  // Initialize by showing the first note
  showNote(currentNoteIndex);

  // Optional: Auto-scroll through the notes every 5 seconds
  setInterval(nextNote, 5000);
});