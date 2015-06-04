// Set global variables 
var form = document.querySelector('#mainform');
var jsonObj = {};


form.addEventListener('submit', checkForm);


function checkForm(e)
{
    e.preventDefault();

// Set function variables 
    var isValid = true;
    var nameErr = document.querySelector('span[id="fullname_err"]');
    var emailErr = document.querySelector('span[id="email_err"]');
    var phoneErr = document.querySelector('span[id="phone_err"]');
    var descErr = document.querySelector('span[id="description_err"]');
    
// regex definitions
    var rgxFullname = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
    var rgxEmail = /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/;
    var rgxPhone = /^\(?([2-9]{1}[0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var rgxDesc = /[^<][a-zA-Z0-9_]+[a-zA-Z0-9_ ]*>/;

    jsonObj.fullname = document.querySelector('input[id="fullname"]').value;
    jsonObj.email = document.querySelector('input[id="email"]').value;
    jsonObj.phone = document.querySelector('input[id="phone"]').value;
    jsonObj.description = document.querySelector('textarea').value;


// Validate for empty fields

    if (jsonObj.fullname === '') {
        nameErr.innerHTML = "Full Name is required.";
        isValid = false;
    } 
    if (jsonObj.fullname !== "") {
        nameErr.innerHTML = "";
    }

    if (jsonObj.email === '') {
        emailErr.innerHTML = "Email is required.";
        isValid = false;
    }
    if (jsonObj.email !== '') {
        emailErr.innerHTML = "";
    }

    if (jsonObj.phone === '') {
        phoneErr.innerHTML = "Phone number is required.";
        isValid = false;
    }
    if (jsonObj.phone !== '') {
        phoneErr.innerHTML = "";
    }

    if (jsonObj.description === '') {
        descErr.innerHTML = "Description is required.";
        isValid = false;
    }
    if (jsonObj.description !== '') {
        descErr.innerHTML = "";
    }


// Validate for formatting errors with reg ex

    if (!rgxFullname.test(jsonObj.fullname)) {
        nameErr.innerHTML = "Full Name formatting error.";
        isValid = false;
    } else {
        nameErr.innerHTML = "";
    }

    if (!rgxEmail.test(jsonObj.email)) {
        emailErr.innerHTML = "Email  formatting error.";
        isValid = false;
    } else {
        emailErr.innerHTML = "";
    }

    if (!rgxPhone.test(jsonObj.phone)) {
        phoneErr.innerHTML = "Phone number formatting error.";
        isValid = false;
    } else {
        phoneErr.innerHTML = "";
    }

    if (rgxDesc.test(jsonObj.description)) {
        descErr.innerHTML = "Description formatting error.";
        isValid = false;
    } else {
        descErr.innerHTML = "";
    }



// after form is validated 
    if (isValid)
    {
 // clear form for next entry
    document.querySelector('input[id="fullname"]').value = "";
    document.querySelector('input[id="email"]').value = "";
    document.querySelector('input[id="phone"]').value = "";
    document.querySelector('textarea').value = ""; 
    
    
    }
    

}






