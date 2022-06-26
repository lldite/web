console.log("lācīc")
const number = 10
const numbers = Array.from(Array(number).keys())
console.log(numbers.map(x => ({zivs: x, govs: (5 - x)})))
console.log(numbers.map(x => {
    let y = 10 - x * 2
    return {
        zivs: [x, "x", 7],
        govs: (5 - x),
        kaija: x > 5 ? "x ir lielāks par 5" : "x nav lielāks par 5",
    }
}))

console.log("?:", true ? 3 : 1, false ? 3 : 1)

function f(x: number, y: number): number {
    return x + y
}

console.log("f calls:", f(5, 9), f(8, 4))

function sum(ns: Array<number>): number {
    let s = 0   
    ns.forEach(n => s = s + n)
    return s
}

console.log("summas:", sum([1,2,3]), sum([6, 9, 12, -27]))

function biggest(ns: Array<number>): number {
    let b = 0
    ns.forEach(n => {
        // if (b > n) {} else b = n // refactored
        if (n >= b) b = n
    })
    return b
}

console.log(
    "izprintēt lielāko:", 
    biggest([-2, 22, 9.09, 9]), 
    biggest([5, 7, 9, 6])
)

function pozorneg(list: Array<number>) : [number, number] {
    let poz = 0
    let neg = 0
    list.forEach(n => {
        if (n > 0) poz = poz + n 
        else (neg = neg + n)
    })
    return [poz, neg]
}

console.log(pozorneg([1, 2, -1, -2]), pozorneg([-5, -6, 0, 11, -89, 76]))

function twoarrays(array: Array<number>) : [Array<number>, Array<number>] {
    let poz : Array<number> = []
    let neg : Array<number> = []
    array.forEach(n => {
        if (n > 0) poz.push(n)
        else neg.push(n)
    })
    return [poz, neg]
}
console.log(twoarrays([-9, -4, 6, 55, -89, 5, -32, 1, -10, 8]))

function evenOddList(n: number): [Array<number>, Array<number>] {
    let odd = [] as Array<number> 
    let even: Array<number> =[]
    const numbers = Array.from(Array(n).keys()).map(n => n + 1)
    numbers.forEach(n => {
        if (n % 2 == 0) even.push(n)
        else odd.push(n)
    })
    return [odd, even]
}

console.log(evenOddList(5), [[1,3,5], [2,4]])

function rotateArray<A>(a: Array<A>): Array<A> {
    let newarray = a.slice(1)
    newarray.push(a[0])
    return newarray
}

console.log(rotateArray([1,2,3,4,5]), [2,3,4,5,1])

function rotateArray2<A>(a: Array<A>): Array<A> {
    return rotateArray(rotateArray(a))

}

console.log(rotateArray2([1,2,3,4,5]), [3,4,5,1,2])

const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
// return newlist
//     return list
// }

// array get: arrayname[indexvalue]             (e.g. list[index])
// array set: arrayname[indexvalue] = somevalue (e.g. list[index] = number)

// replace the first `number` items in the `list` with `number`
function replace(list: Array<number>, number: number): Array<number> {
    // return list.map((element, index) => {
    //     if (index < number)
    //         return number
    //     else
    //         return element
    // })

    // list.forEach((element, index) => {
    //     if (index < number) list[index] = number
    // })
    // return list

    // let out: Array<number> = []
    // list.forEach((element, index) => { // element = 1, index = 0
    //     if (index < number) out.push(number); else out.push(element)
    //     // if (index < number) list[index] = number
    //     // if (index < number) element < number
    // })
    // return out

    const numbers = Array.from(Array(number).keys()).map(_ => number)
    return numbers.concat(list.slice(list.length - number))
}

let list = [8, 7, 6, 5]
console.log("list", list)
console.log("replace", replace(list, 2))
console.log("list", list)