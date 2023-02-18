// compile me with `npx tsc -w index.ts` ("-w(atches)" / reacts to changes in this file)

const canvas: HTMLCanvasElement = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")

//

type Coord = [number, number]
type Direction = 'n' | 's' | 'e' | 'w'

let point: Coord = [5, 5]
let arrow: Direction = 'e'
let speed: number = 2

function render(): void {
    let size = 10
    ctx.fillRect(size * point[0], size * point[1], size, size)
}

function directionToCoord(d: Direction, delta: number = 3): Coord {
    if (d == 'n') return [0, - delta]
    else if (d == 's') return [0, delta]
    else if (d == 'e') return [delta, 0]
    else if (d == 'w') return [- delta, 0]
}

function tick(): void {
    ctx.fillStyle = "#ccc"
    render()

    let arrowC: Coord = directionToCoord(arrow, speed)
    point = [point[0] + arrowC[0], point[1] + arrowC[1]]

    ctx.fillStyle = "black"
    render()
}

document.addEventListener('keydown', (event) => {
    // let arrow: Direction = 'se' // bad
    if (event.key == "w") arrow = 'n'
    if (event.key == "d") arrow = 'e'
    if (event.key == "a") arrow = 'w'
    if (event.key == "s") arrow = 's'

    if (event.key == ",") speed = speed * 0.83
    if (event.key == ".") speed = speed * 1.2

    console.log(event.key, arrow)
})

render()

// setInterval(f, t) = ik pēc t ms no šī brīža izpildi f
// setInterval(tick, 100)
setInterval(() => { tick() }, 100)

// feature requests:
// 1. the dot doesn't move outside of the field (field size = window.innerWidth / size)
// 1.1. option 1: if (!outside) point = newPoint
// 1.2. option 2: pointX = min(maxSizeX, max(0, newPointX))
// 2. don't let use negative speed or speed that's too small in case we're multiplying
// 2. note: use (speed = max(0, newSpeed))
// 3. allow making the dot bigger with "o" and "p"
// 4. change the colors to something different just for fun