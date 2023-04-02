// compile me with `npx tsc -w index.ts` ("-w(atches)" / reacts to changes in this file)

const canvas: HTMLCanvasElement = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")
if (ctx) {
}

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
// moveKubikiArray()

function moveKlucic(
  position: [number, number],
  size: number,
  speed: number
  //color: string
): void {
  let direction = [speed, 0]

  setInterval(() => {
    ctx.fillStyle = "white"
    ctx?.fillRect(position[0], position[1], size, size)

    position = [position[0] + direction[0], position[1] + direction[1]]

    ctx.fillStyle = "purple"
    ctx?.fillRect(position[0], position[1], size, size)
  }, 100)

  addEventListener("keydown", (event) => {
    if (event.key == "w") direction = [0, -speed]
    if (event.key == "s") direction = [0, speed]
    if (event.key == "a") direction = [-speed, 0]
    if (event.key == "d") direction = [speed, 0]
    if (event.key == " ") direction = [0, 0]
  })
}
// moveKlucic([100, 100], 10, 5)
// moveKlucic([200, 200], 30, 3)
// moveKlucic([300, 300], 50, 1)

function moveMultiple(
  position: [number, number],
  size: number,
  speed: number,
  count: number
): void {
  for (let i = 1; i <= count; i++) {
    position = [position[0] + 100, position[1] + 100]
    size = size + 10
    speed = speed + 5
    moveKlucic(position, size, speed)
  }
}
// moveMultiple([0, 0], 10, 1, 10)

function klucitis(x: number, y: number): void {
  ctx.fillStyle = "purple"
  ctx?.fillRect(x, y, 50, 50)
}
//klucitis()

function vairakiKlucishi(count: number): void {
  let x = 0
  let y = 0
  for (let i = 1; i < count; i++) {
    x = x + 100
    y = y + 100
    klucitis(x, y)
  }
}

// function vairakiKlucishi(count: number): void {
//   let x = 0
//   let y = 0
//   for (let i = 1; i < count; i++) {
//     x = x + 100
//     y = y + 100
//     ctx.fillStyle = "purple"
//     ctx?.fillRect(x, y, 50, 50)
//   }
// }
//vairakiKlucishi(10)

// 1. individuāli ātrumi (direction ir bulta ar izmēru viens, pēc tam pareizina ar individuālo)
// 2. ar punktu un komatu mainīt step, lai jauniem klucīšiem būtu savs individuālais ātrums
function moveKubikiSize(): void {
  let size: number = 50
  let step: number = 1
  let direction = [1, 0]
  let kubikI: Array<[number, number, number, number]> = [
    [100, 100, size, 1],
    [200, 200, size + 10, 2],
    [300, 300, size + 20, 3],
  ]

  setInterval(() => {
    kubikI.forEach((kubik) => {
      ctx.fillStyle = "white"
      ctx?.fillRect(kubik[0], kubik[1], kubik[2], kubik[2])

      kubik[0] = kubik[0] + direction[0] * kubik[3]
      kubik[1] = kubik[1] + direction[1] * kubik[3]

      ctx.fillStyle = "black"
      ctx?.fillRect(kubik[0], kubik[1], kubik[2], kubik[2])
    })
  }, 10)

  addEventListener("keydown", (event) => {
    if (event.key == "w") direction = [0, -1]
    if (event.key == "s") direction = [0, 1]
    if (event.key == "a") direction = [-1, 0]
    if (event.key == "d") direction = [1, 0]
    if (event.key == " ") direction = [0, 0]
    if (event.key == "Enter") kubikI.push([0, 0, size, step])
    if (event.key == ".") step = step + 1
    if (event.key == ",") step = step - 1
  })

  //   setInterval(() => {
  //     kubikI.push([0, 0, size, step])
  //   }, 250)
}
// moveKubikiSize()

// objects
let o: { age: number; adult: Boolean } = { age: 20, adult: false } // make
console.log(o.age, o["age"], o.adult, o["adult"]) // izkasīšana dažādos veidos
let o2: { age: number; adult: Boolean } = { age: o.age, adult: o.adult } // remake

function moveKubikiObject(): void {
  type Klucitis = {
    x: number
    y: number
    size: number
    speed: number
  }

  let klucitis: Klucitis = { x: 100, y: 100, size: 50, speed: 1 }
  let step: number = 10
  let direction = [1, 0]

  let kubikI: Array<Klucitis> = [
    {
      x: klucitis.x,
      y: klucitis.y,
      size: klucitis.size,
      speed: klucitis.speed,
    },
    {
      x: klucitis.x + 100,
      y: klucitis.y + 100,
      size: klucitis.size + 10,
      speed: klucitis.speed + 1,
    },
    {
      x: klucitis.x + 200,
      y: klucitis.y + 200,
      size: klucitis.size + 20,
      speed: klucitis.speed + 2,
    },
  ]

  setInterval(() => {
    kubikI.forEach((kubik) => {
      ctx.fillStyle = "white"
      ctx?.fillRect(kubik.x, kubik.y, kubik.size, kubik.size)

      if (
        kubik.x <= 0 ||
        kubik.y <= 0 ||
        kubik.x >= canvas.width ||
        kubik.y >= canvas.height
      )
        kubik.speed = -kubik.speed

      kubik.x = kubik.x + direction[0] * kubik.speed
      kubik.y = kubik.y + direction[1] * kubik.speed

      ctx.fillStyle = "black"
      ctx?.fillRect(kubik.x, kubik.y, kubik.size, kubik.size)
    })
  }, 10)

  addEventListener("keydown", (event) => {
    if (event.key == "w") direction = [0, -1]
    if (event.key == "s") direction = [0, 1]
    if (event.key == "a") direction = [-1, 0]
    if (event.key == "d") direction = [1, 0]
    if (event.key == " ") direction = [0, 0]
    if (event.key == ".") step = step + 1
    if (event.key == ",") step = step - 1
    if (event.key == "Enter") {
      kubikI.push({
        x: step + 1,
        y: step + 1,
        size: Math.floor(100 / (step / 10)),
        // size: step * 2,
        speed: step,
      })
      console.log(kubikI.at(-1))
    }
  })
}

moveKubikiObject()
