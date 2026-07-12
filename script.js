/* ===========================================
   Muhibullah Mudaser Portfolio JavaScript
=========================================== */

// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===========================================
// Active Navigation Link
// ===========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===========================================
// Header Background on Scroll
// ===========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "#0f172a";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.4)";
    } else {
        header.style.background = "#111827";
        header.style.boxShadow = "none";
    }

});

// ===========================================
// Typing Animation
// ===========================================

const titles = [
    "Software Developer",
    "Full Stack Developer",
    "SAP BTP CAP Developer",
    "Python Developer",
    "AI & Machine Learning Engineer"
];

const typingElement = document.querySelector(".hero-text h2");

let titleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentTitle = titles[titleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentTitle.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentTitle.length) {
            deleting = true;

            setTimeout(typeEffect, 1800);
            return;
        }

    } else {

        typingElement.textContent =
            currentTitle.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            titleIndex++;

            if (titleIndex >= titles.length)
                titleIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

// ===========================================
// Fade In Animation
// ===========================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ===========================================
// Back To Top Button
// ===========================================

const button = document.createElement("button");

button.innerHTML = "↑";

button.id = "topBtn";

document.body.appendChild(button);

button.style.position = "fixed";
button.style.bottom = "30px";
button.style.right = "30px";
button.style.width = "50px";
button.style.height = "50px";
button.style.border = "none";
button.style.borderRadius = "50%";
button.style.background = "#38bdf8";
button.style.color = "#000";
button.style.fontSize = "22px";
button.style.cursor = "pointer";
button.style.display = "none";
button.style.boxShadow = "0 5px 15px rgba(0,0,0,.4)";
button.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }

});

button.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===========================================
// Reveal Project Cards One By One
// ===========================================

const cards = document.querySelectorAll(".project,.card,.grid div");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".6s";

    setTimeout(() => {

        card.style.opacity = "1";
        card.style.transform = "translateY(0px)";

    }, index * 150);

});

// ===========================================
// Current Year
// ===========================================

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        "© " +
        new Date().getFullYear() +
        " Muhibullah Mudaser | All Rights Reserved";
}

console.log("Portfolio Loaded Successfully");
