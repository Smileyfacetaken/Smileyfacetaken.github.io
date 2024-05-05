document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.choices button');
    var resultDiv = document.getElementById('result');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var playerChoice = this.id;
            var computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
            var result = '';

            if (playerChoice === computerChoice) {
                result = "It's a tie!";
            } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
                       (playerChoice === 'paper' && computerChoice === 'rock') ||
                       (playerChoice === 'scissors' && computerChoice === 'paper')) {
                result = "You win!";
            } else {
                result = "You lose!";
            }

            resultDiv.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
        });
    });
});
