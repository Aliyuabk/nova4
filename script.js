// =========================================================
// NOVA4 — JAVASCRIPT
// =========================================================


// MOBILE NAVIGATION

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuButton.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


// CLOSE MOBILE MENU WHEN LINK IS CLICKED

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// SIMPLE SCROLL REVEAL

const revealElements = document.querySelectorAll(
    ".member-card, .competition-card, .process-card, .task-row, .timeline-item"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.1
    }

);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// CURRENT YEAR

const yearElements = document.querySelectorAll("[data-year]");

yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});