// start as soon as the document loads
(function playerMove () {
    // grab buttons and attach event listeners to them
    buttons = document.querySelectorAll('img')

    //
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            let playerChoice = ("" + e.target.alt) // get player move - ie. button id as a string
            let computerChoice = computerMove() // get computer move - randomly generated from a list
            displayMove(playerChoice, computerChoice)
            winChecker(playerChoice, computerChoice) // check who wins

        })
    })
})()
function displayMove (pc, cc) {
    let div = document.createElement('div')
    let container = document.querySelector('#display-move')
    // div.setAttribute('id', 'move')
    console.log('player used ' + pc,'computer used ' + cc)
    div.textContent = `player used ${pc}, computer used ${cc}`
    container.appendChild(div);
}

function computerMove() {
    let computerOptions = ['scissors', 'rock', 'paper']
    let randomVal = Math.floor(Math.random() * computerOptions.length)
    let computerChoice = computerOptions[randomVal]

    return computerChoice
}

function winChecker (playerChoice, computerChoice) {
    // switch statments
    switch (computerChoice) {
        case "rock":
            //console.log('computer used rock')

            if (playerChoice === 'rock') {
                console.log('draw')
                updateScore('tie')
            } else if (playerChoice === 'paper') {
                console.log('player wins')
                updateScore('win')
            } else if (playerChoice === 'scissors') {
                console.log('computer wins')
                updateScore('loss')
            }

            break;
        case "paper":
            //console.log('computer used paper')

            if (playerChoice === 'rock') {
                console.log('computer wins')
                updateScore('loss')
            } else if (playerChoice === 'paper') {
                console.log('draw')
                updateScore('tie')
            } else if (playerChoice === 'scissors') {
                console.log('player wins')
                updateScore('win')
            }

            break;
        case "scissors":
            //console.log('computer used scissors')

            if (playerChoice === 'rock') {
                console.log('player wins')
                updateScore('win')
            } else if (playerChoice === 'paper') {
                console.log('computer wins')
                updateScore('loss')
            } else if (playerChoice === 'scissors') {
                console.log('draw')
                updateScore('tie')
            }
            break;
        default:
            console.log('how did you break me?')
    }
}

(function initalizeScore () {
    let div = document.createElement('div')
    let container = document.querySelector('#score-board')
    div.setAttribute('id', 'score')
    div.textContent = 0
    container.appendChild(div);
})()

function updateScore(result) {
    let score = (document.getElementById('score').textContent) * 1 // converts to int
    if (result === 'win') {
            scoreUpdate = score + 1
            renderScoreBoard(scoreUpdate)
    } else if (result === 'loss') {
            scoreUpdate = score - 1
            renderScoreBoard(scoreUpdate)
    } else if (result === 'tie') {
            scoreUpdate = score + 0
            renderScoreBoard(scoreUpdate)
    }
}
function renderScoreBoard (score) {
    let newScore = document.getElementById('score')
    if (score >= 5) { // win at 5 points
        alert("you won! Congrats :D")
        newScore.textContent = 'you won! Congrats :D'
        location.reload() // reloads page
    } else if (score <= -5) { // lose at -5 points
        newScore.textContent = 'You died. Try again?'
        alert('You died. Try again?')
        location.reload() // reloads page

    } else {
        newScore.textContent = score
    }
}