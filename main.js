// const quizContainer = document.getElementById('quiz');
//     const resultsContainer = document.getElementById('results');
//     const submitButton = document.getElementById('submit');


// const myQuestions = [
//     {Image:  src="./img/q1.png",
//     question:"1.Answer choices for the first question." ,
//     answers: {
//         a: "john",
//         b: "jane",
//         c: "none"
//     },
//     correctAnswer: "a"
//     },
//     {
//     Image: src="img/q2.png",
//     question: "2.Answer choices for the second question.",
//     answers: {
//         a: "14",
//         b: "10",
//         c: "15"
//     },
//     correctAnswer: "b"
//     },
//     {
//     Image: src="img/q3.png",
//     question: "3.Answer choices for the third question.",
//     answers: {
//         a: "26",
//         b: "24",
//         c: "10",
//     },
//     correctAnswer: "c"
//     }
// ];
(function(){
    function buildQuiz(){
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
            answers.push(
            `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
            </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
        }
    );
    quizContainer.innerHTML = output.join('');
}

    function showResults(){


    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
    {
    question:"1.Answer choices for the first question." ,
    answers: {
        a: "john",
        b: "jane",
        c: "none"
    },
    correctAnswer: "a"
    },
    {
    question: "2.Answer choices for the second question.",
    answers: {
        a: "14",
        b: "10",
        c: "15"
    },
    correctAnswer: "b"
    },
    {
    question: "3.Answer choices for the third question.",
    answers: {
        a: "26",
        b: "24",
        c: "10",
    },
    correctAnswer: "c"
    }
];
    buildQuiz();
    submitButton.addEventListener('click', showResults);
})();