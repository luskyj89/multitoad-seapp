/* ----------------------------------------
   Public Vars
--------------------------------------- */
var scoreSwitch     = $("#scoreSwitch"),
    scoreControls   = $("#scoreboard-controls"),
    scoreToggle     = $("#toggleBoard"),
    leftScore       = $("#left-score"),
    rightScore      = $("#right-score"),
    leftPlayer      = $("#left-player"),
    rightPlayer     = $("#right-player"),
    gameType        = $("#game-type"),
    updateScore     = $("#update");

/* ----------------------------------------
   Scoreboard Toggle Control
--------------------------------------- */

function mtscScoreboard() {

    function enterScore() {
        TweenLite.to(gameType, 1, { top: 0, ease: Cubic.easeOut });
        TweenLite.to(leftPlayer, 1, { top: 0, delay: .5, ease: Cubic.easeOut });
        TweenLite.to(rightPlayer, 1, { top: 0, delay: .5, ease: Cubic.easeOut });
        TweenLite.to(leftScore, .6, { top: 0, delay: 1.1, ease: Cubic.easeOut });
        TweenLite.to(rightScore, .6, { top: 0, delay: 1.1, ease: Cubic.easeOut });
    }

    function hideScore() {
        TweenLite.to(gameType, 1, { top: -117, delay: .6, ease: Cubic.easeOut });
        TweenLite.to(leftPlayer, 1, { top: -44, ease: Cubic.easeOut });
        TweenLite.to(rightPlayer, 1, { top: -44, ease: Cubic.easeOut });
        TweenLite.to(leftScore, .6, { top: -40, ease: Cubic.easeOut });
        TweenLite.to(rightScore, .6, { top: -40, ease: Cubic.easeOut });
    }

    scoreToggle.change(function() {

        console.log("toggled");

        if ( scoreToggle.hasClass("score-show") ) {
            scoreToggle.removeClass("score-show");
            hideScore();
        }
        else {
            scoreToggle.addClass("score-show");
            enterScore();
        }

    });

    scoreSwitch.change(function() {

        if ( scoreSwitch.hasClass("score-on") ) {
            scoreSwitch.removeClass("score-on");
            scoreControls.slideUp();
        }
        else {
            scoreSwitch.addClass("score-on");
            scoreControls.slideDown();

            if ( bttSwitch.hasClass("btt-on") ) {
                bttSwitch.trigger("click");
            }

            if ( wttSwitch.hasClass("wtt-on") ) {
                wttSwitch.trigger("click");
            }
        }

    });

    updateScore.click(function(e) {
        e.preventDefault();

        var player1Input        = $("#player1").val(),
            player2Input        = $("#player2").val(),
            player1ScoreInput   = $("#player1Score").val(),
            player2ScoreInput   = $("#player2Score").val(),
            variationInput      = $("#game-variation").val();

        leftPlayer.html('<span class="scoreboard-ele">' + player1Input + "</span>");
        rightPlayer.html('<span class="scoreboard-ele">' + player2Input + "</span>");
        leftScore.html('<span class="scoreboard-ele">' + player1ScoreInput + "</span>");
        rightScore.html('<span class="scoreboard-ele">' + player2ScoreInput + "</span>");
        gameType.html('<span class="scoreboard-ele">' + variationInput + "</span>");
    })

}
