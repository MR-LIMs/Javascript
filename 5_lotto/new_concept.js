// method chaining : .을 이용해 method를 연속적으로 사용할 때
// 매개변수 (parameter) : 변수
// 인수(argument) : 실제 값

// fill method
const arr = Array(45).fill() // 45개의 칸을 배열로 형성한다.

// map method : 배열에 사용 가능
arr.map((a) => {return a * 10}) // 배열의 각 element(a)를 {}에 대한 명령을 수행한다. 
arr.map((v, i) => i + 1)        // v는 각 index에 대한 value, i는 index

// 함수 선언문
function add(a, b) {
  return a + b
}

// 화살표 함수 
// (유일한 명령이 return일 때, return과 {중괄호}는 생략 가능)
const add = (a, b) => {
  return a + b
}

// splice method : 배열에서 값을 추출 후 삭제
arr.splice(45, 1)     // [45], 배열에 담긴 채로 추출된다. -> 여러 개를 한번에 꺼낼 수 있기 때문이다.
arr.splice(44, 1)[0]  // 44, value만 추출된다.

// slice.method : 배열에서 값을 복사 후 return
const winBalls = arr.slice(0, 6); // 0 ~ 5번까지

// sort method
[30, 50, 40, 7].sort() // 사전식으로 정렬
[30, 50, 40, 7].sort((p, c) => p - c) // (current, previous)
                                      // p - c가 0보다 크면 (p, c) -> (c, p)

// 비동기 : 코드를 읽고 나중에 실행하는 것.
// 동기 : 코드를 읽음과 동시에 코드를 실행하는것.

// setTimeout method
setTimeout(() => {명령문}, 1000)  // 1초 뒤에 명령문을 실행하라.

// foreach vs map