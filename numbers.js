let userInput = document.getElementById("subnetting__input");
let assignmentText = document.getElementById("subnetting__address");
let assingmentHint = document.getElementById("subnetting__hint");
let checkButton = document.getElementById("subnetting__checkbutton");
let difficultySelector = document.querySelectorAll('input[name="subnetting__level"]');
let alerts = document.getElementById("subnetting__alerts");
let attemptsDisplay = document.getElementById("subnetting__notications--attempts");
let scoreDisplay = document.getElementById("subnetting__notications--score");
let streakDisplay = document.getElementById("subnetting__notications--streak");

let services = [
    // STP --------------
    {
        name: "STP cost: 10MB connection",
        port: "100"
    },
    {
        name: "STP cost: 100MB connection",
        port: "19"
    },
    {
        name: "STP cost: 1GB connection",
        port: "4"
    },
    {
        name: "STP cost: 10GB connection",
        port: "2"
    },
    // OSPF -------------
    // {
    //     name: "OSPF cost: 64kbs connection",
    //     port: "1562"
    // },
    // {
    //     name: "OSPF cost: 128kbs connection",
    //     port: "781"
    // },
    {
        name: "OSPF cost: T1 connection",
        port: "64"
    },
    {
        name: "OSPF cost: 100MB connection",
        port: "10"
    },
    {
        name: "OSPF cost: 1GB connection",
        port: "1"
    },
    {
        name: "OSPF cost: 10GB connection",
        port: "1"
    },
    // Dynamic routing admin disctance
    {
        name: "Admin distance: Directly connected",
        port: "0"
    },
    {
        name: "Admin distance: Static route",
        port: "1"
    },
    {
        name: "Admin distance: External BGP",
        port: "20"
    },
    {
        name: "Admin distance: Internal EIBGP",
        port: "90"
    },
    {
        name: "Admin distance: OSPF",
        port: "110"
    },
    {
        name: "Admin distance: RIP",
        port: "120"
    },
    
]

let assignment;
let attempts = 0;
let score = 0;
let streak = 0;


function generateAssignment(){
    assignment = Math.floor(Math.random()*services.length);
    assignmentText.innerText = services[assignment].name;
    assingmentHint.innerText = services[assignment].port;

}

function gradeAnswer(){
    userInputReading = userInput.value;
    if (userInputReading == services[assignment].port){
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
