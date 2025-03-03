function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active-menu");
  const hamburger = document.getElementById("hamburger");
  hamburger.classList.toggle("active-hamburger");
  const mobile = document.getElementById("mobile-nav");
  mobile.classList.toggle("active-mobile");
  const close = document.getElementById("close");
  close.classList.toggle("active-close");
  const background = document.body;
  background.classList.toggle("active-background");
  const header = document.getElementById("header");
  header.classList.toggle("active-header");
}
