
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get the values from inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (usernameValue === '') {
      //show error
      //add error class
      setErrorFor(username, 'Username cannot be blank');
    }else {
      //add succes class
      setSuccesFor(username);
    }

    if (emailValue.match(validRegex)) {
      setSuccesFor(email);
    }else {
      setErrorFor(email,'Email not valid');
    }

    if (passwordValue === ''){
      setErrorFor(password, 'Password cannot be blank');
    }else {
      setSuccesFor(password);
    };
    if (password2Value === ''){
      setErrorFor(password2, 'Password cannot be blank');
    }else if (passwordValue !== password2Value) {
      setErrorFor (password2, 'Passwords does not match');
    }else {
      setSuccesFor(password2);
    }
}

function setErrorFor (input,message) {
  const formControl  = input.parentElement; //.form-control
  const small = formControl.querySelector ('small');

  //add error inside small
  small.innerText = message;

  //add error class
  formControl.className = 'form-control error';
}

function setSuccesFor (input) {
  const formControl  = input.parentElement; //.form-control
  formControl.className = 'form-control succes'
}