import hamburgerMenu from "./menu-hamburgesa.js";
import navbar from "./navbar.js";
import textAnimation from "./textAnimation.js";
import productsShadow from "./productsShadow.js";
import contactForm from "./contactForm.js";


const main = () => {
    navbar();
    textAnimation();
    hamburgerMenu();
    contactForm();
};


document.addEventListener("DOMContentLoaded", main);
document.addEventListener("scroll", e => {
    navbar();
    productsShadow();
})