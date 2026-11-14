
// Welcome message in browser console

console.log("Welcome to Chirayu Bagwe's Portfolio!");

// Smooth navigation
document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function() {
        console.log("Navigating to: " + this.textContent);
    });

});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});
