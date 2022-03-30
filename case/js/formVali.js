// Setting the page title
document.title = "Contact us";

// Selecting HTML elements
const form = document.getElementById("c-form");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const adress = document.getElementById("adress");
const zip = document.getElementById("zipCode");
const cityName = document.getElementById("cityName");
const message = document.getElementById("message");

// Function to validate inputs length form
function lengthValidation(value, len) {
 if (value.trim().length <= len) {
  return true;
 } else {
  return false;
 }
}

// Event listener
form.addEventListener("submit", (e) => {
 e.preventDefault();

 validateUserInput();
});
const setError = (element, message) => {
 const inputControl = element.parentElement;
 const displayError = inputControl.querySelector(".form-error");

 displayError.innerText = message;
 inputControl.classList.add("form-error");
 inputControl.classList.remove("form-success");
};

const setSuccess = (element) => {
 const inputControl = element.parentElement;
 const displayError = inputControl.querySelector(".form-error");

 displayError.innerText = "";
 inputControl.classList.add("form-success");
 inputControl.classList.remove("form-error");
};

// Function to validate email input in contact form
const emailValidation = (email) => {
 const regEx = /\S+@\S+\.\S+/;
 const emailPattern = regEx.test(email);
 return emailPattern;
};

const validatePhone = (num, len) => {
 const phoneNr = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
 const phoneLen = phoneLen.test(len);
 const phonePattern = phoneNr.test(num);
 return phonePattern;
};

const validateUserInput = () => {
 const firstNameValue = firstName.value.trim();
 const lastNameValue = lastName.value.trim();
 const emailValue = email.value.trim();
 const phoneValue = phone.value.trim();
 const adressValue = adress.value.trim();
 const zipValue = zip.value.trim();
 const messageValue = message.value.trim();

 if (firstNameValue === "") {
  setError(firstName, "Fornavn er påkrevd*");
 } else {
  setSuccess(firstName);
 }

 if (lastNameValue === "") {
  setError(lastName, "Etternavn er påkrevd*");
 } else {
  setSuccess(lastName);
 }

 if (phoneValue === "") {
  setError(phone, "Telefon nummer er påkrved*");
 } else if (!phoneValue) {
  setError(phone, "Sørg for at du har skrevet inn et gyldig nummer*");
 } else {
  setSuccess(phone);
 }

 if (emailValue === "") {
  setError(email, "Epost er påkrevd*");
 } else if (!emailValidation(emailValue)) {
  setError(email, "Sørg for at du har skrevet inn e-posten korrekt*");
 } else {
  setSuccess(email);
 }

 if (adressValue === "") {
  setError(adress, "Vennligst fyll inn din Adresse*");
 } else {
  setSuccess(adress);
 }

 if (zipValue === "") {
  setError(zip, "Venligst fyll inn Postnummer*");
 } else {
  setSuccess(zip);
 }

 if (messageValue === "") {
  setError(message, "Venlidgst fyll inn din melding*");
 } else {
  setSuccess(message);
 }
};

// Function to create a case number
function caseNumber(length) {
 const randomNumLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 let result = "";

 for (let i = 0; i < length; i++) {
  result += randomNumLet.charAt(Math.floor(Math.random() * randomNumLet.length));
 }

 return result;
}
