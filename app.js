const left = document.querySelector(".left");
const right = document.querySelector(".right");

let slider = document.querySelectorAll(".slider-content");

let currentPosition = 0;

left.addEventListener("click", () => {
  if (currentPosition == 0) {
    currentPosition = 3;
  }
  currentPosition -= 1;
  for (let index = 0; index < slider.length; index++) {
    slider[index].style.transform = `translateX(-${currentPosition}00%)`;
  }
});

right.addEventListener("click", () => {
  currentPosition += 1;
  if (currentPosition > slider.length - 3) {
    currentPosition = 0;
  }
  for (let index = 0; index < slider.length; index++) {
    slider[index].style.transform = `translateX(-${currentPosition}00%)`;
  }
});
