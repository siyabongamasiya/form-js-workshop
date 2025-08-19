import FormControl from "./FormControl.js";

// // Set Item
// localStorage.setItem("lastname", "Smith");
// // Retrieve
// document.querySelector('p').innerHTML = localStorage.getItem("lastname");

// const num1 = new NumberWork(-1)
// num1.displayNumber()
// num1.posOrNeg()
const errorMessageNumber = document.querySelector("#error-message");

const getUsername = () => {
  const username = localStorage.getItem("username");
  const usernameSpan = document.getElementById("username");
  const getNameSection = document.querySelector("#get-name");
  const choiceContainer = document.querySelector("#choice-container");

  if (username) {
    getNameSection.style.display = "none";
    choiceContainer.style.display = "block";

    usernameSpan.textContent = username;
  }
};

getUsername()   

window.submitHandler = (event) => {
  event.preventDefault();
  const inputvalue = document.querySelector("input[name='number']").value;
  const email = document.querySelector("input[name='email']");

  let isValid = new FormControl(inputvalue, email.value).submitHandler();

  if (!isValid) {
    errorMessageNumber.style.display = "block";
    return;
  }
};

window.onYes = () => {
  const form = document.querySelector("#form");
  const choiceContainer = document.querySelector("#choice-container");

  choiceContainer.style.display = "none";
  form.style.display = "block";
};

window.onNo = () => {
  const goodByeContainer = document.querySelector("#good-bye-container");
  const choiceContainer = document.querySelector("#choice-container");

  goodByeContainer.style.display = "block";
  choiceContainer.style.display = "none";
};

window.saveName = () => {
  const usernameField = document.querySelector("input[name='username']");
  const getNameSection = document.querySelector("#get-name");
  const choiceContainer = document.querySelector("#choice-container");

  localStorage.setItem("username", usernameField.value);
  getUsername();
  getNameSection.style.display = "none";
  choiceContainer.style.display = "block";
};

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   let inputvalue = document.querySelector("input[name='number']").value;
//   //alert(inputvalue)
//   // new NumberWork(inputvalue).displayNumber()
// });
