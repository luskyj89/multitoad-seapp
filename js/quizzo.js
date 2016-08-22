/* ----------------------------------------
   Public Vars
--------------------------------------- */

var quizzoControls      = $('#quizzo-controls'),
    quizzoSwitch        = $("#quizzoSwitch"),
    quizzoFrame         = $("#quizzo")
    setQuestion         = $("#set-question"),
    quizzoQuestion      = $("#quizzo-question");

// URLS


/* ----------------------------------------
   Quizzo Display
--------------------------------------- */
function quizzoDisplay() {

    quizzoSwitch.change(function() {

        frameCop(quizzoSwitch, quizzoFrame, quizzoControls, "quizzo-on");

    });

    setQuestion.click(function(e) {
        console.log("click worked");
        e.preventDefault();

        var questionInput = $("#board-question").val();

        quizzoQuestion.html(questionInput);

    });

};
