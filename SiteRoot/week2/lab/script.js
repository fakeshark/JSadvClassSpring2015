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

    var output = "";
    var isValid = true;

    var fields = document.querySelectorAll('form p');
    var len = fields.length;

    var jsonObj = {};

    for (var i = 0; i < len; i++)
    {
        var input = fields[i].querySelector('input'); // selects inputs 
        jsonObj[input.name] = input.value;

        if (input.value === '') {
            fields[i].classList.add('error');
            isValid = false;
        } else {
            fields[i].classList.remove('error');
        }
    }
    console.log(jsonObj);

//    var fname = document.querySelector('input[name="fname"]');
//    var fnameError = document.querySelector('.fnameError').classList;
//
//    var lname = document.querySelector('input[name="lname"]');
//    var lnameError = document.querySelector('.lnameError').classList;
//
//    var email = document.querySelector('input[name="email"]');
//    var emailError = document.querySelector('.emailError').classList;
//
//    var phone = document.querySelector('input[name="phone"]');
//    var phoneError = document.querySelector('.phoneError').classList;
//
//    var address1 = document.querySelector('input[name="address1"]');
//    var address1Error = document.querySelector('.address1Error').classList;
//
//    var address2 = document.querySelector('input[name="address2"]');
//    var address2Error = document.querySelector('.address2Error').classList;
//
//    var city = document.querySelector('input[name="city"]');
//    var cityError = document.querySelector('.cityError').classList;
//
//    var state = document.querySelector('input[name="state"]');
//    var stateError = document.querySelector('.stateError').classList;
//
//    var zip = document.querySelector('input[name="zip"]');
//    var zipError = document.querySelector('.zipError').classList;
//
//    var username = document.querySelector('input[name="username"]');
//    var usernameError = document.querySelector('.usernameError').classList;
//
//    var password = document.querySelector('input[name="password"]');
//    var passwordError = document.querySelector('.passwordError').classList;
//
//    var confirmpassword = document.querySelector('input[name="confirmpassword"]');
//    var confirmpasswordError = document.querySelector('.confirmpasswordError').classList;


//    if (fname.value === '') {
//        fnameError.add('error');
//        isValid = false;
//    } else {
//        fnameError.remove('error');
//        output += "First Name: " + fname.value + "<br />";
//    }
//
//    if (lname.value === '') {
//        lnameError.add('error');
//        isValid = false;
//    } else {
//        lnameError.remove('error');
//        output += "Last Name: " + lname.value + "<br />";
//    }
//
//    if (email.value === '') {
//        emailError.add('error');
//        isValid = false;
//    } else {
//        emailError.remove('error');
//        output += "Email: " + email.value + "<br />";
//    }
//
//    if (phone.value === '') {
//        phoneError.add('error');
//        isValid = false;
//    } else {
//        phoneError.remove('error');
//        output += "Phone Number: " + phone.value + "<br />";
//    }
//
//    if (address1.value === '') {
//        address1Error.add('error');
//        isValid = false;
//    } else {
//        address1Error.remove('error');
//        output += "Address 1: " + address1.value + "<br />";
//    }
//
//    if (address2.value === '') {
//        address2Error.add('error');
//        isValid = false;
//    } else {
//        address2Error.remove('error');
//        output += "Address 2: " + address2.value + "<br />";
//    }
//
//    if (city.value === '') {
//        cityError.add('error');
//        isValid = false;
//    } else {
//        cityError.remove('error');
//        output += "City: " + city.value + "<br />";
//    }
//
//    if (state.value === '') {
//        stateError.add('error');
//        isValid = false;
//    } else {
//        stateError.remove('error');
//        output += "State: " + state.value + "<br />";
//    }
//
//    if (zip.value === '') {
//        zipError.add('error');
//        isValid = false;
//    } else {
//        zipError.remove('error');
//        output += "Zip: " + zip.value + "<br />";
//    }
//
//    if (username.value === '') {
//        usernameError.add('error');
//        isValid = false;
//    } else {
//        usernameError.remove('error');
//        output += "Username: " + username.value + "<br />";
//    }
//
//    if (password.value === '') {
//        passwordError.add('error');
//        isValid = false;
//    } else {
//        passwordError.remove('error');
//        output += "Password: " + password.value + "<br />";
//    }
//
//    if (confirmpassword.value === '') {
//        confirmpasswordError.add('error');
//        isValid = false;
//    } else {
//        confirmpasswordError.remove('error');
//        output += "Confirm Password: " + confirmpassword.value + "<br />";
//    }

    if (isValid)
    {
        hide();
        show();
        confirmation.innerHTML += output;
    }

}