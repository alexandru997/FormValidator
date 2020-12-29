const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

//Input error mesage
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form__control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
//Succes input

function showSucces(input) {
  const formControl = input.parentElement;
  formControl.className = "form__control succes";
}

//Validation email

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSucces(input);
  } else {
    showError(input, "Email is not valid");
  }
}

//Check required fields

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSucces(input);
    }
  });
}
//Get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Check input lenght
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be a least${min} characters`);
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be a less than ${max} charachters`
    );
  } else {
    showSucces(input);
  }
}

//Check passwordMatch
function checkPasswordMatch(input1, input2){
  if(input1.value !== input2.value){
    showError(input2, 'Password do not match')
  }
}


//EventListener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(username.value);
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 10);
  checkLength(username, 5, 10);
  checkEmail(email);
  checkPasswordMatch(password, password2)
});
