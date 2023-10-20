// Possible picks for the user and the AI
const picks = ["rock", "scizor", "paper", "lizard", "spock"];
let userScore = 0;
let aiScore = 0;

// Functionality for AI pick
function aiPick() {
    const randomPick = Math.floor(Math.random() * picks.length);
    return picks[randomPick];
}

// Rules of the game itself
const rules = {
    rock: ["scizor", "lizard"],
    scizor: ["paper", "lizard"],
    paper: ["rock", "spock"],
    lizard: ["spock", "paper"],
    spock: ["scizor", "rock"],
};

// Event listener for click on the potential picks
const buttons = document.querySelectorAll('.buttons');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userPick = button.getAttribute('data-type');
        const aiPick = aiPick();
        const result = decideWinner(userPick, aiPick);
        updateScore(result);
        showResults(userPick, aiPick, result);
    });
});