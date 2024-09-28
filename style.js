
let randomNumber = Math.floor(Math.random() * 30) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    let message = document.getElementById('message');
    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the right number ${randomNumber} correctly in ${attempts} attempts.`;
        message.style.color = "blue";
    } else if (userGuess > randomNumber) {
        message.textContent = `Too High! Try Again!`;
        message.style.color = "red";
    } else if (userGuess < randomNumber) {
        message.textContent = `Too Low! Try Again!`;
        message.style.color = "red";
    }

    document.getElementById('Attempts').textContent = `Attempts: ${attempts}`; 
}

function resetGames() {
    randomNumber = Math.floor(Math.random() * 30) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = "";
    document.getElementById('message').textContent = "";
    document.getElementById('Attempts').textContent = `Attempts: 0`; 
}
