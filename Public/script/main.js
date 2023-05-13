window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 100);
});

const carousel = document.querySelector(".groupcard");
const firstImg = carousel.querySelectorAll(".card")[0];
const arrowIcons = document.querySelectorAll(".wrapper i");
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
const ShowHideIcons = () => {
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[0].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
};
let isDragStart = false,
  prevPageX,
  prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    ShowHideIcons();
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  ShowHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
