const canvas: HTMLCanvasElement = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")

addEventListener("mousemove", (event) => {
  ctx.fillStyle = "white"
  ctx?.fillRect(event.offsetX, event.offsetY, 10, 10)
})
