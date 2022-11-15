// Revese string imperatively
function rreevveerrssee(s: string): string {
    let ns = ""
    for (let i = 0; i <= s.length - 1; i++) {
        ns = s[i] + ns
    }
    return ns

    let sa = []
    for (let i = 0; i <= s.length - 1; i++) {
        sa.splice(0, 0, s[i])
    }
    return sa.join("")

    let newstring = ""
    for (let i = s.length - 1; i >= 0; i--) {
        newstring = newstring + s[i]
    }
    return newstring
}
console.log("rreevveerrssee: ", rreevveerrssee("abcdef") == "fedcba", rreevveerrssee("ko luuri?") == "?iruul ok")

// Capitalize the first letter of each word of a given string.

function capital(s: string): string {
    let sl = []
    for (let i = 0; i <= s.length; i++) {
        if (s[i] == " ") s.split(" ")
    }

    return s.split(" ").map(a => a[0].toUpperCase() + a.slice(1, a.length)).join(" ")
}
console.log("capital: ", capital("kas notiek?") == "Kas Notiek?", capital("reiz dzivoja mincitis") == "Reiz Dzivoja Mincitis")

// https://medium.com/@andreidiaconu90/javascript-for-loop-exercises-4c6cbf570411
// #1 — Print the numbers from 0 to 15

function zerotofifteen(n: number = 0, nn: number = 15): Array<number> {
    let list = []
    for (let i = n; i <= 15; i++) {
        list.push(i)
    }
    return list
}
console.log("zerotofifteen: ", zerotofifteen())

/*
v is: 0
v is: 1
v is: 2
*/

// #2 — Print the numbers from 12 to 24

function twelvetotwenty(n: number = 12, nn: number = 24): Array<number> {
    let list = []
    for (let i = 12; i <= 24; i++) {
        list.push(i)
    }
    return list
}
console.log("twelvetitwenty: ", twelvetotwenty())

// #3 — Print the ODD numbers from 7 to 31

function oddnums(n: number = 7, nn: number = 31): Array<number> {
    let list = []
    for (let i = 7; i <= 31; i++) {
        if (i % 2 != 0)
            list.push(i)
    }
    return list
}
console.log("oddnums: ", oddnums())

// #4 — Print the EVEN numbers from 10 to -20

function evenums(n: number = 10, nn: number = -20): Array<number> {
    let list = []
    for (let i = 10; i >= -20; i--) {
        if (i % 2 == 0)
            list.push(i)
    }
    return list

    for (let i = -20; i <= 10; i++) {
        if (i % 2 == 0)
            list.push(i)
    }
    return list
}
console.log("evenums: ", evenums())

// #5 — Iterate through all numbers from 1 to 45. Print the following:
// For multiples of 3 print “Fizz”
// For multiples of 5 print “Buzz”
// For multiples of 3 and 5 print “FizzBuzz”

function onetofourty(n: number = 1, nn: number = 45): Array<string> {
    let list = []
    for (let i = 1; i <= 45; i++) {
        if (i % 3 == 0 && i % 5 == 0) list.push("FizzBuzz")
        else if (i % 3 == 0) list.push("Fizz")
        else if (i % 5 == 0) list.push("Buzz")
        console.log(i + ' ' + list.join(','))
    }
    console.log("rekur list: ", list)
    return list
}
// onetofourty()
console.log("onetofourty: ", onetofourty())

// #6 — Print all the elements of the following array

function printelements(a: Array<string>): Array<string> {
    let list = []
    for (let i = 0; i <= a.length - 1; i++) {
        list.push(a[i])
    }
    return list
}
console.log("printelements: ", printelements(["element1", "element2", "element3", "element4"]))

// #7 — Calculate the sum of all the numbers in the following array

function sum(a: Array<number>): number {
    let n = 0
    for (let i = 0; i <= a.length - 1; i++) {
        n = n + a[i]
    }
    return n
}
console.log("sum: ", sum([1, 13, 22, 123, 49]) == 208)



// > "abc def ghi jkl mno".split(' ').map((thing, index) => index)
// [ 0, 1, 2, 3, 4 ]
// > "abc def ghi jkl mno".split(' ').filter((thing, index) => index % 2 == 1)
// [ 'def', 'jkl' ]

// // https://stackoverflow.com/a/23555773
// // [1,2] == [1,2]   ===>   false
// // JSON.stringify(a1) === JSON.stringify(a2)


// fill(3, 3) = [3, 3, 3]
// fill(5, 5) = [5, 5, 5, 5, 5]
// fill(6, "x") = ["x", "x", "x", "x", "x", "x"]
// function fill<A>(n: number, a: A): Array<A> {
//     return []
// }
// console.log(
//     'fill:',
//     JSON.stringify(fill(5, 5)) == JSON.stringify([5, 5, 5, 5, 5]),
//     JSON.stringify(fill<string>(3, "x")) == JSON.stringify(["x", "x", "x"])
// )
// JSON.stringify ir vajadzīgs, jo ts/js salīdzina sarakstus pēc adreses, bet stringus pēc vērtības
// un sarakstu (masīvu) konvertējot par stringu beidzot sanāk tos salīdzināt pēc vērtības

function fill<A>(n: number, a: A): Array<A> {
    let list = []
    for (let i = 1; i <= n; i++) {
        list.push(a)
    }
    return list
}
console.log("fill: ",
    JSON.stringify(fill(3, 3)) == JSON.stringify([3, 3, 3]),
    JSON.stringify(fill<number>(5, 5)) == JSON.stringify([5, 5, 5, 5, 5]),
    JSON.stringify(fill<string>(4, "x")) == JSON.stringify(["x", "x", "x", "x"])
)

// fillSquare(5) = [[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]]

function fillSquare(n: number): Array<Array<number>> {
    let list = []
    let biglist = []
    for (let i = 1; i <= n; i++) {
        list.push(n)
    }
    for (let i = 1; i <= n; i++) {
        biglist.push(list.slice(0))
    }
    return biglist
}
console.log(
    "fillSquare: ",
    JSON.stringify(fillSquare(5)) == JSON.stringify([[5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5]]),
    JSON.stringify(fillSquare(3)) == JSON.stringify([[3, 3, 3], [3, 3, 3], [3, 3, 3]])
)

// evenList(8) = [16, 14, 12, 10, 8]
// evenList(7) = [14, 12, 10, 8]
// evenList(6) = [12, 10, 8, 6]
// evenList(5) = [10, 8, 6]

function evenList(n: number): Array<number> {
    let list = []
    for (let i = n; i <= n * 2; i++) {
        if (i % 2 == 0) list.push(i)
    }
    return list.reverse()
}
console.log("evenList: ", JSON.stringify(evenList(8)) == JSON.stringify([16, 14, 12, 10, 8]), JSON.stringify(evenList(7)) == JSON.stringify([14, 12, 10, 8]), JSON.stringify(evenList(6)) == JSON.stringify([12, 10, 8, 6]), JSON.stringify(evenList(5)) == JSON.stringify([10, 8, 6]))

// Saskaitīt visus no saraksta

function summa(a: Array<number>): number {
    // return a.reduce((a, b) => a + b)
    let n = 0
    for (let i = 0; i <= a.length - 1; i++) {
        n = n + a[i]
    }
    return n
}
console.log("summa: ", summa([1, 2, 3]) == 6, summa([11, 23, 4, 0]) == 38)

// Izprintēt lielāko no saraksta

function biggest(a: Array<number>): number {
    // zipper = (a, b) => Math.max(a,b)
    // return a.reduce(zipper) 

    let n = a[0] // lielākais redzētais cipars
    for (let i = 0; i <= a.length - 1; i++) {
        if (a[i] >= n) n = a[i]
    }
    return n
}
console.log("biggest: ", biggest([7, 6, 1]) == 7, biggest([7, 6, 9]) == 9, biggest([8, 10, -6, 3]) == 10, biggest([2, 1, 0, 1, 2]) == 2, biggest([5, 5, 1, 5]) == 5)

// Sasumēt pozitīvos un negatīvos

// > [1, 2, 3].reduce((x, y) => x + y, 1000)
// 1006
// > [1,23,456,7890].reduce((s, a) => s + a, "")
// '1234567890'
function sumpozorneg(a: Array<number>): Array<number> {
    return a.reduce((acc, next) => {
        if (next >= 0)
            return [acc[0] + next, acc[1]]
        else
            return [acc[0], acc[1] + next]
    }, [0, 0])

    // let poz = 0
    // let neg = 0
    // for (let i = 0; i <= a.length - 1; i++) {
    //     if (a[i] >= 0) poz = poz + a[i]
    //     else neg = neg + a[i]
    // }
    // return [poz, neg]
}
console.log("sumpozorneg: ", JSON.stringify(sumpozorneg([0, 7, -3, 4])) == JSON.stringify([11, -3]), JSON.stringify(sumpozorneg([-1, 1, -1, 1])) == JSON.stringify([2, -2]))

// > if (false) console.log('a'); else console.log('b'); console.log('b')
// b
// b
// undefined
// > if (false) console.log('a'); console.log('b')
// b
// undefined
// > if (false) { console.log('a'); console.log('b') }
// undefined