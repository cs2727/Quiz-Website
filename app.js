const generalKnowledgeQuizButton = document.getElementById('generalKnowledgeButton');
const animalQuizButton = document.getElementById('animalButton')
const countriesQuizButton = document.getElementById('countriesButton');



function quizSelectorHandler(eventObject){
    let url;

    if (eventObject.currentTarget.id === 'generalKnowledgeButton'){
       url = "Pages/generalKnowledgeQuiz.html";
    }
    else if (eventObject.currentTarget.id === "animalButton"){
        url = "Pages/animalQuiz.html"
    }
    else {
        url = "Pages/countriesQuiz.html"
    }
    
    window.location.href = url;
}



generalKnowledgeButton.addEventListener('click', quizSelectorHandler);
animalQuizButton.addEventListener('click', quizSelectorHandler);
countriesQuizButton.addEventListener('click', quizSelectorHandler);






