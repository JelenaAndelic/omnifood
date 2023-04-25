const hamburger = document.querySelector(".header__hamburger");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const navbar = document.querySelector(".header__navbar");
const links = document.querySelectorAll(".links a");
const buttons = document.querySelectorAll(".header__info a");

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

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

for (const button of buttons) {
  button.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop - 70,
    behavior: "smooth",
  });
}

for (const link of links) {
  link.addEventListener("click", () => {
    header.classList.remove("open");
    body.classList.remove("noscroll");
  });
}
