const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
    squares.forEach(square => {
      square.classList.remove('mole')
    })
  
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
  
    hitPosition = randomSquare.id
  }

  // LA GRILLE

squares.forEach(square => {
    square.addEventListener('mouseup', () => {
      if (square.id == hitPosition) {
        result++
        score.textContent = result
        hitPosition = null
      }
    })
  })

  // MOUVEMENT DE LA TAUPE

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 500)
  }
  
  moveMole()

  // LE CHRONOMETRE

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

}
let countDownTimerId = setInterval(countDown, 1000)