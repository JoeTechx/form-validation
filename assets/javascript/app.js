const form = document.getElementById('form');
const username = document.getElementById('username');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});



function checkInputs() {
    // get the values from the input
    // trim to remove the white spaces
    const usernameValue = username.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === "") {
        //   show error
        // add error class
        setErrorFor(username, 'first can not be empty');
    } else {
        // add success class
        setSuccessFor(username);
    }

    if (lastnameValue === '') {
        setErrorFor(lastname, 'Lastname cannot be empty');
    } 
     else {
        setSuccessFor(lastname);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be empty');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty');
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error'
    small.innerText = message;

}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}