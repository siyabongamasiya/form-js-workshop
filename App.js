import FormControl from "./FormControl.js";

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

getUsername();

// --- Event Handlers ---
const submitHandler = (event) => {
  event.preventDefault();
  const inputvalue = document.querySelector("input[name='number']").value;
  const email = document.querySelector("input[name='email']");

  let isValid = new FormControl(inputvalue, email.value).submitHandler();

  if (!isValid) {
    errorMessageNumber.style.display = "block";
    return;
  }
};

const onYes = () => {
  const form = document.querySelector("#form");
  const choiceContainer = document.querySelector("#choice-container");

  choiceContainer.style.display = "none";
  form.style.display = "block";
};

const onNo = () => {
  const goodByeContainer = document.querySelector("#good-bye-container");
  const choiceContainer = document.querySelector("#choice-container");

  goodByeContainer.style.display = "block";
  choiceContainer.style.display = "none";
};

const saveName = () => {
  const usernameField = document.querySelector("input[name='username']");
  const getNameSection = document.querySelector("#get-name");
  const choiceContainer = document.querySelector("#choice-container");

  localStorage.setItem("username", usernameField.value);
  getUsername();
  getNameSection.style.display = "none";
  choiceContainer.style.display = "block";
};

// --- Event Listeners ---
document.querySelector("form[name='myForm']").addEventListener("submit", submitHandler);
document.querySelector("#yes").addEventListener("click", onYes);
document.querySelector("#no").addEventListener("click", onNo);
document.querySelector("#save").addEventListener("click", saveName);
