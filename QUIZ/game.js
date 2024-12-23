const question =document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice-text"));
const progressText=document.getElementById("progressText");
const scoreText=document.getElementById("score");
const progressBar_full=document.getElementById("progressBar_full");



let currentQ={};
let acceptingQ=true;
let score=0;
let Qcounter=0;
let availableQ=[];

let questions=[
    {
    question: "Which language is not case sensitive?",
    choice1:"python",
    choice2:"java",
    choice3:"SQL",
    choice4:"C++",
    answer:3,
    },

    {
    question:"Full form of SQL is:",
    choice1:"Super Query Language",
    choice2:"Super Quantum Language",
    choice3:"Supreme Questioing Language ",
    choice4:"Structured Query Language",
    answer:4,
    },

    {
    question:"Inside which HTML element do we put the javascript?",
    choice1:"<script>",
    choice2:"<javascript>",
    choice3:"<js>",
    choice4:"none of the above",
    answer: 1,
    },

    {
    question:"what is the standard output statement used in c?",
    choice1:"cout",
    choice2:"print",
    choice3:"system.out.println()",
    choice4:"printf",
    answer: 4,
    },

    {
    question:"what is the name of the library in python that plots graphs?",
    choice1:"math",
    choice2:"matplotlib",
    choice3:"algorithm",
    chocie4:"string",
    answer: 2,
    },

    {
    question:"How do we write'Hello world' in an alert box?",
    choice1:"msgBox('Hello world')",
    choice2:"alertbox('Hello world')",
    choice3:"alert('Hello world')",
    choice4:"msg('Hello world')",
    answer: 3,
    },

    {
    question:"which of the following is a backend language?",
    choice1:"python",
    choice2:"HTML",
    choice3:"CSS",
    choice4:"mongoDB",
    answer: 1,
    },

    {
    question:"which of the following is a hardware device for output?",
    choice1:"montitor screen",
    choice2:"mouse",
    choice3:"keyboard",
    choice4:"joystick",
    answer: 1,
    },

    {
    question:"how do we write hello world in java?",
    choice1:"printf('hello world')",
    choice2:"print('hello world')",
    choice3:"system.out.println('hello world')",
    choice4:"cout<<'hello world'",
    answer: 3,
    },

    {
    question:"which of the below stated is an invalid identifier?",
    choice1:"ans1",
    choice2:"1@hash",
    choice3:"roll_back1",
    choice4:"night_day2",
    answer: 2,
    },
];

const correct_bonus=10;
const max_q=5;

startGame=()=>{

    Qcounter=0;
    score=0;
    availableQ=[...questions];
    getNewQ();
};
 
getNewQ=()=>{
    if(availableQ.length===0 || Qcounter >=max_q){
        localStorage.setItem("mostRecentScore",score);
        return window.location.assign("end.html");
    }
    Qcounter++;
    progressText.innerText = `Question ${Qcounter}/${max_q}`;
    progressBar_full.style.width= `${(Qcounter / max_q) * 100}%`;


    const questionIndex=Math.floor(Math.random()*availableQ.length);
    currentQ=availableQ[questionIndex];
    question.innerText=currentQ.question;
    choices.forEach((choice) =>{
        const number=choice.dataset['number'];
        choice.innerText=currentQ['choice'+number];
    });

    availableQ.splice(questionIndex, 1);
    acceptingQ=true;
};
choices.forEach((choice)=>{
    choice.addEventListener("click",e =>{
        if(!acceptingQ)return;

        acceptingQ=false;
        const selectch=e.target;
        const selectans=selectch.dataset["number"];

        const classToapply= selectans ==currentQ.answer?"correct":"incorrect";
        selectch.parentElement.classList.add(classToapply);

        if(classToapply==="correct")
        {
            incrementScore(correct_bonus)
        }

        setTimeout(()=>{
            selectch.parentElement.classList.remove(classToapply);
            getNewQ();
        },1000);

    });
});

incrementScore=num =>{
    score+=num;
    scoreText.innerText=score;
}

startGame()

