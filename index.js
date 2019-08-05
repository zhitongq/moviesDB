// When you start the quiz, the flow of the function is the following: 
// startQuiz, renderQuestion, userAnswer, checkAnswer, correct or incorrectPrompt, renderNextQuestion, either loops back to renderQuestion or ends with the renderResults. 

let questionNum = 0;
let score = 0;

function renderQuestion () {
    addQuestionNum();
    $('.questions').html(`<div class="question-${questionNum}"> ${STORE[questionNum-1].question} 
    <form>
    <fieldset>
    <label class="questionOptions"> 
    <input type="radio" value="${STORE[questionNum-1].options[0]}" name="answer" required>
    <span>${STORE[questionNum-1].options[0]}</span>
    </label>
    <label class="questionOptions"> 
    <input type="radio" value="${STORE[questionNum-1].options[1]}" name="answer" required>
    <span>${STORE[questionNum-1].options[1]}</span>
    </label>
    <label class="questionOptions"> 
    <input type="radio" value="${STORE[questionNum-1].options[2]}" name="answer" required>
    <span>${STORE[questionNum-1].options[2]}</span>
    </label>
    <label class="questionOptions"> 
    <input type="radio" value="${STORE[questionNum-1].options[3]}" name="answer" required>
    <span>${STORE[questionNum-1].options[3]}</span>
    </label>
    <label class="questionOptions"> 
    <input type="radio" value="${STORE[questionNum-1].options[4]}" name="answer" required>
    <span>${STORE[questionNum-1].options[4]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    </div> 
    `)
    userAnswer();
}

function userAnswer () {
    $("form").on("submit", function (event) {
        event.preventDefault();
        let userSelect = $('input:checked').attr('value');
        checkAnswer(userSelect);
    })
}

function checkAnswer(selected) {
    let answer = STORE[questionNum-1].answer;
    if (!(isNaN(answer))) {
        selected = Number(selected);
    }
    if (selected === answer) {
        addScore();
        $('.js-score').text(score);
        correctPrompt();
    } else {
        incorrectPrompt();
    }
}

function correctPrompt () {
    $('.questions').html(`<div class="resultPrompt"><div class="icon"><img src="${STORE[questionNum-1].icon}" alt="${STORE[questionNum-1].alt}"/></div><p>You got it right!</p><button type=button class="nextButton">Next</button></div>`);
    renderNextQuestion();
}

function incorrectPrompt () {
    $('.questions').html(`<div class="resultPrompt"><div class="icon"><img src="${STORE[questionNum-1].icon}" alt="${STORE[questionNum-1].alt}"/></div><p>You got it wrong! The correct answer was ${STORE[questionNum-1].answer}.</p><button type=button class="nextButton">Next</button></div>`);
    renderNextQuestion();
}

function addScore () {
    score++;
}

function addQuestionNum () {
    questionNum++;
    $('.js-question-num').text(questionNum);
}

function renderNextQuestion () {
    $('.nextButton').on('click', function(event) {
        if (questionNum >= STORE.length) {
            renderResults();
            restartQuiz();
        } else {
            $('.correctPrompt').remove();
            renderQuestion();
        }
    });
}

function renderResults () {
    console.log('ending results');
    if (score >= 8) {
        $('.main-Content').html(`<div class='results'>You're a Netflix Pro!</div> <button class='restartButton'>Restart Quiz</button>`)
    } else if (score < 8 && score >= 5) {
        $('.main-Content').html(`<div class='results'>You're basic!</div> <button class='restartButton'>Restart Quiz</button>`)
    } else {
        $('.main-Content').html(`<div class='results'>Your Netflix level is elementary.</div> <button class='restartButton'>Restart Quiz</button>`)
    }   
}

function restartQuiz () {
    $(".restartButton").on("click", function (){
        location.reload();
    });
}

// When you start the Quiz you would remove the content in the center and leave the title. 
function startQuiz () {
    $(".main-content").on('click', '.startButton', function(event) {
        $(".begin").remove();
        $(".game-levels").remove();
        renderQuestion();
    });
}

// High level function that allows for the questions to continue rolling. 
function runQuiz () {
    startQuiz();
}

$(runQuiz);
