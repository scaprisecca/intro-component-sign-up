const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submit = document.querySelector('.btn');
const inputs = document.querySelectorAll('.form input');

//Functions

function checkValues(e){
    e.target.preventDefault;
    inputs.forEach(valueNotEmpty());
}

function checkName(input) {
    if (input.value == "") {
        if (input === 'email'){
            ValidateEmail(input.value);
        } else {
            document.querySelector(`.${input.name}-error`).style.display = "block";
            document.querySelector(`#${input.name}`).classList.add('error-input');
        }
    }
}

function ValidateEmail(mail) {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    return (true)
  } else {
    document.querySelector('.email-error').textContent = "Looks like this is not an email";
    document.querySelector('.email-error').style.display = 'block';
    document.querySelector('#email').classList.add('error-input');
  }
}

// Event Listeners
submit.addEventListener('click', (e) => {
    e.preventDefault();
    inputs.forEach(checkName);
    ValidateEmail(email.value);
});