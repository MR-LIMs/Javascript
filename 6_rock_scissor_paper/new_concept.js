// 객체 사용하기

const rspCoord = {
  rock: '-8px'
  scissors: '-142px'
  paper: '-284px'
}

const rsp = 'rock'
rspCoord['rock']
rspCoord[rsp]

rspCoord.rock 
// rspCoord.rsp XXXXXXXXX



//let ms = 0

// while(true) {
//   if (ms % 3000 === 1) {coord = '-135px'}
//   else if (ms % 3000 === 2) {coord = '-285px'}
//   else {coord = '-8px'}

//   setTimeout(() => {
//     computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${coord} -30px`
//   }, ms)

//   ms += 1000
// }
