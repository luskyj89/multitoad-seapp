/* ----------------------------------------
   Public Vars
--------------------------------------- */
var door1Blink, door2Blink, door3Blink;

var doorFrame       = $('.door-frame'),
    wttControls     = $('#wtt-controls'),
    wttSwitch       = $('#wttSwitch'),
    wttFrame        = $('#wtt-frame'),
    runWtt          = $('#play-wtt'),
    gif1            = $('#gif1').val(),
    gif2            = $('#gif2').val(),
    gif3            = $('#gif3').val(),
    doorOpening     = $('.door-opening'),
    opening1        = $('.opening-1'),
    opening2        = $('.opening-2'),
    opening3        = $('.opening-3'),
    door1           = $('.door-1'),
    door2           = $('.door-2'),
    door3           = $('.door-3'),
    resetWtt        = $('#reset-wtt'),
    showTitle       = $('#show-title'),
    toadTitle       = $('.wtt-title');

// URLS
var toadboy         = "images/wheres-that-toadboy/toadboy-door.png";


/* ----------------------------------------
   Where's That Toadboy Game
--------------------------------------- */
function wheresThatToadboy() {

    // Blink doors sequentially
    function doorBlinker(number) {
        doorFrame.eq(number).css("background-color", "#22d7fd");
        setTimeout(function(){ doorFrame.eq(number).css("background-color", "#00fa87"); }, 500);
    };

    function startDoorBlink() {
        doorBlink = setInterval(function() {
            doorBlinker(0);
            setTimeout(function() { doorBlinker(1) }, 500);
            setTimeout(function() { doorBlinker(2) }, 1000);
        }, 3000);
    }

    startDoorBlink();

    wttSwitch.change(function() {

        if ( wttSwitch.hasClass("wtt-on") ) {
            wttSwitch.removeClass("wtt-on");
            wttControls.slideUp();
            wttFrame.hide();
        }
        else {
            wttSwitch.addClass("wtt-on");
            wttControls.slideDown();
            wttFrame.show();

            if ( bttSwitch.hasClass("btt-on") ) {
                bttSwitch.trigger("click");
            }

            if ( scoreSwitch.hasClass("score-on") ) {
                scoreSwitch.trigger("click");
            }

            if ( giveawaySwitch.hasClass("giveaway-on") ) {
                giveawaySwitch.trigger("click");
            }
        }

    });

    runWtt.click(function(e) {
        e.preventDefault();

        console.log("test");

        var gif1    = $("#gif1").val(),
            gif2    = $("#gif2").val(),
            gif3    = $("#gif3").val();

        opening1.css("background-image", "url(" + gif1 + ")");
        opening2.css("background-image", "url(" + gif2 + ")");
        opening3.css("background-image", "url(" + gif3 + ")");


        toadsDoor = Math.floor((Math.random() * 3) + 1);
        console.log("Toadboy is behind " + toadsDoor);

        if ( toadsDoor == 1 ) {
            opening1.css("background-image", "url(" + toadboy + ")");
        }
        else if ( toadsDoor == 2 ) {
            opening2.css("background-image", "url(" + toadboy + ")");
        }
        else if ( toadsDoor == 3 ) {
            opening3.css("background-image", "url(" + toadboy + ")");
        }

    });

    resetWtt.click(function(e) {
        e.preventDefault();

        door1.animate({
            top: "36px"
        }, 2500, "easeOutQuad");

        door2.animate({
            top: "36px"
        }, 2500, "easeOutQuad");

        door3.animate({
            top: "36px"
        }, 2500, "easeOutQuad");

        clearInterval(door1Blink);
        clearInterval(door2Blink);
        clearInterval(door3Blink);

        startDoorBlink();

    });

    showTitle.click(function(e) {
        e.preventDefault();

        toadTitle.fadeIn(function() {
            toadTitle.delay(6000).fadeOut();
        })
    });

    door1.click(function(e) {
        e.preventDefault();

        door1.animate({
            top: "-390px"
        }, 2500, "easeOutElastic");

        clearInterval(doorBlink);

        door1Blink = setInterval(function() {
            doorFrame.eq(0).css("background-color", "#22d7fd");
            setTimeout(function(){ doorFrame.eq(0).css("background-color", "#00fa87"); }, 100);
        }, 200);
    });

    door2.click(function(e) {
        e.preventDefault();

        door2.animate({
            top: "-390px"
        }, 2500, "easeOutElastic");

        clearInterval(doorBlink);

        door2Blink = setInterval(function() {
            doorFrame.eq(1).css("background-color", "#22d7fd");
            setTimeout(function(){ doorFrame.eq(1).css("background-color", "#00fa87"); }, 100);
        }, 200);
    });

    door3.click(function(e) {
        e.preventDefault();

        door3.animate({
            top: "-390px"
        }, 2500, "easeOutElastic");

        clearInterval(doorBlink);

        door3Blink = setInterval(function() {
            doorFrame.eq(2).css("background-color", "#22d7fd");
            setTimeout(function(){ doorFrame.eq(2).css("background-color", "#00fa87"); }, 100);
        }, 200);
    });

};
