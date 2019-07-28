let questionNum = 0;
let score = 0;

function getQuestions () {

}

function startQuestion () {

}

function nextQuestion () {

}

function lastQuestion () {
    // end script
}

function userAnswer () {

}

function isCorrect () {
    addScore();
    $('.score').text(score);
}

function isWrong () {
    // tell them it's wrong and give them the correct answer
}

function addScore () {
    score++;
}

function addQuestionNum () {
    questionNum++;
}

function renderQuestion () {
    startQuestion();

}

function renderResults () {
    
}

function startQuiz () {
    (".main-content").on("click", '.startButton', function(event) {
        $(".begin").remove;
    });
}

function runQuiz () {
    startQuiz();
    renderQuestion();
}

$(runQuiz);
