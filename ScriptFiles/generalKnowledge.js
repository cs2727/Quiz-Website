const questionElement = document.getElementById('question');
const formElement = document.getElementById('questionAndAnswerForm');
const textInputElement = document.getElementById('answerField');
const buttonElement = document.getElementById('submitButton');
const detailsParagraphElement = document.getElementById('hint');
const quizContentContainerElement = document.getElementById('quizContentContainer');
const allCorrectAnswersContainerElement = document.getElementById('allCorrectAnswersContainer');
const resetQuizButton = document.getElementById('resetQuizButton');


let answersCorrectCounter = 0;
let counter = 0;

const generalKnowledgeQuestions = ['Which English city is known as the Steel City?', '2). Which former British colony was given back to China in 1997?', '3). Which element is said to keep bones strong?','4). How many lives is a cat said to have?', '5). Which mountain overlooks Cape Town in South Africa?','6). What is the capital of Argentina?'
, '7). What is a female elephant called?', '8). What does CIA stand for?', '9). Who launched the Cultural Revolution in China?', '10). What is the currency of Poland?'];

const generalKnowledgeAnswers = ['sheffield', 'hong kong', 'calcium', 'nine', 'table mountain', 'buenos aires', 'cow', 'central intelligence agency', 'mao', 'zloty'];

const hints = ['sh***ield', '*ong k**g', '***cium', 'n**e', '***le mountain', 'bu*nos ***es', "**w", '*ent**l *ntell***nce ****cy', 'm*o', 'zlo*y'];



function submitHandler(eventInstance){
    eventInstance.preventDefault();

     if (counter === 9){
        quizContentContainerElement.style.display = 'none';
        alert(`You got ${answersCorrectCounter} out of 10`);
        allCorrectAnswersContainerElement.style.display = 'block';
        return;
     }

    const userAnswer = textInputElement.value.toLowerCase();

    if (userAnswer === generalKnowledgeAnswers[counter]){
        answersCorrectCounter++;
    }

    counter++;
    questionElement.innerHTML = generalKnowledgeQuestions[counter];
    detailsParagraphElement.innerHTML = hints[counter];
    textInputElement.value = '';
    textInputElement.focus();
};



function resetQuiz(){
    location. reload();
}

formElement.addEventListener('submit', submitHandler);
resetQuizButton.addEventListener('click', resetQuiz);




