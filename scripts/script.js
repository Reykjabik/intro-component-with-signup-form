const form = document.querySelector('form');

const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {

    e.preventDefault();
    checkInputs();

});

function checkInputs(){

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();   

    if (firstNameValue === '') {
        showError(firstName);
    } else {
        showSuccess(firstName);
    }

    if (lastNameValue === '') {
        showError(lastName);
    } else {
        showSuccess(lastName);
    }

    if (emailValue === '' || !validateEmail(emailValue)) {
        showError(email);
    } else {
        showSuccess(email);
    }

    if (passwordValue === '') {
        showError(password);
    } else {
        showSuccess(password);
    }
}

function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function showError(input) {
    const parent = input.parentElement;
    if(parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('fail');
}

function showSuccess(input) {
    const parent = input.parentElement;
    if(parent.classList.contains('fail')) {
        parent.classList.remove('fail');
    }
    parent.classList.add('success');
}