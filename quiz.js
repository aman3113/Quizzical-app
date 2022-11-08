const ansArray = ["Adios", "Care Bears", "Venus", "Mexico", "Three"];
const output = document.querySelector(".output");
let count = 0;
let display = document.querySelector("#display");
let checkBtn = document.getElementById("check-btn");
let restartBtn = document.getElementById("restart-btn");

checkBtn.addEventListener("click", handleSubmit);
restartBtn.addEventListener("click", handleRestart);

function handleSubmit() {
  const inputArray = document.querySelectorAll('input[type="radio"]:checked');

  if (inputArray.length === ansArray.length) {
    checkAnswer(inputArray, ansArray);
    display.classList.add("display");
    output.textContent = `You Scored ${count}/5 correct answers `;
    checkBtn.classList.add("none");
    restartBtn.classList.remove("none");
  } else {
    output.textContent = "Please answer all Questions.";
  }
}

function checkAnswer(inputArray, ansArray) {
  const labelArray = document.querySelectorAll('input[type="radio"]+label');

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].value === ansArray[i]) {
      count++;
      labelArray.forEach((label) => {
        if (label.textContent === inputArray[i].value) {
          label.style.backgroundColor = "#94D7A2";
          label.style.border = "none";
        }
      });
    } else {
      labelArray.forEach((label) => {
        if (label.textContent === ansArray[i]) {
          label.style.backgroundColor = "#94D7A2";
          label.style.border = "none";
        }
      });
      labelArray.forEach((label) => {
        if (label.textContent === inputArray[i].value) {
          label.style.backgroundColor = "#F6D9DB";
          label.style.border = "none";
          label.style.color = "#8F94AF";
        }
      });
    }
  }
}

function handleRestart() {
  location.reload();
}
