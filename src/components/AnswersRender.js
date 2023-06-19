export default function AnswerRender({listAnswers, displayAnswer}){
    const tags = listAnswers.map((answer, index)=>`<li class="wrapperRadioAnswer"> <input class="radioAnswer" name="answerGroup" type="radio" value="${index}"> ${answer}</li>`)
    displayAnswer.innerHTML = tags.join("");
}