const balls = document.querySelectorAll(".ball");
const bigBall = document.querySelector(".bigball");

const colors = ["black", "red", "blue", "purple", "green"];

balls.forEach((ball, index) => {
  ball.addEventListener("click", (e) => {
    balls.forEach((ball, i) => {
      ball.style.background = i <= index ? "yellow" : "";
      bigBall.style.background = colors[index];
    });
  });
});
