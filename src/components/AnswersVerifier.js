export default function AnswerVerifier({question}){
    let rightAnswer = false;
    const { correctAnswerIndex } = question;
    const allAnswer = document.querySelectorAll(".radioAnswer");
    allAnswer.forEach((answer)=>{
        if(answer.checked){
            if(correctAnswerIndex == answer.value)
                rightAnswer = true;
        }
        answer.disabled = true;  
    })
    return rightAnswer;
}