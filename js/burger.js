const toggleMenu = document.querySelector(".toggle-menu");
const tog = document.querySelector(".menu");
function res() {
  console.log(res);

  toggleMenu.classList.toggle("active");
  tog.classList.toggle("active");
}
toggleMenu.addEventListener("click", res);
function rotate() {
  console.log("rotate");
  tog.classList.toggle("rotate");
}
