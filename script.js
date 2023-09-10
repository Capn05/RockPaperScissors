function getComputerChoice(){
    let options = ["rock","paper","scissors"];
    return options[Math.floor(Math.random()*3)]
}


function oneRound(computerSelection, playerSelection){
    if (computerSelection == "rock"){
        if ( playerSelection == "paper"){
            return "You Win"
        }else if (playerSelection == "rock"){
            return "It's a Tie"
        }else if (playerSelection == "scissors"){
            return "You Lose"
        }
    }else if(computerSelection == "paper"){
        if ( playerSelection == "paper"){
            return "It's a Tie"
        }else if (playerSelection == "rock"){
            return "You Lose"
        }else if (playerSelection == "scissors"){
            return "You Win"
        }
    }else if(computerSelection == "scissors"){
        if ( playerSelection == "paper"){
            return "You Lose"
        }else if (playerSelection == "rock"){
            return "You Win"
        }else if (playerSelection == "scissors"){
            return "It's a Tie"
        }
}
}
function game(){
    let winCount = 0;
    for (let i = 0; i<5; i++){
        let playerSelection = prompt("Rock,paper, or scissors?");
        result = oneRound(getComputerChoice(), playerSelection.toLowerCase())
        console.log(result);
        if (result == "You Win"){
            winCount++
        }
    
        
    }
    console.log(winCount);
}
game();