const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

}

const toggle2 = document.getElementById("toggle2");
const navBar = document.getElementById("nav2");
const container = document.querySelector(".summerized");

toggle2.addEventListener("click", bottomMenu);

function bottomMenu() {

    toggle2.classList.toggle("active");
    navBar.classList.toggle("active");
    container.classList.toggle("active");
    
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {

    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    toggle2.classList.remove("active");
    navBar.classList.remove("active");
    container.classList.remove("active");

}