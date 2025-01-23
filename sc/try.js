document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const contentContainer = document.getElementById("content");

    // Function to check if the page load is due to a refresh
    const isPageRefreshed = () => {
        const perfEntries = performance.getEntriesByType("navigation");
        if (perfEntries.length > 0) {
            return perfEntries[0].type === "reload"; // Detect if the page load type is 'reload'
        }
        // Fallback for older browsers
        return performance.navigation.type === 1; // 1 indicates a reload
    };

    if (isPageRefreshed()) {
        // Show preloader and hide main content
        preloader.style.display = "flex";
        contentContainer.style.display = "none";

        // Preloader duration
        setTimeout(() => {
            preloader.classList.add("hidden"); // Fade out preloader
            setTimeout(() => {
                preloader.style.display = "none"; // Fully hide preloader
                contentContainer.style.display = "block"; // Show main content
            }, 500); // Match fade-out duration
        }, 2500); // Preloader animation duration
    } else {
        // Skip preloader on normal navigation
        preloader.style.display = "none";
        contentContainer.style.display = "block";
    }
});
