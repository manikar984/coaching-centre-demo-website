// Mobile Navigation
const navLinks = document.querySelector(".nav-links");
const navButton = document.querySelector(".nav-button");


// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            event.preventDefault();
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }

        // Close mobile navigation
        if (navLinks) {
            navLinks.classList.remove("active");
        }
    });
});


// Add Mobile Menu Button
const menuButton = document.createElement("button");

menuButton.classList.add("menu-button");
menuButton.innerHTML = "☰";
menuButton.setAttribute("aria-label", "Open navigation menu");

document.querySelector(".navbar").appendChild(menuButton);


// Mobile Menu Toggle
menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Close Menu When Clicking Outside
document.addEventListener("click", function (event) {

    const navbar = document.querySelector(".navbar");

    if (!navbar.contains(event.target)) {
        navLinks.classList.remove("active");
    }
});


// Prevent WhatsApp placeholder link from jumping to top
const whatsappButton = document.querySelector(
    '.enquiry-buttons a[href="#"]'
);

if (whatsappButton) {
    whatsappButton.addEventListener("click", function (event) {
        event.preventDefault();

        const phoneNumber = "916300530178";

        const message = encodeURIComponent(
            "Hello, I would like to know more about the courses and admissions."
        );

        window.open(
            `https://wa.me/${phoneNumber}?text=${message}`,
            "_blank"
        );
    });
}