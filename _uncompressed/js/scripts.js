var effect1 = $("#effect-1");
var effect1Title = $("#effect-1-title");

function closeEffect1() {
    effect1.animate({
        opacity: 0,
        top: "100"
    }, 1000);

    effect1Title.animate({
        opacity: 0,
        top: "-100"
    }, 1000);
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
}

function init() {
    // run on page load
    var button = document.getElementById('button');
    var audio = document.getElementById('audio');

    function resetButton() {
        $('.button-image').fadeOut();
    }

    var onClick = function(e) {

        e.preventDefault();
        
        audio.play(); // audio will load and then play

        runEffect1(); // play effect 1 title animation

        setTimeout(resetButton, 4000);
    };

    button.addEventListener('click', onClick, false);
}

$(document).ready(function(){

    document.addEventListener("touchstart", function(){}, true);

    init();
});
