let form = document.querySelector("#form");
let firstName = document.querySelector("input[id=firstName]");
let lastName = document.querySelector("input[id=lastName]");
let email = document.querySelector("input[id=email]");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let firstNameRequired = document.querySelector("#firstNameRequired");
let lastNameRequired = document.querySelector("#lastNameRequired");
let emailRequired = document.querySelector("#emailRequired");
let passwordsMatchRequired = document.querySelector("#passwordsMatchRequired");


window.addEventListener("change", () => {
    if (!firstName.value) {
        firstNameRequired.style.display = "flex";
        firstNameRequired.textContent = "*This field is required";
        firstName.style.border = "1px solid red";
    } else {
        firstNameRequired.style.display = "none";
        firstNameRequired.textContent = "";
        firstName.style.border = "1px solid rgb(228, 202, 169)"
    }

    if (!lastName.value) {
        lastNameRequired.style.display = "flex";
        lastNameRequired.textContent = "*This field is required";
        lastName.style.border = "1px solid red";
    } else {
        lastNameRequired.style.display = "none";
        lastNameRequired.textContent = "";
        lastName.style.border = "1px solid rgb(228, 202, 169)"
    }

    if (email.checkValidity() == false) {
        emailRequired.style.display = "flex";
        emailRequired.textContent = "*This field is required";
        email.style.border = "1px solid red";
    } else {
        emailRequired.style.display = "none";
        emailRequired.textContent = "";
        email.style.border = "1px solid rgb(228, 202, 169)"
    }

    if (password.value !== confirmPassword.value) {
        passwordsMatchRequired.style.display = "flex";
        passwordsMatchRequired.textContent = "* Passwords do not match";
        password.style.border = "1px solid red";
        confirmPassword.style.border = "1px solid red";
    } else {
        passwordsMatchRequired.style.display = "none";
        passwordsMatchRequired.textContent = "";
        password.style.border = "1px solid rgb(228, 202, 169)"
    }

});