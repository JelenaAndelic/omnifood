const hamburger = document.querySelector(".header__hamburger");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const navbar = document.querySelector(".header__navbar");
const links = document.querySelectorAll(".links a");

hamburger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    body.classList.remove("noscroll");
  } else {
    header.classList.add("open");
    body.classList.add("noscroll");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navbar.style.opacity = 0.9;
  } else {
    navbar.style.opacity = 1;
  }
  console.log(window.scrollY);
});
