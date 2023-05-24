// compile me with `npx tsc -w index.ts` ("-w(atches)" / reacts to changes in this file)

const canvas: HTMLCanvasElement = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")

let cubeSize: number = 30
let koordX: number = 0
let koordY: number = 0
let snakeKoord: [number, number] = [koordX, koordY]
let snakeSegments: Array<[number, number]> = [snakeKoord]

setInterval(() => {
  ctx.fillStyle = "white"
  ctx?.fillRect(snakeKoord[0], snakeKoord[1], cubeSize, cubeSize)
  snakeKoord = [snakeKoord[0] + 1, snakeKoord[1]]
  snakeSegments.forEach((segment) => {
    ctx.fillStyle = "green"
    ctx.fillRect(snakeKoord[0], snakeKoord[1], cubeSize, cubeSize)
  })
  //   snakeSegments.push([koordX + cubeSize, koordY])
  //   snakeSegments.push([koordX + cubeSize * snakeSegments.length, koordY])

  //   ctx.fillStyle = "pink"
  //   ctx.fillRect(snakeSegments[0][0], snakeSegments[0][1], cubeSize, cubeSize)
}, 100)

// function drawSnake(): void {
//   snakeSegments.forEach((segment) => {
//     ctx.fillStyle = "green"
//     ctx.fillRect(segment[0], segment[1], cubeSize, cubeSize)
//   })
// }

// function makeSnakeLonger(): void {
//   snakeSegments.push([koordX + cubeSize /** snakeSegments.length */, koordY])
// }

// function makeSnakeShorter(): void {
//   snakeSegments.splice(0, 1)
// }

// setInterval(() => {
//   drawSnake()
//   makeSnakeLonger()
//   makeSnakeShorter()
// }, 1000)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let koord = [0, 0]
// setInterval(() => {
//   ctx.fillStyle = "white"
//   ctx?.fillRect(koord[0], koord[1], 50, 50)
//   koord = [koord[0] + 1, koord[1]]
//   ctx.fillStyle = "black"
//   ctx.fillRect(koord[0], koord[1], 50, 50)
// }, 100)

// let step = 0
// setInterval(() => {
//   ctx.fillStyle = "white"
//   ctx?.fillRect(step, 0, 50, 50)
//   step = step + 1
//   ctx.fillStyle = "#b591a3"
//   ctx?.fillRect(step, 0, 50, 50)
// }, 500)
