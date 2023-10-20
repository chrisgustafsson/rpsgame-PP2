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
        return "user";
    } else {
        return "ai";
    }
}

// Functionality for updating scores seen below game area
function updateScore(result) {
    if (result === "user") {
        userScore++;
    } else if (result === "ai") {
        aiScore++;
    }

    const wins = document.querySelector('.wins');
    const losses = document.querySelector('.losses');
    wins.textContent = userScore;
    losses.textContent = aiScore;
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