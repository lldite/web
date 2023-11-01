const canvas: HTMLCanvasElement = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")

ctx?.fillRect(0, 0, 3000, 3000)

let color: string = "red"
let mouseDown: Boolean = false

canvas.addEventListener("mousemove", (event) => {
  ctx.fillStyle = color
  if (mouseDown) ctx?.fillRect(event.offsetX, event.offsetY, 10, 10)
})

addEventListener("mousedown", (event) => {
  mouseDown = true
  ctx?.fillRect(event.offsetX, event.offsetY, 10, 10)
})

addEventListener("mouseup", (event) => {
  mouseDown = false
})

document.querySelector(".tools")?.addEventListener("click", (event) => {
  color = (event.target as HTMLElement).dataset.color
})
