const btn = document.querySelector('.btn');
const emailInput = document.querySelector('#email');
const fNameInput = document.querySelector('#f-name');
const lNameInput = document.querySelector('#l-name');
const password = document.querySelector('#password');
const regexPatten = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
btn.addEventListener('click', e => {
    if (fNameInput.value === '') {
        fNameInput.classList.add('invaild');
        document.querySelector('.f-name-invaild').classList.add('invaild');
        e.preventDefault();
    } else {
        fNameInput.classList.remove('invaild');
        document.querySelector('.f-name-invaild').classList.remove('invaild');
    }
    if (lNameInput.value === '') {
        lNameInput.classList.add('invaild');
        document.querySelector('.l-name-invaild').classList.add('invaild');
        e.preventDefault();
    } else {
        lNameInput.classList.remove('invaild');
        document.querySelector('.l-name-invaild').classList.remove('invaild');
    }

    if (password.value === '') {
        password.classList.add('invaild');
        document.querySelector('.password-invaild').classList.add('invaild');
        e.preventDefault();
    } else {
        password.classList.remove('invaild');
        document.querySelector('.password-invaild').classList.remove('invaild');
    }
    if (!emailInput.value.match(regexPatten)) {
        emailInput.classList.add('invaild');
        document.querySelector('.email-invaild').classList.add('invaild');
        e.preventDefault()
    } else {
        emailInput.classList.remove('invaild');
        document.querySelector('.email-invaild').classList.remove('invaild');
    }
});