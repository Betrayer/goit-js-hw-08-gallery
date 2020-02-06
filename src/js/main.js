"use strict";

import images from "./gallery-items.js";

const element = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const button = document.querySelector(".lightbox__button");
const lightboxImg = document.querySelector(".lightbox__image");

const imgList = images.reduce(
  (acc, el) =>
    acc +
    `<li class="gallery__item">
<a
  class="gallery__link"
  href='#'
>
  <img
    class="gallery__image"
    src=${el.preview}
    data-source=${el.original}
    alt=${el.description}
  />
</a>
</li>`,
  ""
);

element.insertAdjacentHTML("afterbegin", imgList);

element.addEventListener("click", mouseClick);

function mouseClick(e) {
  if (e.target.classList.contains("gallery__image")) {
    lightbox.classList.add("is-open");
    lightboxImg.setAttribute("src", e.target.dataset.source);
    button.addEventListener("click", closeImg);
  }
}

function closeImg(e) {
  if (e.target.classList.contains("lightbox__button")) {
    lightbox.classList.remove("is-open");
    lightboxImg.removeAttribute("src");
  }
  button.removeEventListener("click", closeImg);
}
