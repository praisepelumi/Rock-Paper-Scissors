let userScore = 0;
let computerScore = 0;

//Define DOM variables
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("comp-score");

//Get the score board
let scoreBoard_div = document.querySelector(".scoreboard");
let results_p = document.querySelector(".results > p") 

//Put the rock paper and scissors buttons inside variables 
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");

// Write a function that generates the computers choices
function computerSelection () {
    let potentialChoices = ['r', 'p', 's'];
    let randomInt = Math.floor(Math.random() * potentialChoices.length);
    return potentialChoices[randomInt];
} 

//write a function that converts each letter to a word 
function wordConverter (letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

//Write a function that makes the buttons responsive when you click on it. The functions pass the value for the button div to a function.
function main () {
    rock_div.addEventListener('click', function () {
        game('r');
    })

    paper_div.addEventListener('click', function () {
        game('p');
    })

    scissors_div.addEventListener('click', function () {
        game('s');
    })
}

// Write a function that plays the game between the computer and user
function game (userChoice) {
    let computerChoice = computerSelection();
    switch (userChoice + computerChoice) {
        //Define the winning cases
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        
        //Define the losing cases
        case "ps":
        case "sr":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        
        //Define the draws
        case "pp":
        case "rr":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }

}

// Write functions that return a message if you win, lose, or draw.
function win (userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    let smallUserWord = "user".fontsize(3).sub();
    let smallCompWord = "comp".fontsize(3).sub();
    results_p.innerHTML = `${wordConverter(userChoice)}${smallUserWord} beats ${wordConverter(computerChoice)}${smallCompWord}. User Wins!!!`
    // This creates a green glow
    document.getElementById(userChoice).classList.add("green-glow");
    //This removes it after 300ms
    setTimeout(function () {document.getElementById(userChoice).classList.remove("green-glow")}, 300);
}

function lose (userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    let smallUserWord = "user".fontsize(3).sub();
    let smallCompWord = "comp".fontsize(3).sub();
    results_p.innerHTML = `${wordConverter(userChoice)}${smallUserWord} loses to ${wordConverter(computerChoice)}${smallCompWord}. You Lose :(`
    // This creates a red glow
    document.getElementById(userChoice).classList.add("red-glow");
    //This removes it after 300ms
    setTimeout(function () {document.getElementById(userChoice).classList.remove("red-glow")}, 300);
}

function draw (userChoice, computerChoice) {
    let smallUserWord = "user".fontsize(3).sub();
    let smallCompWord = "comp".fontsize(3).sub();
    results_p.innerHTML = `${wordConverter(userChoice)}${smallUserWord} equals ${wordConverter(computerChoice)}${smallCompWord}. It's a draw ~~~`
    // This creates a gray glow
    document.getElementById(userChoice).classList.add("gray-glow");
    //This removes it after 300ms
    setTimeout(function () {document.getElementById(userChoice).classList.remove("gray-glow")}, 300);
}

// call your main function
main();

// This function refreshes the page 
function refreshPage () {
    window.location.reload();
};