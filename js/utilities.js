
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

        toggle.addClass(state);
        controls.slideDown();
    }

}
