/* ----------------------------------------
   Public Vars
--------------------------------------- */
var effect1, effect1Title, masterVolSilder, masterVolume, currentVolume, audio, button, selectedColor;

var controls            = $("#controls");
var mainView            = $("#main-view");
var effect1             = $("#effect-1");
var effect1Title        = $("#effect-1-title");
var masterVolSlider     = $("#master-vol-slider");
var masterVolHandle     = $("#master-vol-slider > .slider-handle");
var currentVolumeLabel  = $(".current-volume");
var button              = $('#button');
var audio               = document.getElementById('audio');
var keyColor            = $("#color-key");
var bttSwitch           = $("#bttSwitch");
var bttGame             = $("#top");
var bttControls         = $("#btt-controls");

var queryString         = window.location.search;

/* ----------------------------------------
   Effect Animations
--------------------------------------- */

function closeEffect1() {
    effect1.animate({
        opacity: 0,
        top: "100"
    }, 1000);

    effect1Title.animate({
        opacity: 0,
        top: "-100"
    }, 1000);

    controls.css("border-color", "rgba(93, 93, 93, 0.35)");
}

function runEffect1() {
    effect1.animate({
        opacity: 1,
        top: "50"
    }, 3000, closeEffect1);

    effect1Title.animate({
        opacity: 1,
        top: "50"
    }, 500);

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
            bttGame.fadeOut();
            bttControls.slideUp();
        }
        else {
            bttSwitch.addClass("btt-on");
            bttGame.fadeIn();
            bttControls.slideDown();
        }

    });

    if (queryString.indexOf('toadboy=on')!==-1) {
        bttSwitch.trigger("click");
    }

}

/* ----------------------------------------
   Init
--------------------------------------- */

function init() {

    function playAudio(e) {

        e.preventDefault();

        audio.play(); // audio will load and then play
        runEffect1(); // play effect 1 title animation

    };

    button.click(playAudio);

    // Init mixer
    mixer();
    // Init Color selector
    keyPicker();
    // Init Beat That Toadboy!
    beatThatToadboy();

}

// Init Foundation (6)
$(document).foundation();

$(document).ready(function(){

    document.addEventListener("touchstart", function(){}, true);

    init();

});
