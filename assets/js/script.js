// Possible picks for the user and the AI
const picks = ["rock", "scizor", "paper", "lizard", "spock"];
let userScore = 0;
let aiScore = 0;

// Functionality for AI pick
function generateAiPick() {
    const randomPick = Math.floor(Math.random() * picks.length);
    return picks[randomPick];
}

// Functionality for deciding the winner
function decideWinner(userPick, aiPick) {
    if (userPick === aiPick) {
        return "tie";
    }

    // Rules of the game itself, first item beats the contained items
    const rules = {
        rock: ["scizor", "lizard"],
        scizor: ["paper", "lizard"],
        paper: ["rock", "spock"],
        lizard: ["spock", "paper"],
        spock: ["scizor", "rock"],
    };

    if (rules[userPick].includes(aiPick)) {
        return "you";
    } else {
        return "ai";
    }
}

// Functionality for updating scores seen below game area
function updateScore(result) {
    if (result === "you") {
        userScore++;
    } else if (result === "ai") {
        aiScore++;
    }

    const wins = document.querySelector('.wins');
    const losses = document.querySelector('.losses');
    wins.textContent = userScore;
    losses.textContent = aiScore;
}

// Functionality for displaying the results with a hidden object
function showResults(userPick, aiPick, result) {
    const resultsText = document.querySelector('#results-text');
    resultsText.textContent = `You picked ${userPick}, AI picked ${aiPick}. ${result.toUpperCase()} won!`;

    const results = document.querySelector('.results');
    results.style.display = 'block';

    // Timeout functionality to show the results for a certain amount of time
    setTimeout(() => {
        results.style.display = 'none';
    }, 5000);
}

// Event listener for click on the potential picks
const buttons = document.querySelectorAll('.buttons');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userPick = button.getAttribute('data-type');
        const aiPick = generateAiPick();
        const result = decideWinner(userPick, aiPick);
        updateScore(result);
        showResults(userPick, aiPick, result);
    });
});