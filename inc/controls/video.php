<div id="video-controls">

    <p id="video-double-error" class="error">Error! One field must be left blank.</p>
    <p id="video-no-error" class="error">Error! You haven't supplied an ID.</p>

    <div class="small button-group">
        <a href="#" id="set-video" class="button">Show Video</a>
        <a href="#" id="clear-video" class="button">Clear Video</a>
    </div>

    <label>YouTube ID
        <input id="youtube-id" type="text" name="youtube-id" placeholder="11 Characters, in video URL" maxlength="11"/>
    </label>

    <label>Vimeo ID
        <input id="vimeo-id" type="text" name="vimeo-id" placeholder="9 Numbers, in video URL" maxlength="9"/>
    </label>

    <label>Custom Message
        <input id="video-frame-message" type="text" name="video-frame-message" placeholder="We'll be right back!" maxlength="60"/>
    </label>

    <p id="video-message-error" class="error">Error! You must enter a message.</p>

    <div class="small button-group">
        <a href="#" id="set-message" class="button">Show/Hide Message</a>
    </div>

</div>
