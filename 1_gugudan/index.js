// 첫번째 칸 입력
// 두번째 칸 입력
// 버튼 클릭
// -
// 첫번째 칸 입력 완료?   -> 입력해달라고 한다
// 숫자인가?             -> 숫자 입력해달라고 한다
// 두번째 칸 입력 완료?   -> 입력해달라고 한다
// 숫자인가?             -> 숫자 입력해달라고 한다
// -
// 첫번째 칸 값 가져오기
// 두번째 칸 값 가져오기
// 연산하기
// -
// 값 출력

// console.log('hello. JS');
// alert("Gugudan");
// document.write('Gugudan')

// document.querySelector('#run').addEventListener('click', () => {
//   const a = document.querySelector('#first').value // id가 #first인 퀴리를 선택하고 value를 가져온다.
//   const b = document.querySelector('#second').value // id가 #second인 쿼리를 선택하고 value를 가져온다.
  
//   if (a) {
//     if (b) {
//       document.querySelector('#result').textContent = a*b
//     } else {
//       document.querySelector('#result').textContent = '두 번쨰 값을 입력해주세요.'
//     }
//   } else {
//     document.querySelector('#result').textContent = '첫 번째 값을 입력해주세요.'
//   }
// });

const input_first = document.querySelector('#first')
const input_second = document.querySelector('#second')
const result = document.querySelector('#result')

result.textContent ='숫자를 입력해주세요.'

// #run 쿼리에서 click이벤트가 일어나면 ()=>{}를 동작하게 해라.
document.querySelector('#run').addEventListener('click', ()=>{
  const val1 = input_first.value
  const val2 = input_second.value

  if (val1) {
    if (val2) {
      result.textContent = val1 * val2
    } else {
      result.textContent = '두 번째 값을 입력하세요.'
    }
  } else {
    result.textContent = '첫 번째 값을 입력하세요.'
  }
})