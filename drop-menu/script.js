const btn = document.querySelector(".btn");
btn.addEventListener("click", showMenu);

function showMenu() {
  const menu = document.querySelector(".dd-menu");
  menu.classList.toggle("clicked");
}
