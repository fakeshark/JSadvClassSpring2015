var form = $('form');
form.on('submit', checkForm);

function checkForm(e) {
    e.preventDefault();

    var fname = $('input[name="fname"]');
    var fnameError = $('.fnameError');

    var lname = $('input[name="lname"]');
    var lnameError = $('.lnameError');

    var email = $('input[name="email"]');
    var emailError = $('.emailError');

    var phone = $('input[name="phone"]');
    var phoneError = $('.phoneError');

    var output = "";   
    var isValid = true;

    if (fname.val() === '') {
        fnameError.addClass('error');
        isValid = false;
    } else {
        fnameError.removeClass('error');
        output += "First Name: " + fname.val() + "<br />";
    }

    if (lname.val() === '') {
        lnameError.addClass('error');
        isValid = false;
    } else {
        lnameError.removeClass('error');
        output += "Last Name: " + lname.val() + "<br />";
    }

    if (email.val() === '') {
        emailError.addClass('error');
        isValid = false;
    } else {
        emailError.removeClass('error');
        output += "Email: " + email.val() + "<br />";
    }

    if (phone.val() === '') {
        phoneError.addClass('error');
        isValid = false;
    } else {
        phoneError.removeClass('error');
        output += "Phone Number: " + phone.val() + "<br />";
    }
    
    if (isValid)
    {   
        form.addClass('hide');
        var confirmation = $('#confirmation');
        confirmation.removeClass('hide');
        confirmation.addClass('show');    
        confirmation.html(output);
    }

}