window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 100);
});

const carousel = document.querySelector(".groupcard");
let isDragStart = false,
  prevPageX,
  prevScrollLeft;

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
