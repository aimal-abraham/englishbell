document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Display the error message
        alert("Internal Server Error. Your submission is not saved. Please contact us using the WhatsApp button.");
        
        // Optionally, you can redirect the user to a WhatsApp link
        // window.location.href = "https://wa.me/your-phone-number";
    });
});