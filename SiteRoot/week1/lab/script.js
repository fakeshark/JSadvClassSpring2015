var form = document.querySelector('#form');
var confirm = document.querySelector('#confirmation');

form.addEventListener('submit', checkForm);

function hide() {
  form.classList.remove('show');
  form.classList.add('hide');
}
function show() {
  //div.style.display = 'none';
  confirm.classList.remove('hide');
  confirm.classList.add('show');
}

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

    var output = "";   
    var isValid = true;

    if (fname.value === '') {
        fnameError.add('error');
        isValid = false;
    } else {
        fnameError.remove('error');
        output += "First Name: " + fname.value + "<br />";
    }

    if (lname.value === '') {
        lnameError.add('error');
        isValid = false;
    } else {
        lnameError.remove('error');
        output += "Last Name: " + lname.value + "<br />";
    }

    if (email.value === '') {
        emailError.add('error');
        isValid = false;
    } else {
        emailError.remove('error');
        output += "Email: " + email.value + "<br />";
    }

    if (phone.value === '') {
        phoneError.add('error');
        isValid = false;
    } else {
        phoneError.remove('error');
        output += "Phone Number: " + phone.value + "<br />";
    }
    
    if (isValid)
    {   
        hide();
        show();
        confirmation.innerHTML += output;
    }

}