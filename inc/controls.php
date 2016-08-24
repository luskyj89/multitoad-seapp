<section id="controls">

    <div id="effect-fire">

        <div class="settings-wrap">
            <a href="#" id="advanced-button" class="settings-icon" title="Settings">w</a>
            <a href="#" id="background-button" class="settings-icon" title="Background">b</a>
            <a href="#" id="help-button" class="settings-icon" title="Help">q</a>
        </div>

        <a id="button" class="effect-btn first" href="#">Dunked</a>
        <a id="custom-text-button" class="effect-btn" href="#">Text Effect</a>
        <a id="toadboy-toggle" class="effect-btn" href="#">Toadboy Toggle</a> <br/>

        <a id="gameshow-button" class="effect-btn sound-btn first" href="#">Gameshow Music</a>
        <a id="time-clock-button" class="effect-btn sound-btn" href="#">Time Clock Music</a>
        <a id="applause-button" class="effect-btn sound-btn" href="#">Applause</a>

        <h1>Streamboy<sup>&trade;</sup> Alpha &ndash; <?php echo $currentVersion; ?></h1>

    </div>

    <!-- Beat That Toadboy -->
    <?php require('inc/controls/btt.php'); ?>

    <!-- Scoreboard Controls -->
    <?php require('inc/controls/scoreboard.php'); ?>

    <!-- Where's That Toadboy Controls -->
    <?php require('inc/controls/wtt.php'); ?>

    <!-- Giveaway Controls -->
    <?php require('inc/controls/giveaway.php'); ?>

    <!-- Toadboy Quizzo Controls -->
    <?php require('inc/controls/quizzo.php'); ?>

    <!-- Toadboy Quizzo Controls -->
    <?php require('inc/controls/video.php'); ?>

    <!-- Mixer Switch Wrap -->
    <?php require('inc/controls/mixer.php'); ?>

    <!-- Modals -->
    <?php require('inc/controls/modals.php'); ?>

</section>
