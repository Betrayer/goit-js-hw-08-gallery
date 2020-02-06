"use strict";

import images from "./gallery-items.js";

const element = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const button = document.querySelector(".lightbox__button");
const lightboxImg = document.querySelector(".lightbox__image");

const imgList = images.reduce(
  (acc, imgArr) =>
    acc +
    `<li class="gallery__item">
<a
  class="gallery__link"
  href='#'
>
  <img
    class="gallery__image"
    src=${imgArr.preview}
    data-source=${imgArr.original}
    alt=${imgArr.description}
  />
</a>
</li>`,
  ""
);
element.insertAdjacentHTML("afterbegin", imgList);

element.addEventListener("click", mouseClick);

function mouseClick(e) {
  if (e.target.classList.contains("gallery__image")) {
    lightbox.classList.toggle("is-open");
    lightboxImg.src = e.target.dataset.source;
  }
}

button.addEventListener("click", closeImg);

function closeImg(e) {
  if (e.target.classList.contains("lightbox__button")) {
    lightbox.classList.toggle("is-open");
    lightbox.removeEventListener(mouseClick, closeImg);
  }
}
