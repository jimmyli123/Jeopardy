
// Executes function 'getQ' when user clicks on Get Question Button
document.querySelector('#getQuestion').addEventListener('click',getQ)

// Executes function 'getA' when user clicks on Get Answer button
document.querySelector('#getAnswer').addEventListener('click',getA)

let url = "http://jservice.io/api/clues";
let currentQuestion;

let ourData;

fetch(url)
    .then(res => res.json())
    .then(data => {
        ourData = data;
    }
    )

function getQ() {
    document.querySelector('#answer').innerText="";
    let randomNumber = Math.floor(Math.random()*ourData.length);
    currentQuestion = ourData[randomNumber];
    document.querySelector('#question').innerText = currentQuestion.question;
}

function getA() {
        document.querySelector('#answer').innerText = currentQuestion.answer;
}

// let url = "http://jservice.io/api/clues";

// fetch(url)
// .then(res => res.json())
// .then(data => {
//     console.log(data);
//     let arrayOfAllQuestions = data;

// })