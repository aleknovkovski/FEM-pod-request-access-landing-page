const formEl = document.querySelector(".signup-form")
const inputEl = document.querySelector(".signup-form input")

const validateEmail = (email) => {
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return email.match(pattern);
};

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailIsValid = validateEmail(inputEl.value);
    if(!emailIsValid) {
        alert("email not valid")
    }
})