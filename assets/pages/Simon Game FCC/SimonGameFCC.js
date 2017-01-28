$(document).ready(function() {

    var audio1 = $("#simonSound1")[0];
    var audio2 = $("#simonSound2")[0];
    var audio3 = $("#simonSound3")[0];
    var audio4 = $("#simonSound4")[0];

    var gameTurns = [];
    var playerInput = [];
    var turn = 0;
    var player = 0;
    var playerTurnIs = false;

    disbleButtons(true);

    $("#0").click(function() {
        $(this).animateCss('bounce');
        if (playerTurnIs) {
            playerInput.push(0);
            if (playerInput.length == gameTurns.length) {
                playerTurn();
            }
        }
        audio1.play();
    });

    $("#1").click(function() {
        $(this).animateCss('bounce');
        if (playerTurnIs) {
            playerInput.push(1);
            if (playerInput.length == gameTurns.length) {
                playerTurn();
            }
        }
        audio2.play();
    });

    $("#2").click(function() {
        $(this).animateCss('bounce');
        if (playerTurnIs) {
            playerInput.push(2);
            if (playerInput.length == gameTurns.length) {
                playerTurn();
            }
        }
        audio3.play();
    });

    $("#3").click(function() {
        $(this).animateCss('bounce');
        if (playerTurnIs) {
            playerInput.push(3);
            if (playerInput.length == gameTurns.length) {
                playerTurn();
            }
        }
        audio4.play();
    });

    function myFuct(id) {
        $('#' + id).click();
        if (player >= gameTurns.length) {
            clearInterval(time);
            playerTurnIs = true;
        } else {
            player++;
        }
    }

    function tocaTodo() {
        time = setInterval(function() {
            myFuct(gameTurns[player]);
        }, 2000);
    }

    $("#star").click(function() {
        if ($('#imputChechBox').prop('checked')) {
            player = 0;
            gameTurns.length = 0;
            playerInput.length = 0;
            turn = 0;
            $('#count').text((turn + 1));
            ramdomArrary();
            playerTurnIs = false;
            tocaTodo();
        }
    });

    function disbleButtons(conditon) {
        if (conditon) {
            $('.ableDis').addClass('disabled');
        } else {
            $('.ableDis').removeClass('disabled');
        }
    }

    $("#suiwcht").on("change", function() {
        if ($('#imputChechBox').prop('checked')) {
            disbleButtons(false);
        } else {
            disbleButtons(true)
        }
    });

    function ramdomArrary() {
        var ramdom = Math.floor((Math.random() * 4));
        gameTurns.push(ramdom);
    }

    function playerTurn() {
        if (_.isEqual(playerInput, gameTurns)) {
            Materialize.toast('COOL', 4000);
            win();
        } else {
            if ($('#strict').prop('checked')) {
                lost();
            } else {
                $('#cardParent').animateCss('shake');
                Materialize.toast('WRONG', 4000);
                player = 0;
                playerInput.length = 0;
                playerTurnIs = false;
                tocaTodo();
            }

        }
    }

    function lost() {
        Materialize.toast('LOSER', 4000);
        $('#0').animateCss('hinge');
        $('#1').animateCss('hinge');
        $('#2').animateCss('hinge');
        $('#3').animateCss('hinge');
        player = 0;
        gameTurns.length = 0;
        playerInput.length = 0;
        turn = 0;
        $('#count').text((turn + 1));
        ramdomArrary();
        playerTurnIs = false;
        setTimeout(tocaTodo, 2000);
    }

    function win() {
        if (turn >= 19) {
            Materialize.toast('YOU WIN', 4000);
            player = 0;
            gameTurns.length = 0;
            playerInput.length = 0;
            turn = 0;
            $('#count').text((turn + 1));
            ramdomArrary();
            playerTurnIs = false;
            $('#laminerva').click();
        } else {
            player = 0;
            playerInput.length = 0;
            ramdomArrary();
            playerTurnIs = false;
            turn++;
            $('#count').text((turn + 1));
            tocaTodo();
        }
    }

    $('#moda').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        starting_top: '4%', // Starting top style attribute
        ending_top: '10%', // Ending top style attribute
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        },
        complete: function() {} // Callback for Modal close
    });
});

$.fn.extend({
    animateCss: function(animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});