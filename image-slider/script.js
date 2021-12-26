const imageContainer = document.querySelector(".image-container");
const circleContainer = document.querySelector(".circle-container");
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

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.setAttribute("data-index", i);
  circle.addEventListener("click", () => {
    changeDisplayPic(i);
    clearInterval(timeInterval);
    timeInterval = setInterval(autoChanger, 5000);
  });
  circleContainer.appendChild(circle);
}

function changeDisplayPic(dpIndex) {
  if (dpIndex >= noOfPics) {
    dpIndex = 0;
  } else if (dpIndex < 0) {
    dpIndex = noOfPics - 1;
  }

  // removing transition from previously selected image and it's circle
  document
    .querySelector(`.image[data-index='${currentPicNo}']`)
    .classList.remove("image-transitioned");
  document
    .querySelector(`.circle[data-index='${currentPicNo}']`)
    .classList.remove("circle-transitioned");

  const image = document.querySelector(`.image[data-index='${dpIndex}']`);
  const circle = document.querySelector(`.circle[data-index='${dpIndex}']`);
  image.classList.add("image-transitioned");
  circle.classList.add("circle-transitioned");
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

changeDisplayPic(0);

let timeInterval = setInterval(autoChanger, 5000);
