const form = document.querySelector('form');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const errorf = document.querySelector('#errorf');
const errorl = document.querySelector('#errorl');
const errorE = document.querySelector('#errorE');
const errorp = document.querySelector('#errorp');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(firstname.value == ''){
        errorf.textContent = 'First name cannot be empty';
    }
    if(lastname.value == ''){
        errorl.textContent = 'Last name cannot be empty';
    }
    if(!email.value.match(mailformat)){
        errorE.textContent = 'Looks like this is not an email';
    }
    if(password.value == ''){
        errorp.textContent = 'Password cannot be empty';
    }

})