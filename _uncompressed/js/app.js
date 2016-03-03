/* ----------------------------------------
   Public Vars
--------------------------------------- */
var effect1, effect1Title, masterVolSilder, masterVolume, currentVolume, audio, button, selectedColor,
customCheerButton, customCheerAudio;

var controls            = $("#controls");
var mainView            = $("#main-view");

// Effect Specific
var effect1             = $("#effect-1");
var effect1Title        = $("#effect-1-title");
var customCheerEffect   = $("#custom-cheer-text");
var customTextInput     = $("#custom-text").val();

// Mixer Vars
var masterVolSlider     = $("#master-vol-slider");
var masterVolHandle     = $("#master-vol-slider > .slider-handle");
var currentVolumeLabel  = $(".current-volume");
var keyColor            = $("#color-key");
var bttSwitch           = $("#bttSwitch");
var bttGame             = $("#top");
var bttControls         = $("#btt-controls");
var scoreSwitch         = $("#scoreSwitch");

// Audio Vars
var button              = $("#button");
var customCheerButton   = $("#custom-cheer-button");
var audio               = document.getElementById('audio');
var customCheerAudio    = document.getElementById('custom-cheer-audio');
var holyShitAudio       = document.getElementById('holy-shit-audio');
var gameShowAudio       = document.getElementById('game-show-audio');
var holyShitButton      = $("#holy-shit-button");

// Query string variable to find url settings
var queryString         = window.location.search;

/* ----------------------------------------
   Effect Animations
--------------------------------------- */

function closeEffect1() {

    effect1.animate({ top: "100" }, 2000);

    setTimeout(function() {
        effect1.animate({ top: "1000" }, 1000);

        effect1Title.animate({ top: "-1000" }, 1000);
    }, 1500);

    controls.css("border-color", "rgba(93, 93, 93, 0.35)");
}

function runEffect1() {
    effect1.animate({ top: "50" }, 500, closeEffect1);
    effect1Title.animate({ top: "50" }, 500);

    controls.css("border-color", "#00fa87");
}

function closeEffect2() {

    setTimeout(function() {
        customCheerEffect.animate({ top: "-300" }, 500, "easeInElastic");

        controls.css("border-color", "rgba(93, 93, 93, 0.35)");
    }, 1000);

}

function runEffect2() {
    var customTextInput = $("#custom-text").val();

    if (customTextInput != "") {
        customCheerEffect.html(customTextInput);
    }

    customCheerEffect.animate({ top: "295" }, 1500, "easeOutElastic", closeEffect2);

    controls.css("border-color", "#00fa87");
}

/* ----------------------------------------
   Mixer Control
--------------------------------------- */

function mixer() {
    var masterVolume = new Foundation.Slider(masterVolSlider);

    // Volume Adjusted
    masterVolSlider.on('moved.zf.slider', function() {
        var currentVolume = masterVolHandle.attr("aria-valuenow");
        var currentVolume = parseInt(currentVolume) / 100;

        // Adjust volume based on new slider position
        audio.volume = currentVolume;
        customCheerAudio.volume = currentVolume;
        holyShitAudio.volume = currentVolume;
        gameShowAudio.volume = currentVolume;

        // Set our volume display
        currentVolumeLabel.html("Volume: " + Math.round(currentVolume * 100) + "%");

        console.log( currentVolume, audio.volume );
    });
}

/* ----------------------------------------
   Key Color Selection
--------------------------------------- */

function keyPicker() {

    keyColor.change(function() {
        var selectedColor = "Not Selected";
        $("#color-key option:selected").each(function() {
            selectedColor = $(this).text();
        })

        console.log(selectedColor + " selected");

        mainView.css("background-color", selectedColor);

        if (selectedColor == "Not Selected") {
            mainView.css("background-color", "#1c1d1e");
        }

    });

}

/* ----------------------------------------
   SEAPP Specific Beat That Toadboy
--------------------------------------- */

function beatThatToadboy() {

    logo.delay(1000).fadeIn(2000);
    getToadPick();

    bttSwitch.change(function() {

        if ( bttSwitch.hasClass("btt-on") ) {
            bttSwitch.removeClass("btt-on");
            bttGame.hide();
            bttControls.slideUp();
        }
        else {
            bttSwitch.addClass("btt-on");
            bttGame.show();
            bttControls.slideDown();

            if ( scoreSwitch.hasClass("score-on") ) {
                scoreSwitch.trigger("click");
            }

            if ( wttSwitch.hasClass("wtt-on") ) {
                wttSwitch.trigger("click");
            }

            gameShowAudio.play();
        }

    });

    if (queryString.indexOf('toadboy=on')!==-1) {
        bttSwitch.trigger("click");
    }

}

/* ----------------------------------------
   Audio Players
--------------------------------------- */

function playAudio(e) {

    e.preventDefault();

    audio.play(); // audio will load and then play
    runEffect1(); // play effect 1 title animation

};

function playCustomCheerAudio(e) {

    e.preventDefault();

    customCheerAudio.play(); // audio will load and then play
    runEffect2(); // play effect 2 custom cheer

};

function playHolyShitAudio(e) {

    e.preventDefault();

    holyShitAudio.play(); // audio will load and then play

};

function playGameShowAudio(e) {

    e.preventDefault();

    gameShowAudio.play(); // audio will load and then play

};

/* ----------------------------------------
   Init
--------------------------------------- */

function init() {

    button.click(playAudio);
    customCheerButton.click(playCustomCheerAudio);
    holyShitButton.click(playHolyShitAudio);

    // Init mixer
    mixer();

    // Init Color selector
    keyPicker();

    // Init Beat That Toadboy!
    beatThatToadboy();

    // Init MTSC Scoreboard
    mtscScoreboard();

    // Init Where's That Toadboy?
    wheresThatToadboy();

}

// Init Foundation (6)
$(document).foundation();

$(document).ready(function(){

    document.addEventListener("touchstart", function(){}, true);

    init();

});
