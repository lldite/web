// compile me with `npx tsc -w index.ts` ("-w(atches)" / reacts to changes in this file)

const canvas: HTMLCanvasElement = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")

let draw: Boolean = false

document.addEventListener("mousedown", (e) => (draw = true))
document.addEventListener("mouseup", (e) => (draw = false))

document.addEventListener("mousemove", (event) => {
  ctx.fillStyle = "white"
  ctx.fillRect(0, 0, 300, 50)

  ctx.font = "48px serif"
  ctx.fillStyle = "black"
  ctx.fillText("" + event.offsetX + "x" + event.offsetY, 0, 40)

  if (draw) ctx?.fillRect(event.offsetX - 5, event.offsetY - 5, 10, 10) else {}
})
