// compile me with `npx tsc -w index.ts` ("-w(atches)" / reacts to changes in this file)

const canvas: HTMLCanvasElement = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")

// ctx.fillStyle = "red";
// ctx?.fillRect(10, 10, 50, 50);
// ctx.fillStyle = "black";
// ctx?.fillRect(100, 100, 100, 100);

function diagonal(size: number, count: number): void {
  ctx.fillStyle = "#b591b1"
  for (let i = 0; i < count; i++) {
    ctx?.fillRect(size * i, size * i, size, size)
  }
}
//diagonal(10, 10);

function diagonalGetBigger(size: number, count: number): void {
  ctx.fillStyle = "#b591b1"
  for (let i = 1; i <= count; i++) {
    ctx?.fillRect(
      size * ((i * (i - 1)) / 2),
      size * ((i * (i - 1)) / 2),
      size + size * i,
      size + size * i
    )
  }
}
diagonalGetBigger(10, 10)
