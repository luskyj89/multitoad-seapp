/* ----------------------------------------
   Public Vars
--------------------------------------- */

var giveawayControls    = $('#giveaway-controls'),
    giveawaySwitch      = $("#giveawaySwitch"),
    giveawayFrame       = $("#giveaways"),
    setGames            = $("#set-games"),
    game1               = $("#game-1"),
    game2               = $("#game-2"),
    game3               = $("#game-3");

// URLS


/* ----------------------------------------
   Giveaway Display
--------------------------------------- */
function giveawayDisplay() {

    giveawaySwitch.change(function() {

        if ( giveawaySwitch.hasClass("giveaway-on") ) {
            giveawaySwitch.removeClass("giveaway-on");
            giveawayControls.slideUp();
            giveawayFrame.hide();
        }
        else {
            giveawaySwitch.addClass("giveaway-on");
            giveawayControls.slideDown();
            giveawayFrame.show();

            if ( bttSwitch.hasClass("btt-on") ) {
                bttSwitch.trigger("click");
            }

            if ( scoreSwitch.hasClass("score-on") ) {
                scoreSwitch.trigger("click");
            }

            if ( wttSwitch.hasClass("wtt-on") ) {
                wttSwitch.trigger("click");
            }
        }

    });

    setGames.click(function(e) {
        console.log("click worked");
        e.preventDefault();

        var game1Input = $("#game1").val(),
            game2Input = $("#game2").val(),
            game3Input = $("#game3").val();

        game1.css("background-image", "url(" + game1Input + ")");
        game2.css("background-image", "url(" + game2Input + ")");
        game3.css("background-image", "url(" + game3Input + ")");

    });

};
