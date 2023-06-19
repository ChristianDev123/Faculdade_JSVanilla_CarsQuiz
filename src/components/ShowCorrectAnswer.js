export default function ShowCorrectAnswer({ correctIndex }){
    const allAnswersWrapper = document.querySelectorAll(".wrapperRadioAnswer");
    allAnswersWrapper.forEach((answerWrapper, index)=>{
        answerWrapper.style.color="white";
        answerWrapper.style.textShadow = "1px 1px 2px black";
        answerWrapper.style.backgroundColor = '#DE5B49';
        if(index === correctIndex){
            answerWrapper.style.backgroundColor = '#49DE95';
            answerWrapper.style.padding = ".7rem";
        }
    })
}