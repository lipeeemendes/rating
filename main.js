const balls = document.querySelectorAll(".ball");
const bigBall = document.querySelector(".bigball");

const colors = [
  "&#128543;",
  "&#128533;",
  "&#128578;",
  "&#128512;",
  "&#128525;",
];

balls.forEach((ball, index) => {
  ball.addEventListener("click", (e) => {
    balls.forEach((ball, i) => {
      ball.style.color = i <= index ? "yellow" : "";
      bigBall.innerHTML = colors[index];
    });
  });
});
