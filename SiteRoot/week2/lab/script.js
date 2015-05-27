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

    var jsonObj = {};

    for (var i = 0; i < len; i++)
    {
        var input = fields[i].querySelector('input');
        var label = fields[i].querySelector('label');
        jsonObj[input.name] = input.value;

        if (input.value === '') {
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

