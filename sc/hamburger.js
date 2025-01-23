function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navinglinks');
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}