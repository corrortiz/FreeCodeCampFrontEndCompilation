var operation;
var actual;
var num1;
var num2;

$(document).ready(function() {
    bttnFuntionality();
});

function bttnFuntionality() {
    clean();

    equals();

    clikButton('nana', '7');
    clikButton('ocho', '8');
    clikButton('nine', '9');
    clikButton('four', '4');
    clikButton('five', '5');
    clikButton('six', '6');
    clikButton('one', '1');
    clikButton('two', '2');
    clikButton('thre', '3');
    clikButton('dot', '.');
    clikButton('cero', '0');

    clikOperation('division', '/');
    clikOperation('for', '*');
    clikOperation('plus', '+');
    clikOperation('minus', '-');
}

function clean() {
    $('#ce').click(function() {
        actual = $('#results').text();
        if (actual.length > 1) { //checks if the last number
            if (actual !== '0') {
                $('#results').text(actual.slice(0, -1));
            }
        } else {
            $('#results').text('0');
        }
    });

    $('#ac').click(function() {
        $('#results').text('0');
        $('#cadena').text('0');
        $('#operations').text('');
    });
}

function clikButton(button, name) {
    $('#' + button + '').click(function() {
        $('#results').text(plusNumbers(name));
    })
}

function clikOperation(button, name) {
    $('#' + button + '').click(function() {
        if ($('#cadena').text() === '0'){
            $('#cadena').text($('#results').text());
            $('#operations').text(''+name+'');
            operation = name;
            $('#results').text('0');
        }else{
            $('#operations').text(''+name+'');
            operation = name;
        }
    })
}

function plusNumbers(name) {
    actual = $('#results').text();
    if (actual === '0') {
        return name;
    } else {
        return actual.concat(name);
    }
}

function equals() {
    $('#ecuals').click(function() {
        $('#cadena').text(calculation());
        $('#operations').text('');
        $('#results').text('0');
    });
}

function calculation() {
    num1 = Number($('#cadena').text())
    num2 = Number($('#results').text());
    switch (operation) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            if(num1 === 0){
                return 'Forbidden calculation';
                break;
            }else{
                return num1 / num2;
                break;
            }
    }
}