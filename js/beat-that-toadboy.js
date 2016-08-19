var toadPick,
    playerPick =  $('select[name="playerchoice"]').val(),
    logo    = $("#logo"),
    toadboy = $("#toadboy"),
    player  = $("#player-hand"),
    toadHand = $("#toadboy-hand"),
    bubble  = $("#speech-bubble"),
    bubbleText = $(".decision"),
    run     = $("#run"),
    user    = $("#username").val();

function getToadPick() {
    toadPick = Math.floor((Math.random() * 3) + 1);
    console.log("Toadboy picked " + toadPick);
}

run.click(function(e) {
    e.preventDefault();

    user = $("#username").val();
    playerPick = $('select[name="playerchoice"]').val();

    if ( toadPick == 1 ) {
        // Toadboy picked ROCK
        toadHand.css("background-image", "url(images/tb-rock.png)");

        if ( playerPick === "Paper") {
            // Player wins
            bubbleText.html(user + "<br/>Wins!");
            player.css("background-image", "url(images/pl-paper.png)");
        }

        if ( playerPick === "Scissors") {
            // Player Loses
            $("#toadboy").css("background-image", "url(images/toadboy-won.png)");
            bubbleText.html(user + "<br/>Loses!");
            player.css("background-image", "url(images/pl-scissors.png)");
        }

        if ( playerPick === "Rock") {
            // Draw
            bubbleText.css("font-size", "65px");
            bubbleText.html("DRAW!");
            player.css("background-image", "url(images/pl-rock.png)");
        }
    };

    if ( toadPick == 2 ) {
        // Toadboy picked PAPER
        toadHand.css("background-image", "url(images/tb-paper.png)");

        if ( playerPick === "Paper") {
            // Draw
            bubbleText.css("font-size", "65px");
            bubbleText.html("DRAW!");
            player.css("background-image", "url(images/pl-paper.png)");
        }

        if ( playerPick === "Scissors") {
            // Player Wins
            bubbleText.html(user + "<br/>Wins!");
            player.css("background-image", "url(images/pl-scissors.png)");
        }

        if ( playerPick === "Rock") {
            // Player loses
            $("#toadboy").css("background-image", "url(images/toadboy-won.png)");
            bubbleText.html(user + "<br/>Loses!");
            player.css("background-image", "url(images/pl-rock.png)");
        }
    }

    if ( toadPick == 3 ) {
        // Toadboy picked SCISSORS
        toadHand.css("background-image", "url(images/tb-scissors.png)");

        if ( playerPick === "Paper") {
            // Player Loses
            $("#toadboy").css("background-image", "url(images/toadboy-won.png)");
            bubbleText.html(user + "<br/>Loses!");
            player.css("background-image", "url(images/pl-paper.png)");
        }

        if ( playerPick === "Scissors") {
            // Draw
            bubbleText.css("font-size", "65px");
            bubbleText.html("DRAW!");
            player.css("background-image", "url(images/pl-scissors.png)");
        }

        if ( playerPick === "Rock") {
            // Player Wins
            bubbleText.html(user + "<br/>Wins!");
            player.css("background-image", "url(images/pl-rock.png)");
        }
    }

    bubble.delay(3000).fadeIn(1000);
    toadHand.fadeIn(1000);
    player.fadeIn(1000);
});
