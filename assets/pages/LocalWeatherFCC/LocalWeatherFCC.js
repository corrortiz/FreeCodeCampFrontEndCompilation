var apiClima = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiGoogle = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
var metric = "&units=metric";
var farenHide = "&units=imperial";
var appid = "&APPID=244375a9a4338ddec059661d81001079";
var city;
var state;
var country;

$(document).ready(function(){
    getWhere();
    gradosOfare();
});

function gradosOfare() {
    $("#bttCelsius").on("click", function(){
        $.getJSON(apiClima+city+metric+appid).then(function(clima){
            temperature(metric, 'C');
        });
    });

    $("#bttFahrenheit").on("click", function(){
        $.getJSON(apiClima+city+farenHide+appid).then(function(clima){
            temperature(farenHide, 'F');
        });
    });
}

function icono(clima) {
    var prefix = 'wi wi-';
    var code = clima.weather[0].id;
    var icon = weatherIcons[code].icon;

    // If we are not in the ranges mentioned above, add a day/night prefix.
    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
        icon = 'day-' + icon;
    }

    // Finally tack on the prefix.
    icon = prefix + icon;

    $("#iconoClima").html('<i class="'+icon+'"></i>');
}

function getWhere() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(a) {
            if (a.coords){
                var latitud = a.coords.latitude;
                var longitud = a.coords.longitude;

                $.getJSON(apiGoogle+latitud+','+longitud).then(function(res){
                    city = res.results[0].address_components[4].short_name;
                    state = res.results[0].address_components[5].long_name;
                    country = res.results[0].address_components[6].long_name;

                    $("#address").html(city+', '+state+', '+country);

                    $.getJSON(apiClima+city+metric+appid).then(function(resultados){
                        temperature(metric, 'C');
                    });
                });
            }
        });
    } else
    {alert('navigator.geolocation not supported.');}
}

function temperature(typografy, type) {
    $.getJSON(apiClima+city+typografy+appid).then(function(clima){
        $("#wether").html(clima.main.temp +' °'+type);

        icono(clima);
    });
}