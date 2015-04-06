
var form = document.querySelector('form');

form.addEventListener('submit', checkForm);

function checkForm(e) {
    e.preventDefault();

    var fname = document.querySelector('input[name="fname"]');
    var fnameError = document.querySelector('.fnameError').classList;

    var lname = document.querySelector('input[name="lname"]');
    var lnameError = document.querySelector('.lnameError').classList;

    var email = document.querySelector('input[name="email"]');
    var emailError = document.querySelector('.emailError').classList;

    var phone = document.querySelector('input[name="phone"]');
    var phoneError = document.querySelector('.phoneError').classList;


    if (fname.value === '') {
        fnameError.add('error');
    } else {
        fnameError.remove('error');
    }

    if (lname.value === '') {
        lnameError.add('error');
    } else {
        lnameError.remove('error');
    }

    if (email.value === '') {
        emailError.add('error');
    } else {
        emailError.remove('error');
    }

    if (phone.value === '') {
        phoneError.add('error');
    } else {
        phoneError.remove('error');
    }

function hide() {
  //div.style.display = 'none';
  div.classList.remove('show');
  div.classList.add('hide');
}

function show() {
  //div.style.display = 'none';
  div.classList.add('show');
  div.classList.remove('hide');
}


}