const passwordInput = document.getElementById("password");
const feedback = document.getElementById("feedback");
const strengthBar = document.getElementById("strength-bar");
const warningSign = document.getElementById("warning-symbol");
const warning = document.getElementById("warning");
const passwordSvg = document.getElementById("key-svg");

const exclamationIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>';
const crossIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/></svg>';
const checkIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>';

passwordInput.addEventListener("input", function(){
    const password = passwordInput.value;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialSign = /[_@#$"]/.test(password);

    passwordInput.classList.remove("warning", "error", "correct");
    feedback.classList.remove("warning", "error", "correct");
    strengthBar.classList.remove("warning", "error", "correct");
    warningSign.classList.remove("warning", "error", "correct");
    warning.classList.remove("warning", "error", "correct");
    passwordSvg.classList.remove("warning", "error", "correct");

        if (password.length < 5 || !hasUpperCase || !hasSpecialSign){
            feedback.textContent = "Enter a valid password";
            feedback.classList.add("error");
            warning.textContent = "Password should contain at least one uppercase and 1 of these signs: _ @ # $";
            warning.classList.add("error")
            passwordInput.classList.add("error");
            strengthBar.classList.add("error");
            warningSign.innerHTML = crossIcon;
            warningSign.classList.add("error");
            passwordSvg.classList.add("error");
        } else if (password.length < 10){
            feedback.textContent = "Your password is little secure";
            feedback.classList.add("warning");
            passwordInput.classList.add("warning");
            strengthBar.classList.add("warning");
            warningSign.innerHTML = exclamationIcon;
            warningSign.classList.add("warning");
            warning.textContent = "";
            passwordSvg.classList.add("warning");
        } else if(password.length >= 10 && hasUpperCase && hasSpecialSign) {
            feedback.textContent = "Password is secure";
            feedback.classList.add("correct");
            passwordInput.classList.add("correct");
            strengthBar.classList.add("correct");
            warningSign.innerHTML = checkIcon;
            warningSign.classList.add("correct");
            warning.textContent = "";
            passwordSvg.classList.add("correct");
        }
})

passwordInput.addEventListener("blur", ()=>{
    passwordInput.classList.remove("warning", "error", "correct");
    feedback.classList.remove("warning", "error", "correct");
    strengthBar.classList.remove("warning", "error", "correct")
    warningSign.classList.remove("warning", "error", "correct");
    passwordSvg.classList.remove("warning", "error", "correct");
    warning.classList.remove("warning", "error", "correct");
    warning.textContent = "";
    warningSign.innerHTML = "";
    feedback.textContent = "";
})