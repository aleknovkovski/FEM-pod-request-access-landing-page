const formEl = document.querySelector(".signup-form")
const inputEl = document.querySelector(".signup-form input")
const emailAlertEl = document.querySelector(".email-validity-alert")

const validateEmail = (email) => {
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return email.match(pattern);
};

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!inputEl.value) {
         return emailAlertEl.innerText = "Oops! Please add your email"
    }

    const emailIsValid = validateEmail(inputEl.value);

    if(!emailIsValid) {
        return emailAlertEl.innerText = "Oops! Please check your email"
    }
    emailAlertEl.innerText = ""
})