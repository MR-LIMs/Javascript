// input
const input = document.querySelector('.input') // value
const clear = document.querySelector('.clear') // executant

// operators
const plus = document.querySelector('.plus')
const minus= document.querySelector('.minus')
const divide= document.querySelector('.divide')
const multiply = document.querySelector('.multiply')

// process / result
const reset = document.querySelector('.reset') // excutant
const result = document.querySelector('.result') // value
const calculate = document.querySelector('.calculate') // excutants 실행자

function cal(tempValue, operator, inputValue) {
  let result
  if (operator == '+') {
    result = tempValue + inputValue
  } else if (operator == '-'){
    result = tempValue - inputValue
  } else if (operator == 'x'){
    result = tempValue * inputValue
  } else if (operator == '/'){
    result = tempValue / inputValue
  }
  return result
}

let tempValue
let operator
let process = ''

plus.addEventListener('click', () => {
  // input type="number" 이라도 문자열로 인식된다.
  // 따라서, 형변환(casting)이 필요하다.
  // Number()
  let inputValue = Number(input.value)
  input.value = null
  input.focus()
  if (inputValue){
    if (tempValue) {
      tempValue = cal(tempValue, operator, inputValue)
      operator = '+'
      process = process +` ${inputValue} ${operator}`
      result.textContent = process
    } else {
      tempValue = inputValue
      operator = '+'
      process = process +` ${inputValue} ${operator}`
      result.textContent = process
    }
  } else {
    if (tempValue) {
      operator = '+'
      process = process.slice(0, process.length - 1) + operator 
      result.textContent = process
    }
  }
})

minus.addEventListener('click', () => {
  let inputValue = Number(input.value)
  input.value = null
  if (inputValue){
    if (tempValue) {
      tempValue = cal(tempValue, operator, inputValue)
      operator = '-'
      process = process +` ${inputValue} ${operator}`
      result.textContent = process
    } else {
      tempValue = inputValue
      operator = '-'
      result.textContent=`${tempValue} ${operator}`
    }
  } else {
    if (tempValue) {
      operator = '-'
      process = process.slice(0, process.length - 1) + operator 
      result.textContent = process
    }
  }
})

divide.addEventListener('click', () => {
  let inputValue = Number(input.value)
  input.value = null
  if (inputValue){
    if (tempValue) {
      tempValue = cal(tempValue, operator, inputValue)
      operator = '/'
      process = process +` ${inputValue} ${operator}`
      result.textContent = process
    } else {
      tempValue = inputValue
      operator = '/'
      process = process +` ${inputValue} ${operator}`
      result.textContent = process
    }
  } else {
    if (tempValue) {
      operator = '/'
      process = process.slice(0, process.length - 1) + operator 
      result.textContent = process
    }
  }
})

multiply.addEventListener('click', () => {
  let inputValue = Number(input.value)
  input.value = null
  if (inputValue){
    if (tempValue) {
      tempValue = cal(tempValue, operator, inputValue)
      operator = 'x'
      process = process +` ${inputValue} ${operator}`
      result.textContent = process
    } else {
      tempValue = inputValue
      operator = 'x'
      process = process +` ${inputValue} ${operator}`
      result.textContent = process
    }
  } else {
    if (tempValue) {
      operator = 'x'
      process = process.slice(0, process.length - 1) + operator
      result.textContent = process
    }
  }
})

clear.addEventListener('click', () => {
  input.value = null
})

reset.addEventListener('click', () => {
  input.value = null
  tempValue = null
  operator = null
  process = null
  result.textContent=`${tempValue} ${operator}`
})

calculate.addEventListener('click', () => {
  let inputValue = Number(input.value)
  if (operator) {
    if(inputValue) {
      tempValue = cal(tempValue, operator, inputValue)
      process = process +` ${inputValue} ${operator}`
    }
    result.textContent=`${tempValue}`
  }
})

