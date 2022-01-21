/** @format */
const INPUT_DIV = document.querySelector(".input_div");

function checkInput() {
  INPUT_DIV.classList.add("active");
  document.querySelector(".loginBtn").classList.add("inactive");
  document.querySelector(".verifyBtn").classList.add("active");
}

function verifyInput() {
  document.querySelector("main").classList.add("inactive");
  document.querySelector(".welcome_screen").classList.add("active");
}
