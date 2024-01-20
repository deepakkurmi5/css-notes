const menuBar = document.getElementById("bars");
const closeMenu = document.querySelector(".fa-xmark");
const mobileMenu = document.getElementById("mobile-menu");

menuBar.addEventListener("click", function () {
  mobileMenu.style.display = "block";
  closeMenu.style.display = "block";
  menuBar.style.display = "none";
  mobileMenu.classList.toggle("menu-show");
});

closeMenu.addEventListener("click", function () {
  mobileMenu.style.display = "none";
  closeMenu.style.display = "none";
  menuBar.style.display = "block";
});
