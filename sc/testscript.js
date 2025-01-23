// JavaScript for triggering animations
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".fade-in, .slide-in-left, .scale-up, .slide-in-right, .fade-in-scale, .fade-in-up, .slide-from-bottom");
  
    animatedElements.forEach((element) => {
      element.style.opacity = 0; // Ensure the elements are invisible initially
    });
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.animationPlayState = "running"; // Trigger animation
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    });
  
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  });
  