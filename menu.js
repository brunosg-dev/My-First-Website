const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const navbar = document.querySelector("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

const updateNavTransparency = () => {
  if (!navbar) return;
  if (window.scrollY <= 5) {
    navbar.classList.add("nav-top");
  } else {
    navbar.classList.remove("nav-top");
  }
};

window.addEventListener("scroll", updateNavTransparency, { passive: true });
window.addEventListener("load", updateNavTransparency);
