var quizQuestions = [
    {
        id :1,
        question: "HTML stands for?",
        options : {
            a: "Hyper Text Markup Language",
            b: "Hyper Text Programming Language",
            c: "Hyper Text Styling Language",
            d: "Hyper Text Scripting Language"
        } ,
        answer : "Hyper Text Markup Language",
    },
    {
        id: 2,
        question: "Which language is used for styling web pages?",
        options: {
            a: "HTML",
            b: "CSS",
            c: "JavaScript",
            d: "PHP"
        },
        answer: "CSS"

    },
    {
        id: 3,
        question: "Which of these is a JavaScript framework?",
        options: {
            a: "Django",
            b: "React",
            c: "Laravel",
            d: "Bootstrap"
        },
        answer: "React"
    },
    {
        id: 4,
        question: "Which tag is used to define a hyperlink in HTML?",
        options: {
            a: "link",
            b: "a",
            c: "href",
            d: "url"
        },
        answer: "a"
    },
    {
        id: 5,
        question: "Which company developed JavaScript?",
        options: {
            a: "Microsoft",
            b: "Netscape",
            c: "Oracle",
            d: "Sun Microsystems"
        },
        answer: "Netscape"
    },
    {
        id: 6,
        question: "Which of these is not a programming language?",
        options: {
            a: "Python",
            b: "HTML",
            c: "Java",
            d: "C++"
        },
        answer: "HTML"
    },
    {
        id: 7,
        question: "What does CSS stand for?",
        options: {
            a: "Creative Style Sheets",
            b: "Cascading Style Sheets",
            c: "Colorful Style Sheets",
            d: "Cascading Script Sheets"
        },
        answer: "Cascading Style Sheets"
    },
    {
        id: 8,
        question: "Which HTML tag is used to display an image?",
        options: {
            a: "img",
            b: "image",
            c: "picture",
            d: "src"
        },
        answer: "img"
    },
]
// console.log(quizQuestions[1])
var questionElement = document.getElementById("questionElement")
var optionElement = document.getElementById("optionElement")

var indexNumber = 0

function handleQuestion(){
      var optionObj = quizQuestions[indexNumber].options    
      questionElement.innerHTML = quizQuestions[indexNumber].question
      optionElement.innerHTML = ""
      for( var key in optionObj){
        optionElement.innerHTML += `<li onclick="checkAnswer(this)">${optionObj[key]}</li>`
      }
}
//  handelQuestion();
function nextQues(){
    if(indexNumber < quizQuestions.length - 1){
        indexNumber++
        handleQuestion()
    }else{
        console.log("SUBMIT ")
    }
}
// nextQues();
function checkAnswer(element){

    var allLiElement = optionElement.children

    var userSelection = element.innerHTML.toLowerCase()
    var ans = quizQuestions[indexNumber].answer.toLowerCase()
    var result = userSelection === ans
    console.log(result)
    if (result){
        element.style.backgroundColor = "green"
    }else{
        element.style.backgroundColor = "red"
    }
    for ( var i = 0; i < allLiElement.length; i++){
        console.log(allLiElement[i])
        allLiElement[i].style.pointerEvents = "none"
    }
}
