// 파란 글자 => 함수
// document는 html
// html에서 .check-word라는 클래스를 가진 객체의 주소를 btn에 저장한다.
const btn = document.querySelector('.check-word')
const guide = document.querySelector('.guide')
const pst = document.querySelector('.presenter')
const input = document.querySelector('.input')

guide.textContent = '단어를 입력하세요.'

btn.addEventListener('click', () => { // () => {} 함수를 의미
  // const라서 값을 변경할 수 없지만, 지역 scope이기 때문에,
  // 함수가 끝남과 동시에 사라진다.
  const pstText = pst.textContent
  const inputText = input.value

  if (inputText) {
    // javascript의 문자열 슬라이싱에서는 [-1]이 안된다.
    if (inputText[0] == pstText[pstText.length - 1]){
      pst.textContent = inputText
      input.value = null
      input.focus() 
      // 입력을 누른 뒤에도 마우스 커서가 자동으로 input창에
      guide.textContent = '정답, 다음 단어를 입력하세요.'
    } else {
      guide.textContent = '땡, 단어를 다시 입력하세요.'
    }
  } else {
    guide.textContent = '단어를 꼭 입력하세요.'
  }
})

// btn.addEventListener('keypress', () = > {]) 
// : 키보드 이벤트에 대한 함수 

// getter와 setter?