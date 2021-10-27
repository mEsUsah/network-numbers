let userInput = document.getElementById("subnetting__input");
let assignmentText = document.getElementById("subnetting__address");
let assingmentHint = document.getElementById("subnetting__hint");
let checkButton = document.getElementById("subnetting__checkbutton");
let difficultySelector = document.querySelectorAll('input[name="subnetting__level"]');
let alerts = document.getElementById("subnetting__alerts");
let attemptsDisplay = document.getElementById("subnetting__notications--attempts");
let scoreDisplay = document.getElementById("subnetting__notications--score");
let streakDisplay = document.getElementById("subnetting__notications--streak");

let quiz = [
    // STP --------------
    {
        question: "STP cost: 10MB connection",
        answer: "100"
    },
    {
        question: "STP cost: 100MB connection",
        answer: "19"
    },
    {
        question: "STP cost: 1GB connection",
        answer: "4"
    },
    {
        question: "STP cost: 10GB connection",
        answer: "2"
    },
    // OSPF -------------
    // {
    //     question: "OSPF cost: 64kbs connection",
    //     answer: "1562"
    // },
    // {
    //     question: "OSPF cost: 128kbs connection",
    //     answer: "781"
    // },
    {
        question: "OSPF cost: T1 connection",
        answer: "64"
    },
    {
        question: "OSPF cost: 100MB connection",
        answer: "10"
    },
    {
        question: "OSPF cost: 1GB connection",
        answer: "1"
    },
    {
        question: "OSPF cost: 10GB connection",
        answer: "1"
    },
    // Dynamic routing admin disctance
    {
        question: "Admin distance: Directly connected",
        answer: "0"
    },
    {
        question: "Admin distance: Static route",
        answer: "1"
    },
    {
        question: "Admin distance: External BGP",
        answer: "20"
    },
    {
        question: "Admin distance: Internal EIBGP",
        answer: "90"
    },
    {
        question: "Admin distance: OSPF",
        answer: "110"
    },
    {
        question: "Admin distance: RIP",
        answer: "120"
    },
    
]

let assignment;
let attempts = 0;
let score = 0;
let streak = 0;


function generateAssignment(){
    assignment = Math.floor(Math.random()*quiz.length);
    assignmentText.innerText = quiz[assignment].question;
    assingmentHint.innerText = quiz[assignment].answer;

}

function gradeAnswer(){
    userInputReading = userInput.value;
    if (userInputReading == quiz[assignment].answer){
        attempts++;
        score++;
        streak++;
        return true;
    } else {
        attempts++;
        streak = 0;
        return false;
    }
}

function checkAnswer(){
    if (gradeAnswer()){
        generateAssignment();
        displayCorrect();
        userInput.value = "";
    } else {
        displayError();
    }
    attemptsDisplay.innerText = attempts;
    scoreDisplay.innerText = score;
    streakDisplay.innerText = streak;

}

function displayCorrect(){
    userInput.classList.add("correct");
    setTimeout(() => {
        userInput.classList.remove("correct");
    }, 150);
}

function displayError(){
    userInput.classList.add("error");
    setTimeout(() => {
        userInput.classList.remove("error");
    }, 1000);

    assingmentHint.classList.add("active");
    setTimeout(() => {
        assingmentHint.classList.remove("active");
    }, 1000);
}

generateAssignment(0); // default value


/*-------Events------- */
checkButton.addEventListener('click', ()=>{
    checkAnswer();
});

window.addEventListener('keydown', (event)=>{
    if (event.key == "Enter"){
        checkAnswer();
    }
})
