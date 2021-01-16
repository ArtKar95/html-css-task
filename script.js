const images = ["smart1.png", "smart2.png", "smart3.png"];
const imgElem = document.querySelector(".header-pic>img");
const next = document.querySelector(".next>button");
const prev = document.querySelector(".prev>button");


next.onclick = () => {
  changeImage();
};
prev.onclick = () => {
  changeImage("prev");
};
let currentImgIndex = 0;

function changeImage(type = "next") {
  if (type === "next") {
    currentImgIndex++;
    if (currentImgIndex > images.length - 1) {
      currentImgIndex = 0;
    }
    imgElem.src = "./images/slider/" + images[currentImgIndex];
  }

  if (type === "prev") {
    currentImgIndex--;
    if (currentImgIndex < 0) {
      currentImgIndex = images.length - 1;
    }
    imgElem.src = "./images/slider/" + images[currentImgIndex];
  }
}
