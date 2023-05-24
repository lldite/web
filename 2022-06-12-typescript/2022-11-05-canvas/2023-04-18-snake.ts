// compile me with `npx tsc -w index.ts` ("-w(atches)" / reacts to changes in this file)

const canvas: HTMLCanvasElement = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")

let gameEnded: Boolean = false
let snakeX: number = 0
let snakeY: number = 0
let snakeSegments: Array<[number, number]> = [[snakeX, snakeY]]
let snakeLength: number = 1
let directionX: number = 1
let directionY: number = 0
let food: Array<number> = []

function moveSnake() {
  snakeSegments.unshift([snakeX, snakeY])
  snakeX += directionX
  snakeY += directionY
  while (snakeSegments.length > snakeLength) {
    snakeSegments.pop()
  }
}
// The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array.

function drawSnake() {
  ctx.fillStyle = "#eee"
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = "black"
  for (let i = 0; i < snakeSegments.length; i++) {
    ctx.fillRect(snakeSegments[i][0], snakeSegments[i][1], 20, 20)
  }
}

function gameLoop() {
  setInterval(() => {
    moveSnake()
    drawSnake()
  }, 10)
}
gameLoop()

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37: // Left arrow
      directionX = -1
      directionY = 0
      break
    case 38: // Up arrow
      directionX = 0
      directionY = -1
      break
    case 39: // Right arrow
      directionX = 1
      directionY = 0
      break
    case 40: // Down arrow
      directionX = 0
      directionY = 1
      break
    case 32: // Stop
      directionX = 0
      directionY = 0
      break
  }
}

// document.addEventListener("keydown", (event) => {
//   switch (event) {
//     case event.key == "a":
//       directionX = -1
//       directionY = 0
//       break
//     case event.key == "w":
//       directionX = 0
//       directionY = -1
//       break
//     case event.key == "d":
//       directionX = 1
//       directionY = 0
//       break
//     case event.key == "s":
//       directionX = 0
//       directionY = 1
//       break
//   }
// })

// addEventListener("mousedown", (event) => {
//   console.log("click")
// })

// let cubesKoord: Array<[number, number]> = [
//   [1, 1],
//   [2, 2],
//   [3, 3],
// ]

// setInterval(() => {
//   ctx.fillStyle = "white"
//   ctx.fillRect(0, 0, 3000, 3000)
//   ctx.fillStyle = "black"
//   cubesKoord.forEach((koord) => {
//     ctx.fillRect(koord[0] * 50, koord[1] * 50, 50, 50)
//   })
//   cubesKoord.splice(0, 1)
//   cubesKoord.push([
//     cubesKoord[cubesKoord.length - 1][0] + 1,
//     cubesKoord[cubesKoord.length - 1][1] + 1,
//   ])

//   console.log("kaut ko city")
// }, 100)

// let koord: Array<[number, number]> = [
//   [0, 0],
//   [50, 0],
//   [100, 0],
// ]

// setInterval(() => {
//   ctx.fillStyle = "white"
//   ctx.fillRect(0, 0, 3000, 3000)
//   koord.forEach((k) => {
//     ctx.fillStyle = "black"
//     ctx.fillRect(k[0], k[1], 50, 50)
//   })

//   koord.splice(0, 1)
//   koord.push([koord[koord.length - 1][0] + 60, koord[koord.length - 1][1]])
// }, 300)
