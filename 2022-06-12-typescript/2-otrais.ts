let i: number = 0

let numbers = Array.from(Array(32).keys()) // [0..9]

console.log(`numbers: ${numbers}`)

numbers.forEach(a => {
    i = i + 1
})

console.log(`found ${i} numbers that matched the pattern`)

i = 0

numbers.forEach(a => {
    numbers.forEach(b => {
        //if (a * b > 62) {
          i = i + 1
        //}
    })
})

console.log(`found ${i} numbers that matched the pattern`)

// nu vot tā, nja? :3