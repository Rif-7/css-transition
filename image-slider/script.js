const imageContainer = document.querySelector(".image-container");
const noOfPics = 5;
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
let currentPicNo = 0;

for (let i = 0; i < noOfPics; i++) {
  const img = new Image();
  img.src = `./imgs/pic${i}.jpg`;
  img.classList.add("image");
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
    .querySelector(`.image[data-index='${currentPicNo}']`)
    .classList.toggle("image-transitioned");
  const image = document.querySelector(`.image[data-index='${dpIndex}']`);
  image.classList.toggle("image-transitioned");
  currentPicNo = dpIndex;
}

function autoChanger() {
  changeDisplayPic(currentPicNo + 1);
}

rightBtn.addEventListener("click", () => {
  changeDisplayPic(currentPicNo + 1);
  clearInterval(timeInterval);
  timeInterval = setInterval(autoChanger, 5000);
});

leftBtn.addEventListener("click", () => {
  changeDisplayPic(currentPicNo - 1);
  clearInterval(timeInterval);
  timeInterval = setInterval(autoChanger, 5000);
});

document
  .querySelector(`.image[data-index='${currentPicNo}']`)
  .classList.toggle("image-transitioned");

let timeInterval = setInterval(autoChanger, 5000);
