 // Select the carousel container and reviews
 const carousel = document.querySelector('.carousel');
 const reviews = document.querySelectorAll('.review');

 let currentIndex = 0;

 // Function to calculate and apply scrolling
 function showReview(index) {
     // Check screen width and calculate scrolling distance
     const scrollDistance = window.innerWidth > 768 
         ? carousel.offsetWidth * 0.3033 // 30.33% for larger screens
         : carousel.offsetWidth;        // 100% for smaller screens

     // Apply the translation
     carousel.style.transform = `translateX(-${index * scrollDistance}px)`;
 }

 // Auto-scroll every 5 seconds
 setInterval(() => {
     currentIndex++;
     if (currentIndex >= reviews.length) {
         currentIndex = 0; // Loop back to the first review
     }
     showReview(currentIndex);
 }, 5000);

 // Update scrolling dynamically when the window is resized
 window.addEventListener('resize', () => {
     showReview(currentIndex); // Adjust position based on screen size
 });
