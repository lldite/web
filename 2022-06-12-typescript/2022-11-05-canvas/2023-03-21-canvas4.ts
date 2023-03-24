// compile me with `npx tsc -w index.ts` ("-w(atches)" / reacts to changes in this file)

const canvas: HTMLCanvasElement = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")

function moveKubik(): void {
  let size: number = 50
  let diff: number = 0 // planning to add this to size after "clear"
  let step: number = 1
  let position = [300, 300]
  let direction = [step, 0]
  let color = "#fc03d3" //pink

  setInterval(() => {
    ctx.fillStyle = "white"
    ctx?.fillRect(position[0], position[1], size, size)

    size = size + diff
    diff = 0
    position = [position[0] + direction[0], position[1] + direction[1]]

    ctx.fillStyle = color
    ctx?.fillRect(position[0], position[1], size, size)
  }, 50)

  addEventListener("keydown", (event) => {
    if (event.key == "w") (direction = [0, -step]), (color = "#fc03d3")
    if (event.key == "s") (direction = [0, step]), (color = "#fc03d3")
    if (event.key == "a") (direction = [-step, 0]), (color = "#fc03d3")
    if (event.key == "d") (direction = [step, 0]), (color = "#fc03d3")
    if (event.key == " ") (direction = [0, 0]), (color = "red")
    if (event.key == "]") step = step + 1
    if (event.key == "[") step = step - 1
    if (event.key == ".") diff = diff + 1
    if (event.key == ",") diff = diff - 1
  })
}
//moveKubik()

function moveKubikiThree(): void {
  let size: number = 50
  let step: number = 1
  let direction = [step, 0]
  let position = [300, 300]

  setInterval(() => {
    ctx.fillStyle = "white"
    ctx?.fillRect(position[0], position[1], size, size)
    ctx.fillStyle = "white"
    ctx?.fillRect(position[0] * 2, position[1] * 2, size - 10, size - 10)
    ctx.fillStyle = "white"
    ctx?.fillRect(position[0] * 4, position[1] * 4, size - 20, size - 20)

    position = [position[0] + direction[0], position[1] + direction[1]]

    ctx.fillStyle = "black"
    ctx?.fillRect(position[0], position[1], size, size)
    ctx.fillStyle = "grey"
    ctx?.fillRect(position[0] * 2, position[1] * 2, size - 10, size - 10)
    ctx.fillStyle = "#d3dde6"
    ctx?.fillRect(position[0] * 4, position[1] * 4, size - 20, size - 20)
  }, 100)

  addEventListener("keydown", (event) => {
    if (event.key == "w") direction = [0, -step]
    if (event.key == "s") direction = [0, step]
    if (event.key == "a") direction = [-step, 0]
    if (event.key == "d") direction = [step, 0]
    if (event.key == " ") direction = [0, 0]
  })
}
// moveKubikiThree()

function moveKubikiArray(): void {
  let size: number = 50
  let step: number = 1
  let direction = [step, 0]
  let positionS: Array<[number, number]> = [
    [100, 100],
    [200, 200],
  ]

  setInterval(() => {
    positionS.forEach((position) => {
      ctx.fillStyle = "white"
      ctx?.fillRect(position[0], position[1], size, size)

      position[0] = position[0] + direction[0]
      position[1] = position[1] + direction[1]

      ctx.fillStyle = "black"
      ctx?.fillRect(position[0], position[1], size, size)
    })
  }, 10)

  addEventListener("keydown", (event) => {
    if (event.key == "w") direction = [0, -step]
    if (event.key == "s") direction = [0, step]
    if (event.key == "a") direction = [-step, 0]
    if (event.key == "d") direction = [step, 0]
    if (event.key == " ") direction = [0, 0]
    if (event.key == "Enter") positionS.push([0, 0])
  })
}
moveKubikiArray()
