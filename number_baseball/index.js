// String() vs toString()
// toString()은 실행이 안되는 경우가 있어서 String()을 써준다.

// 문자열 내에 해당 문자가 있는지 찾기
// "문자열".indexOf("찾을 문자")

// 문자열 반복하기
// '*'.repeat(n)

// 무한 반복문을 사용하면 cpu를 100% 잡아먹는다.
// chrome의 작업관리자 => shift + esc

// 절대값 : Math.abs(n)

// array의 특정 index 지우기
// splice(idx, count)

// [] === [] false => 객체들은 서로 무조건 다르다.

// 문자열과 배열의 for문
// for (const number of numbers) => for ~ in ~ 과 비슷하다.

// log에 글자를 쌓는다.
// log.appendChild(document.createTextNode(''))

// for (const [idx, num] of array.entries())

// split('') / join('')

// 함수형 프로그래밍 : map
// let numbers = Array(10).fill().map((v, i) => i)

const start = document.querySelector('#start')
const guide = document.querySelector('#guide')
const input = document.querySelector('#input')
const check = document.querySelector('#check')
const userInput = document.querySelector('#user-input')
const log = document.querySelector('#log')
const suggestValue = document.querySelector('#suggestValue')


// const value = '1234' 
// '3046' === true => false

// if문 내에서 
// ''(empty string), 0, NaN, false, undefined, null, document.all 
// => false

// random number를 만들기
// Math.random() : 0~1 사이
// Math.random() * 10 0~10 사이
// Math.floor(Math.random() * 10) 내림

let value
let count

start.addEventListener('click', () => {
  count = 0
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let randomNum = []

  for (let i=0; i < 4; i++) {
    // random으로 나온 수가 굳이 string일 필요가 없다.
    randomNum.push(numbers.splice(Math.random() * 10 - i, 1))  
  }
  // value = randomNum[0] + randomNum[1] + randomNum[2] + randomNum[3] 
  value = randomNum.join('')  // 배열을 문자열로 바꾸기.
  suggestValue.textContent = `Value : ${value}`
})

guide.textContent = '숫자를 입력하세요'

check.addEventListener('click', () => {
  guide.textContent = '숫자를 입력하세요'
  let strike = 0
  let ball = 0
  if (input.value && (input.value.length == 4)) {
    for (let i = 0; i < 4; i++) {
      if (value.indexOf(input.value[i]) == i) {strike++} 
      else if (value.indexOf(input.value[i]) != -1) {ball++}
    }
    count = count + 1
    // userInput.textContent = input.value
    userInput.appendChild(document.createTextNode(input.value + '\n'))
    // log.textContent = `${count}회. ${strike}strike ${ball}ball`
    log.appendChild(document.createTextNode(`${count}회. ${strike}strike ${ball}ball`))
    log.appendChild(document.createElement('br'))
    // log.append(`${count}회. ${strike}strike ${ball}ball`, document.createElement('br'))
    if (strike == 4) {
      guide.textContent = 'YOU WIN'
      count = 0
      strike = 0
      ball = 0
      return null
    }
  } else {
      guide.textContent = '숫자를 4개 입력하세요'
  }
  if (count == 10) {
    guide.textContent = `YOU LOSE, value is ${value}`
    count = 0
    strike = 0
    ball = 0
  }
})