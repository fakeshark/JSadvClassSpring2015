var form = document.querySelector('#form');
var confirm = document.querySelector('#confirmation');
var geocoder;
var city;
var state;
var confirmation;

form.addEventListener('submit', checkForm);

function hide()
{
    form.classList.remove('show');
    form.classList.add('hide');
}

function show()
{
    confirm.classList.remove('hide');
    confirm.classList.add('show');
}

function checkForm(e)
{
    e.preventDefault();

    var output = "";
    var isValid = true;
    var fields = document.querySelectorAll('form p');
    var len = fields.length;
    var pw = document.querySelector('input[name="password"]');
    var cpw = document.querySelector('input[name="confirmpassword"]');
    var pwM = document.querySelector('span[id="pwMatch"]');
    var regExValidate = {   "fname": /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/,
                            "lname": /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/,
                            "email": /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/,
                            "phone": /^\(?([2-9]{1}[0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                            "address1":  /[0-9 A-Za-z]+/,
                            "address2":  /[0-9 A-Za-z]+/,
                            "city": /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/,
                            "state": /^[a-zA-Z]{2}$/,
                            "zip":  /^\d{5}(?:[-\s]\d{4})?$/,
                            "username":  /^[a-zA-Z0-9_-]{8,12}$/,
                            "password":   /[a-zA-Z0-9!@#$%^]{5,20}/,
                            "confirmpassword":  /[a-zA-Z0-9!@#$%^]{5,20}/  };

    var jsonObj = {};

    for (var i = 0; i < len; i++)
    {
        var input = fields[i].querySelector('input');
        var label = fields[i].querySelector('label');
        jsonObj[input.name] = input.value;

        if (input.value === '' || !regExValidate[input.name].test(input.value)) {
            fields[i].classList.add('error');
            isValid = false;
        } else {
            fields[i].classList.remove('error');
            output += label.innerText + ": " + input.value + "<br />";
        }
    }

    if (jsonObj.password !== jsonObj.confirmpassword)
    {
        document.querySelector('.passwordError').classList.add('error');
        document.querySelector('.confirmpasswordError').classList.add('error');
        isValid = false;
    }

    if (isValid)
    {
        hide();
        show();
        confirm.innerHTML += output;
        console.log(jsonObj);
        console.log(pw.value, cpw.value);
    }
}
function initialize()
{
    geocoder = new google.maps.Geocoder();
    var zip = document.querySelector('input[name="zip"]');
    zip.addEventListener("blur", codeAddress);
}

function codeAddress()
{
    var address = document.querySelector('input[name="zip"]').value;
    geocoder.geocode({'address': address}, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            console.log(results);
            displayResults(results);
        } else {
            console.log('Geocode was unsuccessful: ' + status);
        }
    });
}

function displayResults(results)
{
    var geoCodeJsonObj = results;
    var geoCodeJsonObjAddress = geoCodeJsonObj[0].address_components;
    var geoCodeObjLen = geoCodeJsonObjAddress.length;
    console.log(geoCodeObjLen);
    for (var i = 0; i < geoCodeObjLen; i++)
    {
        if (geoCodeJsonObjAddress[i].types.indexOf('locality') > -1)
        {
            city = document.querySelector('input[name="city"]');
            city.value = geoCodeJsonObjAddress[i].long_name;
        }

        if (geoCodeJsonObjAddress[i].types.indexOf('administrative_area_level_1') > -1)
        {
            state = document.querySelector('input[name="state"]');
            state.value = geoCodeJsonObjAddress[i].short_name;
        }
    }
}

google.maps.event.addDomListener(window, 'load', initialize);

