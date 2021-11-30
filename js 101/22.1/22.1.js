const firstNameInput = document.querySelector("#first");
const lastNameInput = document.querySelector("#last");
const ageInput = document.querySelector("#age");
const emailInput = document.querySelector("#email");
const changeButton = document.querySelector("button");
const upperDiv = document.querySelector(".div1");
const bottomDiv = document.querySelector(".div2");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let firstNameValue = firstNameInput.value;
  let lastNameValue = lastNameInput.value;
  let ageValue = ageInput.value;
  let emailValue = emailInput.value;
  upperDiv.append(
    `${firstNameValue}  ${lastNameValue}  ${ageValue}  ${emailValue}`
  );
  bottomDiv.append(
    "Are you ok with this information or you want to change it?"
  );
  firstNameInput.setAttribute("disabled", false);
  lastNameInput.setAttribute("disabled", false);
  ageInput.setAttribute("disabled", false);
  emailInput.setAttribute("disabled", false);
});

changeButton.addEventListener("click", function (e) {
  firstNameInput.setAttribute("disabled", true);
  lastNameInput.setAttribute("disabled", true);
  ageInput.setAttribute("disabled", true);
  emailInput.setAttribute("disabled", true);
});
