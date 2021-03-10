const quizDB=
[
    {
        

        question: "Q1: Which type of JavaScript language is ___",

        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        ans: "ans2"

    },

    {
        
        question: "Q2: Which one of the following also known as Conditional Expression:",

        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        ans: "ans4"
    },
    {
        question: "Q3: In JavaScript, what is a block of statement?",

        a: "Conditional block",
        b: "block that combines a number of statements into a single compound statement",
        c: "both conditional block and a single statement",
        d: "block that contains a single statement",
        ans: "ans4"
    },
    {
        question: "Q4: The 'function' and ' var' are known as:",

        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
        ans: "ans3"
    },
    {
        question: "Q5: Which one of the following is the correct way for calling the JavaScript code?",

        a: "Preprocessor",
        b: "Triggering Event",
        c: "RMI",
        d: "Function/Method",
        ans: "ans4"
    },
    


]

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');

const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');

let questionCount=0;
let score=0;
 const loadQuestion=()=>
 {
     const questionList=quizDB[questionCount]
     question.innerHTML=questionList.question;
     question1.innerHTML=questionList.a;
     question2.innerHTML=questionList.b;
     question3.innerHTML=questionList.c;
     question4.innerHTML=questionList.d;

 }

 loadQuestion();

 const getCheckAnswer=()=>
 {
     let answer;
     answers.forEach((curAnsElem)=>
     {
        if(curAnsElem.checked)
        {
            answer=curAnsElem.id;
        }
     });
     return answer;

 };
 const deselectAll=()=>
 {
     answers.forEach((curAnsElem) => curAnsElem.checked=false);
 }
 submit.addEventListener('click',()=>
 {
     const checkedAnswer=getCheckAnswer();
     console.log(checkedAnswer)
     if(checkedAnswer==quizDB[questionCount].ans)
     {
         score++;
     }
     questionCount++;
     deselectAll();
     if(questionCount<quizDB.length)
     {
         loadQuestion();
     }
     else
     {
        showScore.innerHTML=`
        <h3>You scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
     }
 });

