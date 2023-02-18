// compile me with `npx tsc -w index.ts` ("-w(atches)" / reacts to changes in this file)

const canvas: HTMLCanvasElement = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")

//

type Coord = [number, number]
type Direction = 'ne' | 'se' | 'sw' | 'nw'

let point: Coord = [5, 5]
let arrow: Direction = 'se'
// let compass: number = 0 // 0: diagonal; 1: vertical / horizontal

function render(): void {
    let size = 10
    ctx.fillRect(size * point[0], size * point[1], size, size)
}

function directionToCoord(d: Direction): Coord {
    if (d == 'ne') return [2, -2]
    else if (d == 'se') return [2, 2]
    else if (d == 'sw') return [-2, 2]
    else if (d == 'nw') return [-2, -2]
}

function tick(): void {
    ctx.fillStyle = "#ccc"
    render()

    let arrowC: Coord = directionToCoord(arrow)
    point = [point[0] + arrowC[0], point[1] + arrowC[1]]

    ctx.fillStyle = "black"
    render()
}

document.addEventListener('keydown', (event) => {
    // let arrow: Direction = 'se' // bad
    if (event.key == "w") arrow = 'ne'
    if (event.key == "d") arrow = 'se'
    if (event.key == "a") arrow = 'nw'
    if (event.key == "s") arrow = 'sw'
    console.log(arrow)
})

render()

// setInterval(f, t) = ik pēc t ms no šī brīža izpildi f
// setInterval(tick, 100)
setInterval(() => { tick() }, 100)
