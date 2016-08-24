/* ----------------------------------------
   Public Vars
--------------------------------------- */
var effect1, effect1Title, masterVolSilder, masterVolume, currentVolume, audio, button, selectedColor,
customCheerButton, customCheerAudio;

var controls            = $("#controls");
var mainView            = $("#main-view");
var introModal          = $("#intro-modal");
var closeIntro          = $("#close-intro");

// Settings
var closeButton         = $(".close-button");
var advancedButton      = $("#advanced-button");
var backgroundButton    = $("#background-button");
var helpButton          = $("#help-button");
var advancedModal       = $("#advanced-settings-modal");
var backgroundModal     = $("#background-settings-modal");
var helpModal           = $("#help-modal");
var updateSettings      = $("#update-settings");
var updateAdvanced      = $("#update-advanced-settings");

// Effect Specific
var effect1             = $("#effect-1");
var effect1Title        = $("#effect-1-title");
var customCheerEffect   = $("#custom-cheer-text");
var customTextInput     = $("#custom-text").val();
var toadboyToggle       = $("#toadboy-toggle");
var theToadboy          = $("#the-toadboy");
var customToggleImage   = $("#custom-toggle-image");
var toadboyPosition     = $("#toadboy-position");

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
var customCheerButton   = $("#custom-text-button");
var audio               = document.getElementById('audio');
var gameshowAudio       = document.getElementById('gameshow-audio');
var timeClockAudio      = document.getElementById('time-clock-audio');
var applauseAudio       = document.getElementById('applause-audio');
var gameshowButton      = $("#gameshow-button");
var timeClockButton     = $("#time-clock-button");
var applauseButton      = $("#applause-button");

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
        applauseAudio.volume = currentVolume;
        gameshowAudio.volume = currentVolume;
        timeClockAudio.volume = currentVolume;

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
   Background Settings
--------------------------------------- */

function backgroundSettings() {

    updateSettings.click(function(e) {
        e.preventDefault();

        var backgroundInput = $("#background-url").val();

        mainView.css("background-image", "url(" + backgroundInput + ")");

    });

}

/* ----------------------------------------
   SEAPP Specific Beat That Toadboy
--------------------------------------- */

function beatThatToadboy() {

    logo.delay(1000).fadeIn(2000);
    getToadPick();

    bttSwitch.change(function() {

        frameCop(bttSwitch, bttGame, bttControls, "btt-on");

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


};

/* ----------------------------------------
   Audio Button Click
--------------------------------------- */
function audioClickLooping(button, audio) {

    if ( button.hasClass("playing") ) {
        button.removeClass("playing");
        audio.pause();
    } else {
        button.addClass("playing");
        audio.load();
        audio.play();
    }

}

function audioClick(button, audio) {

    if ( button.hasClass("playing") ) {
        button.removeClass("playing");
        audio.pause();
    } else {
        button.addClass("playing");
        audio.load();
        audio.play();
        audio.onended = function() {
            console.log(audio + "ended");
            button.removeClass("playing");
        };
    }

}

/* ----------------------------------------
   Intro Modal
--------------------------------------- */
function initIntro() {

    if (queryString.indexOf('intro=false')!==-1) {
        console.log("Skip Intro Overlay");
    } else {
        introModal.addClass("intro-visible");

        closeIntro.click(function(e) {
            e.preventDefault();
            introModal.addClass("intro-closed");
        });

        introModal.click(function(e) {
            introModal.addClass("intro-closed");
        });
    }

}

/* ----------------------------------------
   Toadboy Toggle
--------------------------------------- */
function toadboy() {

    toadboyToggle.click(function(e) {

        if ( theToadboy.hasClass("toadboy-active") ) {

            theToadboy.removeClass("toadboy-active");
            theToadboy.removeClass("toadboy-visible");

            setTimeout(function() {
                theToadboy.removeClass("toadboy-turnt");

            },500);

        } else {

            theToadboy.addClass("toadboy-active");
            theToadboy.addClass("toadboy-visible");

            setTimeout(function() {
                theToadboy.addClass("toadboy-turnt");
            }, 1500);

        }

    });

}

/* ----------------------------------------
   Advanced Settings
--------------------------------------- */
function advancedSettings() {

    updateAdvanced.click(function(e) {
        e.preventDefault();

        var customToggleImageVal = customToggleImage.val();
        var selectedPosition = "Bottom Right";

        $("#toadboy-position option:selected").each(function() {
            selectedPosition = $(this).text();
        })

        console.log(selectedPosition + " selected");

        if (selectedPosition == "Bottom Right") {

            theToadboy.css("right", "100px");

        } else if (selectedPosition == "Bottom Left") {

            theToadboy.css("right", "900px");

        }

        if ( customToggleImageVal.length > 0 ) {
            theToadboy.css("background-image", "url(" + customToggleImageVal + ")");
        } else {
            theToadboy.css("background-image", "url(images/toad-winking.gif)");
        }

    });

}

/* ----------------------------------------
   Init
--------------------------------------- */

function init() {

    button.click(playAudio);

    customCheerButton.click(function(e) {
        e.preventDefault();
        runEffect2(); // play effect 2 custom cheer
    });

    gameshowButton.click(function(e) {
        e.preventDefault();
        audioClickLooping(gameshowButton, gameshowAudio);
    });

    timeClockButton.click(function(e) {
        e.preventDefault();
        audioClickLooping(timeClockButton, timeClockAudio);
    });

    applauseButton.click(function(e) {
        e.preventDefault();
        audioClick(applauseButton, applauseAudio);
    });

    // Settings Modals
    advancedButton.click(function(e) {
        e.preventDefault();
        advancedModal.fadeIn();
    });

    backgroundButton.click(function(e) {
        e.preventDefault();
        backgroundModal.fadeIn();
    });

    helpButton.click(function(e) {
        e.preventDefault();
        helpModal.fadeIn();
    });

    closeButton.click(function(e) {
        e.preventDefault();
        $(".control-modal").fadeOut();
    });

    // Init Intro Modals
    initIntro();

    // Init mixer
    mixer();

    // Init Color selector
    keyPicker();

    // Init Background Settings
    backgroundSettings();

    // Init Beat That Toadboy!
    beatThatToadboy();

    // Init MTSC Scoreboard
    mtscScoreboard();

    // Init Where's That Toadboy?
    wheresThatToadboy();

    // Init Giveaway Display
    giveawayDisplay();

    // Init Quizzo Display
    quizzoDisplay();

    // Init Video Display Frame
    videoDisplay();

    // Init Toadboy Toggle
    toadboy();

    // Init Advanced Settings
    advancedSettings();

}

// Init Foundation (6)
$(document).foundation();

$(document).ready(function(){

    document.addEventListener("touchstart", function(){}, true);

    init();

});
