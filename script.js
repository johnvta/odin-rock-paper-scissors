// 
let playerScore = 0;
let computerScore = 0;
let winner = '';

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 1) {
    return 'Rock';
  } else if (random === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    winner = 'tie';
  }
  if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    playerScore++;
    winner = 'player';
  }
  if (
    (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
    (computerSelection === 'Paper' && playerSelection === 'Rock') ||
    (computerSelection === 'Scissors' && playerSelection === 'Paper')
  ) {
    computerScore++;
    winner = 'computer';
  }
  updateScoreMessage(winner, playerSelection, computerSelection);
  updatePlayerSelection(playerSelection);
  updateComputerSelection(computerSelection);
  updateScore();
}

// 
const btnRock = document.getElementById('btnRock')
const btnPaper = document.getElementById('btnPaper')
const btnScissors = document.getElementById('btnScissors')
btnRock.addEventListener('click', () => game('Rock'))
btnPaper.addEventListener('click', () => game('Paper'))
btnScissors.addEventListener('click', () => game('Scissors'))

function game(playerSelection) {
  if (playerScore === 5 || computerScore === 5) {
    openModal();
    return
  }
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);

  if (playerScore === 5 || computerScore === 5) {
    openModal();
  }
}

//
const playerWeapon = document.getElementById('playerWeapon');
const computerWeapon = document.getElementById('computerWeapon');
const playerScoreTracker = document.getElementById('playerScore');
const computerScoreTracker = document.getElementById('computerScore');
const scorePara = document.getElementById('scorePara');

function updatePlayerSelection (playerSelection) {
  if (playerSelection === 'Rock') {
    playerWeapon.textContent = 'ROCK';
    playerWeapon.style.color = '#778899'; 
  } else if (playerSelection === 'Paper') {
    playerWeapon.textContent = 'PAPER';
    playerWeapon.style.color = '#6495ED';
  } else {
    playerWeapon.textContent = 'SCISSORS';
    playerWeapon.style.color = '#0000FF';
  }
}

function updateComputerSelection (computerSelection) {
  if (computerSelection === 'Rock') {
    computerWeapon.textContent = 'ROCK';
    computerWeapon.style.color = '#778899'; 
  } else if (computerSelection === 'Paper') {
    computerWeapon.textContent = 'PAPER';
    computerWeapon.style.color = '#6495ED';
  } else {
    computerWeapon.textContent = 'SCISSORS';
    computerWeapon.style.color = '#0000FF';
  }
}

function updateScore() {
  playerScoreTracker.textContent = `Score: ${playerScore}`;
  computerScoreTracker.textContent = `Score: ${computerScore}`;
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === 'player') {
    scorePara.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`;
    scorePara.style.color = '#008000'
  } else if (winner === 'computer') {
    scorePara.textContent = `You Lose. ${computerSelection} beats ${playerSelection}.`;
    scorePara.style.color = '#FF0000';
  } else {
    scorePara.textContent = 'You Tied.' + ' Try again!';
    scorePara.style.color = '#808000';
  }
}

// 
const modal = document.getElementById('modal');
const modalHeader = document.getElementById('modalHeader');
const modalScore = document.getElementById('modalScore');
const modalOverlay = document.getElementById('modalOverlay');
const btnModal = document.getElementById('btnModal');

btnModal.addEventListener('click', playAgain);
modalOverlay.addEventListener('click', closeModal);

function openModal() {  
  modal.classList.add('toggle');
  modalOverlay.classList.add('toggle');
  modalPara();
}

function closeModal() {
  modal.classList.remove('toggle');
  modalOverlay.classList.remove('toggle');
}

function modalPara() {
  if (playerScore > computerScore) {
    modalHeader.textContent = 'You won!';
    modalHeader.style.color = '#008000';
    modalScore.textContent = `${playerScore} : ${computerScore}`;
  } else {
    modalHeader.textContent = 'You lost.';
    modalHeader.style.color = '#FF0000';
    modalScore.textContent = `${playerScore} : ${computerScore}`;
  }
}

function playAgain() {
  playerScore = 0;
  computerScore = 0;
  playerScoreTracker.textContent = 'Score: 0';
  computerScoreTracker.textContent = 'Score: 0';
  playerWeapon.textContent = '---';
  playerWeapon.style.color = '#FFFFFF'; 
  computerWeapon.textContent = '---';
  computerWeapon.style.color = '#FFFFFF';
  scorePara.textContent = ''; 
  modal.classList.remove('toggle');
  modalOverlay.classList.remove('toggle');
}