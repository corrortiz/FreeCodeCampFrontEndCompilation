$(document).ready(function() {
    var turn = 'clear';
    var turns = ['filter_none', 'filter_none', 'filter_none', 'filter_none', 'filter_none', 'filter_none', 'filter_none', 'filter_none', 'filter_none'];
    var computersTurns = 'panorama_fish_eye';
    var gameOn = true;
    var numberTurn = 1;
    var winner;

    $('#modal1').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 300, // Transition out duration
        starting_top: '10%', // Starting top style attribute
        ending_top: '20%', // Ending top style attribute
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            selectinPlayer();
        },
        complete: function() {}
    });

    $('#modal2').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 300, // Transition out duration
        starting_top: '10%', // Starting top style attribute
        ending_top: '20%', // Ending top style attribute
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        },
        complete: function() {
            reset();
            $('#algo').click();
        }
    });

    $('#algo').click();

    function selectinPlayer() {
        $('#cruz').click(function() {
            turn = 'clear';
            computersTurns = 'panorama_fish_eye';
        });

        $('#circulo').click(function() {
            turn = 'panorama_fish_eye';
            computersTurns = 'clear';
        });
    }

    function playerTurn(turn, id) {
        var spotTaken = $('#' + id).text();
        if (spotTaken === 'filter_none') {
            turns[id] = turn;
            $('#' + id).text(turn);
            if (turn === 'clear') {
                $('#' + id).addClass("z-depth-5 pink-text");
            } else {
                $('#' + id).addClass("z-depth-5 indigo-text");
            }
        }

        if (numberTurn >= 9) {
            $('#winnerIs').text('!!!!Draw!!!!');
            $('#ganador').text('whatshot');
            $('#winner').click();
        } else {
            numberTurn++;
        }

    }

    function pcTurn(computersTurns) {
        do {
            var ramdom = Math.floor((Math.random() * 8));
            var spotTaken = $('#' + ramdom).text();
            if (spotTaken === 'filter_none') {
                turns[ramdom] = computersTurns;
                $('#' + ramdom).text(computersTurns);
                if (computersTurns === 'clear') {
                    $('#' + ramdom).addClass("z-depth-5 pink-text");
                } else {
                    $('#' + ramdom).addClass("z-depth-5 indigo-text");
                }

                if (numberTurn >= 9) {
                    $('#winnerIs').text('!!!!Draw!!!!');
                    $('#ganador').text('whatshot');
                    $('#winner').click();
                } else {
                    numberTurn++;
                }

                break;
            }
        } while (turns[ramdom] != 'filter_none');
    }

    $('.margernes').click(function() {
        var slot = $(this).attr('id');

        playerTurn(turn, slot);
        pcTurn(computersTurns);
        whoWon();

    });

    function reset() {
        turns = ['filter_none', 'filter_none', 'filter_none', 'filter_none', 'filter_none', 'filter_none', 'filter_none', 'filter_none', 'filter_none'];
        $('.margernes').text('filter_none');
        $('.margernes').removeClass('z-depth-5 pink-text indigo-text');
        $('#winnerIs').text('!!!!Winner!!!!');
        gameOn = true;
        numberTurn = 1;
    }

    function whoWon() {
        for (var i = 0; i <= 7; i += 3) {
            if (turns[i] === turns[i + 1] && turns[i + 1] === turns[i + 2] && turns[i] != 'filter_none') {
                $('#ganador').text(turns[i]);
                $('#winner').click();
                i = 8;
            } else {
                for (var j = 0; j <= 2; j++) {
                    if (turns[j] === turns[j + 3] && turns[j + 3] === turns[j + 6] && turns[j] != 'filter_none') {
                        $('#ganador').text(turns[j]);
                        $('#winner').click();
                        j = 4;
                    }
                }
                if (turns[0] === turns[4] && turns[4] === turns[8] && turns[0] != 'filter_none') {
                    $('#ganador').text(turns[0]);
                    $('#winner').click();
                    i = 8;
                } else if (turns[6] === turns[4] && turns[4] === turns[2] && turns[6] != 'filter_none') {
                    $('#ganador').text(turns[6]);
                    $('#winner').click();
                    i = 8;
                }
            }
        }
    }
});

$(window).on('resize', function() {
    if ($(window).width() < 360) {
        $('i').addClass('medium');
        $('i').removeClass('large');
    } else {
        $('i').addClass('large');
        $('i').removeClass('medium');
    }
});