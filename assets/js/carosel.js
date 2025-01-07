document.addEventListener("DOMContentLoaded", () => {
    console.log("Carousel script loaded successfully.");

    const notes = document.querySelectorAll(".note");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    // If any are null or empty, bail out
    if (!notes.length || !prevButton || !nextButton) {
      console.warn("Carousel elements not found. Check IDs and classes.");
      return;
    }

    let currentNoteIndex = 0; // Start with the first note
    console.log(`Initial note index: ${currentNoteIndex}`);

    // Show the current note
    function showNote(index) {
      console.log(`Showing note at index: ${index}`);
      notes.forEach((note, i) => {
        note.classList.remove("active");
        if (i === index) note.classList.add("active");
      });
    }

    // Next note
    function nextNote() {
      currentNoteIndex = (currentNoteIndex + 1) % notes.length;
      console.log(`Next note index: ${currentNoteIndex}`);
      showNote(currentNoteIndex);
    }

    // Previous note
    function prevNote() {
      currentNoteIndex = (currentNoteIndex - 1 + notes.length) % notes.length;
      console.log(`Previous note index: ${currentNoteIndex}`);
      showNote(currentNoteIndex);
    }

    // Attach button events
    nextButton.addEventListener("click", nextNote);
    prevButton.addEventListener("click", prevNote);
    console.log("Event listeners attached to buttons.");

    // Initialize the first note
    showNote(currentNoteIndex);

    // (Optional) auto-scroll every 5s
    setInterval(nextNote, 5000);
});