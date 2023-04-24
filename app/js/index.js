const hamburger = document.querySelector(".header__hamburger");
const header = document.querySelector(".header");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    body.classList.remove("noscroll");
  } else {
    header.classList.add("open");
    body.classList.add("noscroll");
  }
});
