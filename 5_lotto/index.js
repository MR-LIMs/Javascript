// 랜덤으로 하나 뽑기 -> 뽑은 수 삭제 -> 랜덤으로 하나 뽑기 -> 뽑은 수 삭제...
// 랜덤으로 섞기 -> 뽑고 삭제 -> 뽑고 삭제 -> ... 

const start = document.querySelector('#start')

let count = 0

start.addEventListener('click', () => {
  console.log(count)
  if(count != 0){
    let ballsParent = document.getElementById("result")
    while (ballsParent.firstChild) {
      ballsParent.removeChild(ballsParent.firstChild)
    }

    let bonusBall = document.getElementsByClassName("ball")
    bonusBall.item(0).remove("ball")
    // bonusParent.item(0).removeChild(bonusParent.firstChild)
  }

  // 피셔-예이츠
  const candidate = Array(45).fill().map((v, i) => i + 1) // 1 ~ 45까지의 숫자 배열
  const shuffle = []
  
  while (candidate.length) {
    const idx = Math.floor(Math.random() * candidate.length)
    const value = candidate.splice(idx, 1)[0]
    shuffle.push(value)
  }
  
  const winBalls = shuffle.slice(0, 6); // 0 ~ 5번까지
  const bonus = shuffle[6] // 6번
  
  const resultTag = document.querySelector('#result')
  for (let i = 0; i < 6; i++) { // closer problem는 let으로 해결
    let start = new Date()
    setTimeout(() => {
      const ball = document.createElement('div')  // div tag 새로 선언
      ball.className = 'ball' // div의 class는 'ball'
      ball.style.backgroundColor = 'red'
      ball.textContent = winBalls[i]  // div의 textContent는 숫자
      resultTag.appendChild(ball);  
      let end = new Date()
      console.log(end, start, end - start)
    }, 1000*(i + 1))
  }
  
  const bonusTag = document.querySelector('.bonus')
  setTimeout(() => {
    const bonusBall = document.createElement('div')
    bonusBall.className = 'ball'
    bonusBall.style.backgroundColor = 'orange'
    bonusBall.textContent = bonus
    bonusTag.appendChild(bonusBall);  
  }, 7000)
  
  count++
})

