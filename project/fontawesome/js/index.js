const mobileIcons = document.querySelector(".mobile-icons");
const headerSection = document.querySelector(".header-section");

mobileIcons.addEventListener("click", function () {
  headerSection.classList.toggle("active");
});
