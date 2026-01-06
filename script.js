            // Get result paragraph
const ans = document.getElementById("ans");

// Generate computer choice
function computerChoice() {
    return Math.floor(Math.random() * 3);
}

// Rock
function r() {
    let a = computerChoice();

    if (a === 0) {
        ans.innerHTML = "It's a tie <br> Computer chose Rock";
    } else if (a === 1) {
        ans.innerHTML = "You lose <br> Computer chose Paper";
    } else {
        ans.innerHTML = "You win <br> Computer chose Scissor";
    }
}

// Paper
function p() {
    let a = computerChoice();

    if (a === 0) {
        ans.innerHTML = "You win <br> Computer chose Rock";
    } else if (a === 1) {
        ans.innerHTML = "It's a tie <br> Computer chose Paper";
    } else {
        ans.innerHTML = "You lose <br> Computer chose Scissor";
    }
}

// Scissor
function s() {
    let a = computerChoice();

    if (a === 0) {
        ans.innerHTML = "You lose <br> Computer chose Rock";
    } else if (a === 1) {
        ans.innerHTML = "You win <br> Computer chose Paper";
    } else {
        ans.innerHTML = "It's a tie <br> Computer chose Scissor";
    }
}
