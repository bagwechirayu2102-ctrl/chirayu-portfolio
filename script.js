
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

// STEP 7 - SCROLL REVEAL ANIMATIONS

document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(
        ".skill-card, .project-card, .education-card, .contact-card"
    );

    // Show everything if animations are not supported
    if (!("IntersectionObserver" in window)) {
        revealElements.forEach(element => {
            element.classList.add("visible");
        });
        return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });
});
