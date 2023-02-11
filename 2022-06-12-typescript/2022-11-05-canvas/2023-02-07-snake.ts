// compile me with `npx tsc -w index.ts` ("-w(atches)" / reacts to changes in this file)

const canvas: HTMLCanvasElement = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")

type Coord = [number, number]

type Snake = {
    playing: boolean,
    field: Coord,
    food: Coord,
    body: Array<Coord>,
    direction: number,
}

function contains<A>(haystack: Array<A>, needle: A): boolean {
    for (let i = 0; i < haystack.length; i++) {
        if (JSON.stringify(needle) == JSON.stringify(haystack[i]))
            return true
    }
    return false
}

function render(snake: Snake): void {
    let size = 80
    let gap = snake.playing ? 10 : 0
    for (let y = 0; y < snake.field[0]; y++) {
        for (let x = 0; x < snake.field[1]; x++) {
            if (contains<Coord>(snake.body, [x, y]))
                ctx.fillStyle = "#e8690e"
            else if (JSON.stringify(snake.food) == JSON.stringify([x, y]))
                ctx.fillStyle = "#77b504"
            else if (snake.playing == true)
                ctx.fillStyle = "#ccc"
            else
                ctx.fillStyle = "#000"

            ctx.fillRect(size + x * size, size + y * size, (size - gap), (size - gap))
        }
    }
}

function tickSnake(snake: Snake): void {
    let head: Coord = snake.body[0]
    if (snake.direction == 0) head = [head[0], head[1] - 1]
    if (snake.direction == 1) head = [head[0] + 1, head[1]]
    if (snake.direction == 2) head = [head[0], head[1] + 1]
    if (snake.direction == 3) head = [head[0] - 1, head[1]]

    let outsideField = head[0] >= snake.field[0] || head[1] >= snake.field[1]
    if (head[0] < 0 || head[1] < 0 || outsideField) 
        snake.playing = false
    else
        snake.body = [head].concat(snake.body.slice(0, -1))
}

let snake: Snake = {
    playing: true,
    field: [10, 10],
    food: [4, 5],
    body: [[4, 2], [3, 2], [2, 2]], // first element is head
    direction: 1, // 0:1:2:3 :: up:right:down:left
}
render(snake)

document.addEventListener('keydown', (event) => {
    if (event.key == "w") snake.direction = 0
    if (event.key == "d") snake.direction = 1
    if (event.key == "s") snake.direction = 2
    if (event.key == "a") snake.direction = 3
})

setInterval(() => {
    tickSnake(snake)
    render(snake)
}, 100)