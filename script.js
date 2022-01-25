/** @format */
const INPUT_DIV = document.querySelector(".input_div");
const loginBtn = document.querySelector(".loginBtn");
const verifyBtn = document.querySelector(".verifyBtn");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

function checkInput() {
  INPUT_DIV.classList.add("active");
  loginBtn.classList.add("inactive");
  verifyBtn.classList.add("active");
}

function verifyInput() {
  if (
    emailInput.value.trim().length < 8 ||
    passwordInput.value.trim().length < 8
  ) {
    emailError.classList.add("active");
    passwordError.classList.add("active");
  } else {
    emailError.classList.remove("active");
    passwordError.classList.remove("active");
    document.querySelector("main").classList.add("inactive");
    document.querySelector(".welcome_screen").classList.add("active");
  }
}
