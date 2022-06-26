function plus(a: number, b: number): number { return a + b }

console.log(`plus(3, 4) = ${plus(3, 4)}`)
console.log(`plus(3, 4) = ` + plus(3, 4).toString())
console.log(`plus(3, 4) =`, plus(3, 4))

let there = "be light"

let array = [1, 2, 3]
let array1: Array<number> = array
let array2: number[] = array

function twoSum(nums: number[], target: number): number[] {
    let i: number, j: number

    nums.forEach(a => 0)
    nums.forEach((a, i) => 0)
    nums.forEach((a, i) => {
        0
    })
    nums.forEach((a, i) => {
        console.log(a)
    })

    nums.forEach((a, aIndex) => {
        console.log(`a = ${a}`)
        nums.slice(aIndex + 1).forEach((b, bIndex) => {
            if (a + b == target) {
                i = aIndex
                j = aIndex + bIndex + 1
            }
        })
    })

    return [i, j]
}

console.log(twoSum([2, 5, 7, 4, 3], 8), [1, 4])

/*
> let [a, b] = [5, 6]
undefined
> a + b
11

> [5,6,4,3].forEach(a => console.log('a ir', a))
a ir 5
a ir 6
a ir 4
a ir 3

> let s: number = 0
undefined
> [5,6,4,3].forEach(a => s = s + a)
undefined
> s
18

> const d: number = 0
undefined
> [5,6,4,3].forEach(a => d = d + a)
<repl>.ts:58:24 - error TS2588: Cannot assign to 'd' because it is a constant.
*/