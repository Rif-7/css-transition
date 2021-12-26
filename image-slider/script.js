const imgs = [];
const imageContainer = document.querySelector(".image-container");
const noOfPics = 3;
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
let currentPicNo = 0;

for (let i = 0; i < noOfPics; i++) {
  const img = new Image();
  img.src = `./imgs/pic${i}.jpg`;
  img.classList.add("image");
  imgs.push(img);
}

function changeDisplayPic(dpIndex) {
  if (dpIndex >= noOfPics) {
    dpIndex = 0;
  } else if (dpIndex < 0) {
    dpIndex = noOfPics - 1;
  }

  imageContainer.innerHTML = "";
  imageContainer.append(imgs[dpIndex]);
  currentPicNo = dpIndex;
}

function displayController() {
  return;
}

rightBtn.addEventListener("click", () => {
  changeDisplayPic(++currentPicNo);
});

leftBtn.addEventListener("click", () => {
  changeDisplayPic(--currentPicNo);
});

imageContainer.append(imgs[currentPicNo]);
