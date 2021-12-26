let previousSelected = document.createElement("div");

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("selected");
    previousSelected.classList.toggle("selected");
    previousSelected = item;
  });
});
