// Possible picks for the user and the AI
const picks = ["rock", "scizor", "paper", "lizard", "spock"];
let userScore = 0;
let aiScore = 0;

// Rules of the game itself
const rules = {
    rock: ["scizor", "lizard"],
    scizor: ["paper", "lizard"],
    paper: ["rock", "spock"],
    lizard: ["spock", "paper"],
    spock: ["scizor", "rock"],
};