var form = $('form');
var confirm = $('confirmation');
var geocoder;
var city;
var state;
var confirmation;

form.on('submit', checkForm);

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
    var fields = $('form p');
    var len = fields.length;

    var jsonObj = {};

    for (var i = 0; i < len; i++)
    {
        var input = $(fields[i]).children('input');
        var label = $(fields[i]).children('label');
        jsonObj[input.attr('name')] = input.val();

        if (input.val() === '') {
            $(fields[i]).addClass('error');
            isValid = false;
        } else {
            $(fields[i]).removeClass('error');
            output += label.text() + ": " + input.val() + "<br />";
        }
    }
    
    
    if (jsonObj.password !== jsonObj.confirmpassword)
    {
        $('.passwordError').addClass('error');
        $('.confirmpasswordError').addClass('error');
        isValid = false;
    }

    if (isValid)
    {
        form.addClass('hide');
        var confirmation = $('#confirmation');
        confirmation.removeClass('hide');
        confirmation.addClass('show');
        confirmation.html(output);
        console.log(jsonObj);
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

