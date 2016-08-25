/* ----------------------------------------
   Public Vars
--------------------------------------- */
var dunkedAudio         = document.getElementById('audio');
var gameshowAudio       = document.getElementById('gameshow-audio');
var timeClockAudio      = document.getElementById('time-clock-audio');
var applauseAudio       = document.getElementById('applause-audio');
var mutedState          = "Unmuted";
var notifyMuted         = $(".notify-muted");


/* ----------------------------------------
   Controls which frame is displayed along
   with its controls
--------------------------------------- */
function frameCop(toggle, frame, controls, state) {

    if ( toggle.hasClass(state) ) {
        toggle.removeClass(state);
        frame.hide();
        controls.slideUp();
    }
    else {

        if ( bttSwitch.hasClass("btt-on") ) {
            bttSwitch.trigger("click");
        }

        if ( scoreSwitch.hasClass("score-on") ) {
            scoreSwitch.trigger("click");
        }

        if ( wttSwitch.hasClass("wtt-on") ) {
            wttSwitch.trigger("click");
        }

        if ( giveawaySwitch.hasClass("giveaway-on") ) {
            giveawaySwitch.trigger("click");
        }

        if ( quizzoSwitch.hasClass("quizzo-on") ) {
            quizzoSwitch.trigger("click");
        }

        if ( videoSwitch.hasClass("video-on") ) {
            videoSwitch.trigger("click");
        }

        toggle.addClass(state);
        frame.show();
        controls.slideDown();

    }

}

/* ----------------------------------------
   No app frame hidden, only maintains
   control switch states
--------------------------------------- */
function frameCopControlOnly(toggle, controls, state) {

    if ( toggle.hasClass(state) ) {
        toggle.removeClass(state);
        controls.slideUp();
    }
    else {

        if ( scoreSwitch.hasClass("score-on") ) {
            scoreSwitch.trigger("click");
        }

        if ( bttSwitch.hasClass("btt-on") ) {
            bttSwitch.trigger("click");
        }

        if ( wttSwitch.hasClass("wtt-on") ) {
            wttSwitch.trigger("click");
        }

        if ( giveawaySwitch.hasClass("giveaway-on") ) {
            giveawaySwitch.trigger("click");
        }

        if ( quizzoSwitch.hasClass("quizzo-on") ) {
            quizzoSwitch.trigger("click");
        }

        if ( videoSwitch.hasClass("video-on") ) {
            videoSwitch.trigger("click");
        }

        toggle.addClass(state);
        controls.slideDown();
    }

}

/* ----------------------------------------
   Mass control of all audio
--------------------------------------- */
function audioVolume(state) {
    dunkedAudio.volume = state;
    applauseAudio.volume = state;
    gameshowAudio.volume = state;
    timeClockAudio.volume = state;
}

function audioMute(state) {
    dunkedAudio.muted = state;
    applauseAudio.muted = state;
    gameshowAudio.muted = state;
    timeClockAudio.muted = state;
}

/* ----------------------------------------
   Hot Keys
--------------------------------------- */
function hotkeys() {

    console.log(event.which);

    if ( event.which == 49) {
        console.log("1: Hotkey for Beat That Toadboy");
        bttSwitch.trigger("click");
    }

    if ( event.which == 50) {
        console.log("2: Hotkey for Toadboy Quizzo");
        quizzoSwitch.trigger("click");
    }

    if ( event.which == 51) {
        console.log("3: Hotkey for Where's That Toadboy");
        wttSwitch.trigger("click");
    }

    if ( event.which == 52) {
        console.log("4: Hotkey for Giveaway");
        giveawaySwitch.trigger("click");
    }

    if ( event.which == 53) {
        console.log("5: Hotkey for Scoreboard");
        scoreSwitch.trigger("click");
    }

    if ( event.which == 54) {
        console.log("6: Hotkey for Videos");
        videoSwitch.trigger("click");
    }

    if ( event.which == 109 || event.which == 77 ) {
        console.log("M: " + mutedState);

        if ( mutedState == "Muted" ) {

            audioMute(false);
            mutedState = "Unmuted";
            notifyMuted.css("display", "none");


        } else {

            audioMute(true);
            mutedState = "Muted";
            notifyMuted.css("display", "block");

        }

    }

    if ( event.which == 81 ) {
        console.log("a: Hotkey for Dunked Button");
        dunkedButton.trigger("click");
    }

    if ( event.which == 87 ) {
        console.log("s: Hotkey for Text Effect");
        customCheerButton.trigger("click");
    }

    if ( event.which == 69 ) {
        console.log("s: Hotkey for Toadboy Toggle");
        toadboyToggle.trigger("click");
    }

    if ( event.which == 65 ) {
        console.log("q: Hotkey for Gameshow Music");
        gameshowButton.trigger("click");
    }

    if ( event.which == 83 ) {
        console.log("w: Hotkey for Time Clock Music");
        timeClockButton.trigger("click");
    }

    if ( event.which == 68 ) {
        console.log("w: Hotkey for Applause Sound");
        applauseButton.trigger("click");
    }

}
