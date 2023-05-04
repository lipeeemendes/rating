const balls = document.querySelectorAll(".ball");
const bigBall = document.querySelector(".bigball");

balls[0].addEventListener("click", (e) => {
  e.target.style.background = "yellow";
  bigBall.style.background = "black";

  balls[1].style.background = "gray";
  balls[2].style.background = "gray";
  balls[3].style.background = "gray";
  balls[4].style.background = "gray";
});

balls[1].addEventListener("click", (e) => {
  e.target.style.background = "yellow";
  bigBall.style.background = "red";

  balls[0].style.background = "yellow";

  balls[2].style.background = "gray";
  balls[3].style.background = "gray";
  balls[4].style.background = "gray";
});

balls[2].addEventListener("click", (e) => {
  e.target.style.background = "yellow";
  bigBall.style.background = "orange";

  balls[1].style.background = "yellow";
  balls[0].style.background = "yellow";

  balls[3].style.background = "gray";
  balls[4].style.background = "gray";
});

balls[3].addEventListener("click", (e) => {
  e.target.style.background = "yellow";
  bigBall.style.background = "blue";

  balls[2].style.background = "yellow";
  balls[1].style.background = "yellow";
  balls[0].style.background = "yellow";

  balls[4].style.background = "gray";
});

balls[4].addEventListener("click", (e) => {
  e.target.style.background = "yellow";
  bigBall.style.background = "green";

  balls[3].style.background = "yellow";
  balls[2].style.background = "yellow";
  balls[1].style.background = "yellow";
  balls[0].style.background = "yellow";
});
