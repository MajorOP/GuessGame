let guessNumber = Math.ceil(Math.random() * 20);
let message = document.querySelector(".message");
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    message.textContent = "No Number!";
  } else if (guessNumber === guess) {
    message.textContent = "Congratulations, You Won!";
    document.querySelector(".number").textContent = guessNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > guessNumber) {
    if (score > 1) {
      message.textContent = "Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You Lost the Game!";
      score=0;
      document.querySelector(".score").textContent = score;
    }
  } else if (guess < guessNumber) {
    if (score > 1) {
      message.textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      score=0;
      document.querySelector(".score").textContent = score;
      message.textContent = "You Lost the Game!";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  guessNumber = Math.ceil(Math.random() * 20);
  score = 20;
  highscore = 0;
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = highscore;
  message.textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
