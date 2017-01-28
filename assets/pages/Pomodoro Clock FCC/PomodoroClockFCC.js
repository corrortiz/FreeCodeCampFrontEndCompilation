var isOn = false;
var isSession = true;
var tiempo = 1;
var segundos = 60;
var interval;

$(document).ready(function() {
    sliderFuntuanilly();
    timers();
});

function sliderFuntuanilly() {
    $('#test1').mousedown(function () {
        $(this).mousemove(function () {
            if (isSession){
                $('#length').text(this.value);
                $('#time').text(this.value);
            }else {
                $('#length').text(this.value);
            }
        });
    });

    $('#test1').change(function () {
        if (isSession){
            $('#length').text(this.value);
            $('#time').text(this.value);
        }else {
            $('#length').text(this.value);
        }
    });

    $('#test2').mousedown(function () {
        $(this).mousemove(function () {
            if (isSession){
                $('#break').text(this.value);
            }else {
                $('#break').text(this.value);
                $('#time').text(this.value);
            }
        });
    });

    $('#test2').change(function () {
        if (isSession){
            $('#break').text(this.value);
        }else {
            $('#break').text(this.value);
            $('#time').text(this.value);
        }
    });
}

function timers() {
    $("#session").click(function() {
        if (isOn === false){
            isOn = true;
            if(tiempo <= 0){
                tiempo = Number($('#secons').text());
            }else {
                tiempo = Number($('#time').text());
            }
            interval = setInterval(temporizador, 1000);
            disableRangers();
        }else {
            isOn = false;
            if(tiempo <= 0){
                tiempo = Number($('#secons').text());
            }else {
                tiempo = Number($('#time').text());
            }
            clearInterval(interval);
            enableReangers();
        }
    });
}

function temporizador() {
    if (tiempo < 0){
        clearInterval(interval);
        isOn = false;
        if (isSession){
            descanso();
        }else {
            session();
        }
    }else {
        restarSegundos();
    }
}

function restarSegundos() {
    segundos--;
    $('#secons').text(segundos);

    if(tiempo < 1){
        $('#time').text('0');
    }else {
        $('#time').text(tiempo);
    }

    if (segundos === 0){
        segundos = 60;
        tiempo--;
    };
}

function descanso() {
    isSession = false;
    $('#cardShake').animateCss('wobble');
    $('#time').text($('#break').text());
    tiempo = Number($('#time').text());
    $('#session').text('REST');

    if (isOn === false){
        isOn = true;
        if(tiempo <= 0){
            tiempo = Number($('#secons').text());
        }else {
            tiempo = Number($('#time').text());
        }
        interval = setInterval(temporizador, 1000);
        disableRangers();
    }else {
        isOn = false;
        if(tiempo <= 0){
            tiempo = Number($('#secons').text());
        }else {
            tiempo = Number($('#time').text());
        }
        clearInterval(interval);
        enableReangers();
    }
}

function session() {
    isSession = true;
    $('#cardShake').animateCss('wobble');
    $('#time').text($('#length').text());
    tiempo = Number($('#time').text());
    $('#session').text('SESSION');
    if (isOn === false){
        isOn = true;
        if(tiempo <= 0){
            tiempo = Number($('#secons').text());
        }else {
            tiempo = Number($('#time').text());
        }
        interval = setInterval(temporizador, 1000);
        disableRangers();
    }else {
        isOn = false;
        if(tiempo <= 0){
            tiempo = Number($('#secons').text());
        }else {
            tiempo = Number($('#time').text());
        }
        clearInterval(interval);
        enableReangers();
    }
}

function disableRangers() {
    $('#test1').prop('disabled', true);
    $('#test2').prop('disabled', true);;
}

function enableReangers() {
    $('#test1').prop('disabled', false);
    $('#test2').prop('disabled', false);
}

/**
 * animation style
 */
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});