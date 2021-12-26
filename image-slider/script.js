const imageContainer = document.querySelector(".image-container");
const noOfPics = 5;
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
let currentPicNo = 0;

for (let i = 0; i < noOfPics; i++) {
  const img = new Image();
  img.src = `./imgs/pic${i}.jpg`;
  img.classList.add("image", `image-no${i}`);
  img.setAttribute("data-index", i);
  img.style.zIndex = i;
  imageContainer.appendChild(img);
}

function changeDisplayPic(dpIndex) {
  if (dpIndex >= noOfPics) {
    dpIndex = 0;
  } else if (dpIndex < 0) {
    dpIndex = noOfPics - 1;
  }

  document
    .querySelector(`.image-no${currentPicNo}`)
    .classList.toggle("image-transitioned");
  const image = document.querySelector(`.image-no${dpIndex}`);
  image.classList.toggle("image-transitioned");
  currentPicNo = dpIndex;
}

function autoChanger() {
  changeDisplayPic(currentPicNo + 1);
}

rightBtn.addEventListener("click", () => {
  changeDisplayPic(currentPicNo + 1);
});

leftBtn.addEventListener("click", () => {
  changeDisplayPic(currentPicNo - 1);
});

document
  .querySelector(`.image-no${currentPicNo}`)
  .classList.toggle("image-transitioned");

setInterval(autoChanger, 5000);
