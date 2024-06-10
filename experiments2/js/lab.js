// index.js - conditionals
// Author: Jorge L. Garcia
// Date:05/22/2024
// 
// credit to ChatGPT

document.addEventListener("DOMContentLoaded", function() {
    const choices = ["rock", "paper", "scissors"];
    const startButton = document.getElementById("start");
    const countdownDiv = document.getElementById("countdown");
    const userChoiceInput = document.getElementById("userChoice");
    const resultDiv = document.getElementById("result");
    const videos = {
        rock: document.getElementById("rockVideo"),
        paper: document.getElementById("paperVideo"),
        scissors: document.getElementById("scissorsVideo")
    };

    let countdownTimer;

    startButton.addEventListener("click", () => {
        startCountdown();
    });

    function startCountdown() {
        let timeLeft = 8;
        userChoiceInput.value = '';
        userChoiceInput.disabled = false;
        countdownDiv.textContent = `Time left: ${timeLeft}s`;
        
        countdownTimer = setInterval(() => {
            timeLeft -= 1;
            countdownDiv.textContent = `Time left: ${timeLeft}s`;
            
            if (timeLeft <= 0) {
                clearInterval(countdownTimer);
                userChoiceInput.disabled = true;
                playGame();
            }
        }, 1000);
    }

    function playGame() {
        const userChoice = userChoiceInput.value.trim().toLowerCase();
        if (!choices.includes(userChoice)) {
            resultDiv.textContent = "Invalid choice! Please enter rock, paper, or scissors.";
            return;
        }
        
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const winner = determineWinner(userChoice, computerChoice);
        displayResult(winner, userChoice, computerChoice);
        playVideo(winner === "user" ? userChoice : winner === "computer" ? computerChoice : null);
    }

    function determineWinner(user, computer) {
        if (user === computer) return "draw";
        if ((user === "rock" && computer === "scissors") ||
            (user === "paper" && computer === "rock") ||
            (user === "scissors" && computer === "paper")) {
            return "user";
        } else {
            return "computer";
        }
    }

    function displayResult(winner, userChoice, computerChoice) {
        if (winner === "draw") {
            resultDiv.textContent = `It's a draw! You both chose ${userChoice}.`;
        } else if (winner === "user") {
            resultDiv.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
        } else {
            resultDiv.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
        }
    }

    function playVideo(choice) {
        // Stop all videos first
        Object.values(videos).forEach(video => {
            video.pause();
            video.currentTime = 0;
            video.style.display = "none";
        });
        // Play the selected video if there is a choice
        if (choice) {
            videos[choice].style.display = "block";
            videos[choice].play();
        }
    }
});
