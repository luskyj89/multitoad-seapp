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

        frameCop(giveawaySwitch, giveawayFrame, giveawayControls, "giveaway-on");

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
