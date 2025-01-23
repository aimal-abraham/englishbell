// JavaScript for Preloader
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");

    // Set a delay before removing the preloader
    setTimeout(() => {
      preloader.style.display = "none"; // Hide preloader
      mainContent.style.display = "block"; // Show main content
      document.body.classList.remove("no-scroll"); // Re-enable scrolling
    }, 3500); // 3 seconds delay
  });