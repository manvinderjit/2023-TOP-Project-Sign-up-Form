const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm_password");
const spanText = document.querySelectorAll(".password_match");

passwordInput.addEventListener('input', checkPassword);
confirmPasswordInput.addEventListener('input', checkPassword);

function checkPassword() {
    let innerTextValue = "";
    if(passwordInput.value !== confirmPasswordInput.value) {                
        innerTextValue = "Password and Confirm Password must match!"
        passwordInput.classList.remove("correct");
        passwordInput.classList.add("error");
        confirmPasswordInput.classList.remove("correct");
        confirmPasswordInput.classList.add("error");
    }
    else {
        innerTextValue = "";
        passwordInput.classList.remove("error");
        passwordInput.classList.add("correct");
        confirmPasswordInput.classList.remove("error");
        confirmPasswordInput.classList.add("correct");
    } 

    spanText.forEach((span) => {
        span.innerText = innerTextValue;
    })
}