/* ----------------------------------------
   Public Vars
--------------------------------------- */

var videoControls       = $('#video-controls'),
    videoSwitch         = $("#videoSwitch"),
    videoFrame          = $("#video"),
    setVideo            = $("#set-video"),
    youtubeID           = $("#youtube-id"),
    vimeoID             = $("#vimeo-id"),
    videoWrap           = $("#video-wrap"),
    videoError          = $("#video-double-error"),
    clearVideo          = $("#clear-video"),
    noVideoError        = $("#video-no-error"),

    videoFrameMessage   = $("#video-frame-message"),
    setMessage          = $("#set-message"),
    videoMessage        = $("#video-message"),
    videoMessageError   = $("#video-message-error");

// URLS


/* ----------------------------------------
   Video Display
--------------------------------------- */
function videoDisplay() {

    videoSwitch.change(function() {
        console.log("video init");
        frameCop(videoSwitch, videoFrame, videoControls, "video-on");

    });

    setVideo.click(function(e) {
        e.preventDefault();

        var youtubeInput = youtubeID.val();
        var vimeoInput   = vimeoID.val();

        // If both fields have values, throw an error
        if ( youtubeInput.length > 0 && vimeoInput.length > 0) {

            videoError.show();
            noVideoError.hide();

            return;

        // If a YouTube ID was entered, call the video
        } else if ( youtubeInput.length > 0 ) {

            videoError.hide();
            noVideoError.hide();

            videoWrap.html('<iframe width="1280" height="720" src="https://www.youtube.com/embed/' + youtubeInput + '?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>');

        // If a Vimeo ID was entered, call the video
        } else if ( vimeoInput.length > 0 ) {

            videoError.hide();
            noVideoError.hide();

            videoWrap.html('<iframe src="https://player.vimeo.com/video/' + vimeoInput + '?title=0&byline=0&portrait=0&badge=0&autoplay=1" width="1280" height="720" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')

        // If no values are found, throw an error
        } else if ( youtubeInput.length == 0 && vimeoInput.length == 0 ) {

            noVideoError.show();

        }

    });

    // Remove the video from view and clear the fields
    clearVideo.click(function(e) {
        e.preventDefault();

        videoWrap.html(" ");

        youtubeID.val("");
        vimeoID.val("");
    });

    // Set a custom message
    setMessage.click(function(e) {
        e.preventDefault();

        var messageInput = videoFrameMessage.val();

        if ( messageInput.length > 0 ) {

            videoMessageError.hide();
            videoMessage.html(messageInput);

            // If the message is already visible, slide it away
            if ( videoMessage.hasClass("message-visible") ) {

                videoMessage.removeClass("message-visible");

            } else {

                videoMessage.addClass("message-visible");

            }

        // If the field is blank but the message is visbile, hide it. Otherwise, throw an error
        } else if ( videoMessage.hasClass("message-visible") ) {

            videoMessage.removeClass("message-visible");

        } else {

            videoMessageError.show();

        }
    });
};
