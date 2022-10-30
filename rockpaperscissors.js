function computerPlay() {
    let computer = Math.floor(Math.random() * 3);
    if (computer == 0) {
        return 'Rock';
    } 
    else if (computer == 1) {
        return 'Paper';
    } 
    else if (computer == 2) {
        return 'Scissors';
    } 
 };

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return('Tie');
    } 
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper'){
        return('You Lose! Paper beats Rock');
    } 
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors'){
        return('You Lose! Scissors beats Paper');
    } 
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock'){
        return('You Lose! Rock beats Scissors');
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper'){
        return('You Win! Scissors beats Paper');
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock'){
        return('You Win! Paper beats Rock');
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors'){
        return('You Win! Rock beats Scissors');
    }
};

function game(){
    let player;
    let Computer = 0;
    let Human = 0;
    let gameOn;
    for(let i=0; i<5; i++){
        player = prompt('rock, paper, scissors?','');
        gameOn = playRound(player, computerPlay());
        if (gameOn.includes('Win')){
            Human = Human+1;
        }
        else if (gameOn.includes('Lose')){
            Computer = Computer+1;
        }
        console.log(gameOn);
    }
    if (Human > Computer){
        console.log('Human is the winner!');
    }
    else if (Computer > Human){
        console.log('Computer is the winner!');
    }
    else if (Computer == Human){
        console.log('It is a Tie!');
    }
}



game();


 