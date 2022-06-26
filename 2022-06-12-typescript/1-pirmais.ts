function plus(a: number, b: number): number { return a + b }

// console.log(`plus(3, 4) = ${plus(3, 4)}`)
// console.log(`plus(3, 4) = ` + plus(3, 4).toString())
// console.log(`plus(3, 4) =`, plus(3, 4))

let there = "be light"

let array = [1, 2, 3]
let array1: Array<number> = array
let array2: number[] = array

let f: (number) => void = a => console.log(a - 5)
f(7)
console.log('---');
([1, 2, 3]).forEach(f)
console.log('---');
([1, 2, 3]).forEach(a => console.log(a * 2))
console.log('---');
array.forEach(x => {
    if (x > 2) console.log(x * 111)
})
console.log('---');

function putInArray(n: number): [number, number, number] {
    return [n, n * 5, n]
}

console.log('putInArray(5) =', putInArray(5))
// [5 , 6 , 4, 3].forEach(a => console.log('a ir', a))

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