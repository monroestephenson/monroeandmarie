document.addEventListener("DOMContentLoaded", () => {
  /**
   * Initialize Navigation Menu Toggle (Hamburger)
   */
  const initializeNavbar = () => {
      const hamburger = document.querySelector(".hamburger");
      const navbar = document.querySelector(".navbar");

      if (hamburger && navbar) {
          hamburger.addEventListener("click", () => {
              navbar.classList.toggle("active");
              hamburger.classList.toggle("active"); // Toggle hamburger animation
          });
      }
  };

  /**
   * Initialize Dropdown Menus
   */
  const initializeDropdowns = () => {
      const dropdowns = document.querySelectorAll(".dropdown");

      dropdowns.forEach(dropdown => {
          const dropbtn = dropdown.querySelector(".dropbtn");
          const dropdownContent = dropdown.querySelector(".dropdown-content");

          if (dropbtn && dropdownContent) {
              // Toggle dropdown on click
              dropbtn.addEventListener("click", (e) => {
                  e.preventDefault(); // Prevent default link behavior
                  dropdownContent.classList.toggle("active");
              });
          }
      });

      // Close all dropdowns when clicking outside
      window.addEventListener("click", (e) => {
          dropdowns.forEach(dropdown => {
              const dropdownContent = dropdown.querySelector(".dropdown-content");
              if (!dropdown.contains(e.target)) {
                  dropdownContent.classList.remove("active");
              }
          });
      });
  };

  /**
   * Initialize Love Vault
   */
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

  /**
   * Initialize Interactive Christmas Tree
   */
  const initializeChristmasTree = () => {
      const treeImage = document.querySelector("#christmas-tree img");

      if (treeImage) {
          treeImage.addEventListener("click", () => {
              alert("Merry Christmas, my love! Each ornament is a piece of my heart. ❤️");
          });
      }
  };

  /**
   * Initialize Love Counter
   */
  const initializeLoveCounter = () => {
      const loveCounterElement = document.getElementById("love-counter");
      const startDate = new Date("2023-09-28T16:00:00");

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
  };

  /**
   * Initialize Lightbox
   */
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
                  const caption = img.nextElementSibling ? img.nextElementSibling.innerText : '';
                  lightboxCaption.innerText = caption;
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

  /**
   * Initialize Scroll Reveal
   */
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

  /**
   * Initialize Particles.js
   */
  const initializeParticles = () => {
      const particlesElement = document.getElementById("particles-js");
      if (particlesElement) {
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
  };

  /**
   * Initialize Back to Top Button
   */
  const initializeBackToTop = () => {
      const backToTop = document.getElementById('backToTop');

      if (backToTop) {
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
      }
  };

  /**
   * Initialize Smooth Scroll for Anchor Links
   */
  const initializeSmoothScroll = () => {
      const anchors = document.querySelectorAll('a[href^="#"]');

      anchors.forEach(anchor => {
          anchor.addEventListener('click', (e) => {
              e.preventDefault();
              const target = document.querySelector(anchor.getAttribute('href'));
              if (target) {
                  target.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                  });
              }
          });
      });
  };

  /**
   * Initialize Parallax Effect for Header Background
   */
  const initializeParallax = () => {
      const header = document.querySelector("header");

      if (header) {
          window.addEventListener("scroll", () => {
              const scrollY = window.scrollY;
              header.style.backgroundPosition = `center ${scrollY * 0.5}px`;
          });
      }
  };

  /**
   * Initialize GSAP Animations
   */
  const initializeGSAP = () => {
      if (typeof gsap !== 'undefined') {
          const treeOrnaments = document.querySelector("#tree-ornaments");
          if (treeOrnaments) {
              gsap.fromTo("#tree-ornaments circle", { scale: 0 }, { scale: 1, duration: 1, stagger: 0.3 });
          }
      } else {
          console.warn("GSAP library not loaded.");
      }
  };

  /**
   * Initialize Dark Mode Toggle
   */
  const initializeDarkModeToggle = () => {
      const darkModeToggle = document.querySelector("#dark-mode-toggle");
      if (darkModeToggle) {
          darkModeToggle.addEventListener("click", () => {
              document.body.classList.toggle("dark-mode");
          });
      }
  };

  /**
   * Initialize Counters
   */
  const initializeCounters = () => {
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
  };

  /**
   * Initialize Notes Carousel
   */
  const initializeNotesCarousel = () => {
      const notes = document.querySelectorAll(".note");
      const prevButton = document.getElementById("prev");
      const nextButton = document.getElementById("next");

      let currentNoteIndex = 0; // Start with the first note

      /**
       * Display the current note based on the index
       * @param {number} index - The index of the note to display
       */
      function showNote(index) {
          notes.forEach((note, i) => {
              note.classList.remove("active");
              if (i === index) {
                  note.classList.add("active");
              }
          });
      }

      /**
       * Navigate to the next note
       */
      function nextNote() {
          currentNoteIndex = (currentNoteIndex + 1) % notes.length; // Loop back to the start
          showNote(currentNoteIndex);
      }

      /**
       * Navigate to the previous note
       */
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
  };

  /**
   * Initialize All Features
   */
  const initializeAll = () => {
      initializeNavbar();
      initializeDropdowns();
      initializeLoveVault();
      initializeChristmasTree();
      initializeLoveCounter();
      initializeLightbox();
      initializeScrollReveal();
      initializeParticles();
      initializeBackToTop();
      initializeSmoothScroll();
      initializeParallax();
      initializeGSAP();
      initializeDarkModeToggle();
      initializeCounters();
      initializeNotesCarousel();
  };

  // Start Initialization
  initializeAll();
});
