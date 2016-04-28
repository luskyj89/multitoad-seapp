<?php require('inc/header.php'); ?>

<audio id="audio">
    <source src="audio/loud-bang.m4a" type="audio/mpeg" />
</audio>

<audio id="custom-cheer-audio">
    <source src="audio/crowd-cheer.m4a" type="audio/mpeg" />
</audio>

<audio id="holy-shit-audio">
    <source src="audio/holy-shit.m4a" type="audio/mpeg" />
</audio>

<audio id="game-show-audio">
    <source src="audio/game-show-intro.m4a" type="audio/mpeg" />
</audio>

<section id="main-view">

    <section id="top">

        <div id="speech-bubble">
            <span class="decision"></span>
        </div>

        <figure id="logo"></figure>
        <figure id="toadboy"></figure>
        <figure id="grass"></figure>

        <figure id="toadboy-hand"></figure>
        <figure id="player-hand"></figure>

    </section>

    <section id="scoreboard-frame">
        <div id="left-score">
            <span class="scoreboard-ele">0</span>
        </div>
        <div id="left-player">
            <span class="scoreboard-ele">P1</span>
        </div>
        <div id="game-type">
            <span class="scoreboard-ele">MTSC</span>
        </div>
        <div id="right-player">
            <span class="scoreboard-ele">P2</span>
        </div>
        <div id="right-score">
            <span class="scoreboard-ele">0</span>
        </div>
    </section>

    <section id="wtt-frame">

        <figure class="wtt-title"></figure>

        <div class="door-frame">
            <div class="door-opening opening-1"></div>
            <div class="door door-1"></div>
        </div>

        <div class="door-frame">
            <div class="door-opening opening-2"></div>
            <div class="door door-2"></div>
        </div>

        <div class="door-frame">
            <div class="door-opening opening-3"></div>
            <div class="door door-3"></div>
        </div>

        <div id="wtt-bg"></div>

    </section>

    <!-- Dunked Effect -->
    <div id="effect-1"></div>
    <figure id="effect-1-title"></figure>

    <!-- Custom Cheer -->
    <span id="custom-cheer-text">Unbelievable!</span>

</section>

<section id="controls">

    <div id="effect-fire">
        <h1>Multitoad SEAPP&trade; Alpha &ndash; v1.4.0</h1>

        <a id="button" class="effect-btn first" href="#">Dunked</a>
        <a id="custom-cheer-button" class="effect-btn" href="#">Custom Cheer</a> <br/>

        <a id="holy-shit-button" class="effect-btn sound-btn first" href="#">Holy Shit</a>

    </div>

    <div id="btt-controls">

        <select id="player-choice" name="playerchoice">
            <option value="Player's Selection">Player's Selection</option>
            <option value="Rock">Rock</option>
            <option value="Paper">Paper</option>
            <option value="Scissors">Scissors</option>
        </select>

        <label>
            <input id="username" type="text" name="username" value="Username" />
        </label>

        <div class="small button-group">
            <a href="#" id="run" class="button">RUN</a>
            <a href="./?toadboy=on" id="reset" class="button">RESET</a>
        </div>

    </div>

    <div id="scoreboard-controls">

        <div class="small button-group">
            <a href="#" id="update" class="button">UPDATE</a>

            <div class="switch">
                <span class="switch-title">Show/Hide</span>
                <input class="switch-input" id="toggleBoard" type="checkbox" name="toggleBoard">
                <label class="switch-paddle" for="toggleBoard">
                    <span class="show-for-sr">Show or Hide Scoreboard</span>
                </label>
            </div>
        </div>

        <label>Game Variation
            <input id="game-variation" type="text" name="game-type" value="MTSC" />
        </label>
        <label>Player 1
            <input id="player1" type="text" name="player1" value="P1" />
        </label>
        <label>Player 1's Score
            <input id="player1Score" type="text" name="player1Score" value="0" />
        </label>
        <label>Player 2
            <input id="player2" type="text" name="player2" value="P2" />
        </label>
        <label>Player 2's Score
            <input id="player2Score" type="text" name="player2Score" value="0" />
        </label>

    </div>

    <div id="wtt-controls">

        <label>GIF 1
            <select id="gif1">
                <option value="images/wheres-that-toadboy/dancing-squidward.gif">Squidward</option>
                <option value="images/wheres-that-toadboy/heres-johnny.gif">Here's Johnny!</option>
                <option value="images/wheres-that-toadboy/yablewit.jpg">Ya blew it.</option>
                <option value="images/wheres-that-toadboy/oh-boy.gif">Oh boy...</option>
                <option value="images/wheres-that-toadboy/vince.gif">Vince</option>
                <option value="images/wheres-that-toadboy/hank-hill.gif">Hank Hill</option>
                <option value="images/wheres-that-toadboy/hobo-garbage.gif">Hobo Garbage</option>
                <option value="images/wheres-that-toadboy/lizard-football-soccer.gif">Soccer Lizard</option>
                <option value="images/wheres-that-toadboy/bday-dog.gif">Birdthday Dog</option>
                <option value="images/wheres-that-toadboy/creepy-bear.gif">Creepy Bear</option>
                <option value="images/wheres-that-toadboy/muscle-man.gif">Muscle Man</option>
                <option value="images/wheres-that-toadboy/cat-fish.gif">Cat and Fish</option>
                <option value="images/wheres-that-toadboy/crazy-eyes.gif">Crazy Eyes</option>
                <option value="images/wheres-that-toadboy/pee-wee.gif">Pee Wee</option>
            </select>
        </label>
        <label>GIF 2
            <select id="gif2">
                <option value="images/wheres-that-toadboy/dancing-squidward.gif">Squidward</option>
                <option value="images/wheres-that-toadboy/heres-johnny.gif">Here's Johnny!</option>
                <option value="images/wheres-that-toadboy/yablewit.jpg">Ya blew it.</option>
                <option value="images/wheres-that-toadboy/oh-boy.gif">Oh boy...</option>
                <option value="images/wheres-that-toadboy/vince.gif">Vince</option>
                <option value="images/wheres-that-toadboy/hank-hill.gif">Hank Hill</option>
                <option value="images/wheres-that-toadboy/hobo-garbage.gif">Hobo Garbage</option>
                <option value="images/wheres-that-toadboy/lizard-football-soccer.gif">Soccer Lizard</option>
                <option value="images/wheres-that-toadboy/bday-dog.gif">Birdthday Dog</option>
                <option value="images/wheres-that-toadboy/creepy-bear.gif">Creepy Bear</option>
                <option value="images/wheres-that-toadboy/muscle-man.gif">Muscle Man</option>
                <option value="images/wheres-that-toadboy/cat-fish.gif">Cat and Fish</option>
                <option value="images/wheres-that-toadboy/crazy-eyes.gif">Crazy Eyes</option>
                <option value="images/wheres-that-toadboy/pee-wee.gif">Pee Wee</option>
            </select>
        </label>
        <label>GIF 3
            <select id="gif3">
                <option value="images/wheres-that-toadboy/dancing-squidward.gif">Squidward</option>
                <option value="images/wheres-that-toadboy/heres-johnny.gif">Here's Johnny!</option>
                <option value="images/wheres-that-toadboy/yablewit.jpg">Ya blew it.</option>
                <option value="images/wheres-that-toadboy/oh-boy.gif">Oh boy...</option>
                <option value="images/wheres-that-toadboy/vince.gif">Vince</option>
                <option value="images/wheres-that-toadboy/hank-hill.gif">Hank Hill</option>
                <option value="images/wheres-that-toadboy/hobo-garbage.gif">Hobo Garbage</option>
                <option value="images/wheres-that-toadboy/lizard-football-soccer.gif">Soccer Lizard</option>
                <option value="images/wheres-that-toadboy/bday-dog.gif">Birdthday Dog</option>
                <option value="images/wheres-that-toadboy/creepy-bear.gif">Creepy Bear</option>
                <option value="images/wheres-that-toadboy/muscle-man.gif">Muscle Man</option>
                <option value="images/wheres-that-toadboy/cat-fish.gif">Cat and Fish</option>
                <option value="images/wheres-that-toadboy/crazy-eyes.gif">Crazy Eyes</option>
                <option value="images/wheres-that-toadboy/pee-wee.gif">Pee Wee</option>
            </select>
        </label>

        <div class="small button-group">
            <a href="#" id="play-wtt" class="button">Hide Toadboy</a>
            <a href="#" id="reset-wtt" class="button">Close Doors</a>
            <a href="#" id="show-title" class="button">Show Title</a>
        </div>

    </div>

    <div id="mixer">

        <div id="master-vol-slider" class="slider vertical" data-slider data-initial-start="35" data-end="100" data-vertical="true">
          <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
          <span class="slider-fill" data-slider-fill></span>
          <input type="hidden">
        </div>

        <span class="current-volume">Volume: 50%</span>

        <label class="mixer-input">Key Color
          <select id="color-key">
            <option value="notselected">Not Selected</option>
            <option value="purple">Purple</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
          </select>
        </label>

        <label id="custom-text-label" class="mixer-input">Custom Text
            <input id="custom-text" type="text" placeholder="(Optional)">
        </label>

        <div class="switch-wrap">
            <div class="switch">
                <span class="switch-title">&nbsp;</span>
                <input class="switch-input" id="bttSwitch" type="checkbox" name="bttSwitch">
                <label class="switch-paddle" for="bttSwitch">
                    <span class="show-for-sr">Activate Beat That Toadboy</span>
                </label>
            </div>

            <div class="switch">
                <span class="switch-title">Scoreboard</span>
                <input class="switch-input" id="scoreSwitch" type="checkbox" name="scoreSwitch">
                <label class="switch-paddle" for="scoreSwitch">
                    <span class="show-for-sr">Activate Scoreboard Controls</span>
                </label>
            </div>

            <div class="switch">
                <span class="switch-title">WTT</span>
                <input class="switch-input" id="wttSwitch" type="checkbox" name="wttSwitch">
                <label class="switch-paddle" for="wttSwitch">
                    <span class="show-for-sr">Activate Where's That Toadboy</span>
                </label>
            </div>
        </div>

    </div>

</section>

<footer>
    &copy; 2016 <a href="http://multitoad.com" target="_blank">Multitoad.com</a> | Created by <a href="http://johnlusky.com" target="_blank">John Lusky</a> | All Rights Reserved
</footer>

<?php require('inc/footer.php'); ?>
