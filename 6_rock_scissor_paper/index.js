function rspToNum(rsp) {
  if ('rock' === rsp) return 1
  else if ('scissors' === rsp) return 0
  else if ('paper' === rsp) return -1
}

// 1: com, 2: user
function judgeWin(rspNum1, rspNum2, rspSequence, scoreBoard) {
  if (rspNum1 - rspNum2 === 0) {
    scoreBoard.textContent = `You draw, your score is `
  } 
  else if (rspNum1 - rspNum2 === -1 || rspNum1 - rspNum2 === 2) {
    scoreBoard.textContent = `You Win, your score is `
    score++
  } 
  else if (rspNum1 - rspNum2 === 1 || rspNum1 - rspNum2 === -2) {
    scoreBoard.textContent = `You Lose, your score is `
    score--
  }
}

const clickButton = (userChoice) => {
  return () => {
    clearInterval(rspSequence)
    
    let comVal = rspToNum(computerChoice)
    let userVal = rspToNum(userChoice)
  
    judgeWin(comVal, userVal, rspSequence, scoreBoard)

    scoreBoard.appendChild(document.createTextNode(`${score}`))
  }
}

let Interval = () => {
  return () => {
    rspSequence = setInterval(() => {
      computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${coord[idx]} -30px`
    
      computerChoice = rsp[idx]
    
      if(idx == 2) idx = 0
      else idx++
    
    }, 50)    
  }
}

// Tag
const computerTag = document.querySelector('#computer')
const startBtn = document.querySelector('#start-btn')
const scoreBoard = document.querySelector('#score-board')
const btn = document.querySelectorAll('.btn')
const rockTag = btn[0]
const scissorsTag = btn[1]
const paperTag = btn[2]

// Com, User Rsp
let computerChoice
let userChoice
let score = 0

// img Coord of Rsp
const rspCoord = {
  rock: '-4px',
  scissors: '-136px',
  paper: '-284px',
}

const coord = Object.values(rspCoord)
const rsp = Object.keys(rspCoord)
let idx = 0

startBtn.addEventListener('click', Interval())

rockTag.addEventListener('click', clickButton('rock'))
scissorsTag.addEventListener('click', clickButton('scissors'))
paperTag.addEventListener('click', clickButton('paper'))  
