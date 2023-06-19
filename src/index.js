import AnswerRender from "./components/AnswersRender.js";
import AnswerVerifier from "./components/AnswersVerifier.js";
import AskRender from "./components/AskRender.js";
import ImageRender from "./components/ImageRender.js";
import ShowCorrectAnswer from "./components/ShowCorrectAnswer.js";
import { questions } from "./database/data.js";

const display = document.querySelector("#display");
const buttonSendAnswe = document.querySelector("#send");
const buttonNextAsk = document.querySelector("#next");
const displayAnswer = document.querySelector("#answer-list")

let indexData = 0;
let correctCounter = 0;

function updateScreen(){
    const { image, ask, answers } = questions[indexData];
    ImageRender({ image, display });
    AskRender({ask, display});
    AnswerRender({
        listAnswers: answers,
        displayAnswer
    });
}

function clearScreen(){
    display.innerHTML = "";
}

function sendAnswer(){
    const isCorrect = AnswerVerifier({question: questions[indexData]});
    if(isCorrect)
        correctCounter++;
    ShowCorrectAnswer({correctIndex:questions[indexData].correctAnswerIndex, correctCounter});
}

function nextAsk(){
    if(indexData < questions.length-1){
        clearScreen();
        indexData++;
        updateScreen();
    }
    else{
        location.href = `./ShowResult.html?hits=${correctCounter}`
    }
}

updateScreen();
buttonSendAnswe.addEventListener('click', sendAnswer);
buttonNextAsk.addEventListener('click', nextAsk);