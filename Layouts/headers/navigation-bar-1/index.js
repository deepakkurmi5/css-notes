const manu = document.querySelector(".mobile-navbar-button");
const header = document.querySelector(".header");
const navItem = document.querySelectorAll(".nav-item");

console.log(navItem);

manu.addEventListener("click", function () {
  header.classList.toggle("active");
});

for (const iterator of navItem) {
  console.log(iterator);
  iterator.addEventListener("click", function () {
    header.classList.toggle("active");
  });
}
