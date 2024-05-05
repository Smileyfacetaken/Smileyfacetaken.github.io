function playerChoice(choice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    
    var result = '';
    
    if (choice === computerChoice) {
        result = "It's a tie!";
    } else if ((choice === 'rock' && computerChoice === 'scissors') ||
               (choice === 'paper' && computerChoice === 'rock') ||
               (choice === 'scissors' && computerChoice === 'paper')) {
        result = "You win!";
    } else {
        result = "You lose!";
    }
    
    document.getElementById('result').innerHTML = `You chose ${choice}. Computer chose ${computerChoice}. ${result}`;
}
