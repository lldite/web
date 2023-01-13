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

// Sadalīt poz un neg vērtības pa listiem vienā listā

function twoarrays(a: Array<number>): [Array<number>, Array<number>] {
    let poz = []
    let neg = []
    for (let i = 0; i <= a.length - 1; i++) {
        if (a[i] >= 0) poz.push(a[i])
        else neg.push(a[i])
    }
    return [poz, neg]

    // a.forEach(n => {
    //     if (n >= 0) poz.push(n) 
    //     else neg.push(n)
    // }
    // )
    // return [poz, neg]

    return a.reduce((x, y) => {
        if (y >= 0) return [x[0].concat([y]), x[1]]
        else return [x[0], x[1].concat([y])]
    }, [[], []])
}
console.log("twoarrays: ", JSON.stringify(twoarrays([1, 8, 3, -7, 0, -7])) == JSON.stringify([[1, 8, 3, 0], [-7, -7]]))

// Return the length of the array
// List() -> 0
// List(1, 2) -> 2
// List(5, 4, 1, 9) -> 4
// List(6) -> 1
// List(1, 5, 2, 0, -1) -> 5
// count

function count(a: Array<number>): number {
    return a.reduce((count, item) => count + 1, 0)

    // let n = 0
    // a.forEach(a => n = n +1)
    // return n

    // let n = 0
    // for (let i = 1; i <= a.length; i++) {
    //     n = n + 1
    // } 
    // return n
}
console.log("count: ", count([1, 2, 2, 2]) == 4, count([-89, 0, 7, 101, -11]) == 5)
// List() = -100
// List(1) = 1
// List(-5) = -100
// List(-5, -7) = -100
// List(1, 0) = 1
// List(1, 1) = 1
// List(1, 2) = 1
// List(1, -7) = -7
// List(1, -7, -9) = -7
// List(1, -7, -5) = -7
// List(1, -7, 4) = 4
// List(1, -7, 4, 5) = 4
// List(1, -7, 4, -4) = -4
// List(1, -7, 4, -5) = -5
// List(1, -7, 4, -6) = -6
// flip flop

function flipflop(a: Array<number>): number {
    return a.reduce((acc, item) => {
        if ((item < 0 && acc < 0) || (item >= 0 && acc >= 0)) return acc
        else return item
    }, -100)
}
console.log("flipflop: ", flipflop([1, 0]) == 1, flipflop([-5, -7, 1]) == 1, flipflop([-5, -7]) == -100, flipflop([1, -7, 4, -6]) == -6)

// console.log(evenOddList(5), [[1,3,5], [2,4]])

function evenOddList(n: number): [Array<number>, Array<number>] {
    return Array.from(Array(Math.abs(n) + 1).keys()).slice(1).reduce((acc, item) => {
        if (item % 2 == 0) return [acc[0].concat([item]), acc[1]]
        else return [acc[0], acc[1].concat([item])]
    }, [[], []])

    let even = []
    let odd = []
    for (let i = 1; i <= Math.abs(n); i++) {
        if (i % 2 == 0) even.push(i)
        else odd.push(i)
    }
    return [even, odd]
}
console.log("evenoddlist: ",
    JSON.stringify(evenOddList(5)) == JSON.stringify([[2, 4], [1, 3, 5]]),
    JSON.stringify(evenOddList(-3)) == JSON.stringify([[2], [1, 3]]),
    JSON.stringify(evenOddList(0)) == JSON.stringify([[], []]))

//Saņemot skaitli n, atgriezt 1 ar n nullēm galā (pieņemsim, ka n <= 10)

function zeros(n: number): number {
    let z = 1
    for (let i = 1; i <= n; i++) {
        z = z * 10
    } return z
}
console.log("zeros: ", zeros(3) == 1000, zeros(5) == 100000)

//Saņemot skaitli n, atgriezt sarakstu ar n tukšiem sarakstiem. 
//Piemērs: n = 5, rezultāts = [[], [], [], [], []]. 

function emty(n: number): Array<Array<number>> {
    let a = []
    let b = []
    for (let i = 1; i <= n; i++) {
        b.push(a)
    } return b
}
console.log("emty: ", JSON.stringify(emty(3)) == JSON.stringify([[], [], []]),
    JSON.stringify(emty(5)) == JSON.stringify([[], [], [], [], []]))

//[0, 0, step, -step, 2 * step, -2 * step, ...]; end = 6, step = 2 => [0, 0, 2,-2, 4, -4]

function stepend(end: number, step: number): Array<number> {
    if (step == 0) return []
    let a = []
    for (let i: number = 0; i < end; i = i + step) {
        a.push(i, -i)
    }
    return a

    for (let i = 0; i < end; i++) {
        if (i % step == 0) a.push(i, -i)
    }
    return a
}
console.log("stepend: ",
    JSON.stringify(stepend(5, 2)) == JSON.stringify([0, -0, 2, -2, 4, -4]),
    JSON.stringify(stepend(10, 0)) == JSON.stringify([]),
    JSON.stringify(stepend(10, 1)) == JSON.stringify([0, -0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9]),
    JSON.stringify(stepend(30, 7)) == JSON.stringify([0, -0, 7, -7, 14, -14, 21, -21, 28, -28]))

//a = [5, 3, 1] => f(a)= [4, 2, 0]
function a(aa: Array<number>): Array<number> {
    let b = []
    for (let i = 0; i <= aa.length - 1; i++) {
        b.push(aa[i] - 1)
    }
    return b

    return aa.map(c => c - 1)
}
console.log("a: ", JSON.stringify(a([5, 3, 2])) == JSON.stringify([4, 2, 1]),
    JSON.stringify(a([9, 0, -3])) == JSON.stringify([8, -1, -4]))

//Saņemot masīvu ar skaitļiem ns (short for numbers), pieskaiti katram skaitlim visa masīva ns sumu un atgriezt to. 
//Piemērs: f([6, 8, 1, -2]) = [19, 21, 14, 11]. 
//“ns” saturam jāpaliek tādam pašam! 
//Iepriekšējo uzdevumu funkcijas drīkst izmantot.

function plusum(a: Array<number>): Array<number> {
    let sum = a.reduce((c, b) => c + b)
    let na = []
    for (let i = 0; i <= a.length - 1; i++) {
        na.push(a[i] + sum)
    }
    return na
}
console.log("plusum: ", JSON.stringify(plusum([1, 2, 3])) == JSON.stringify([7, 8, 9])),
    JSON.stringify(plusum([6, 8, 1, -2])) == JSON.stringify([19, 21, 14, 11])

//Saņemot masīvu ar skaitļiem ns, liec tos jaunā masīva sākumā, ja tie ir negatīvi, bet beigās, ja tie ir pozitīvi. 
//Atgriez jauno masīvu. Piemērs: [5, -7, 4, 3, -1] => [-1, -7, 5, 4, 3].
//https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript 

function arrange(a: Array<number>): Array<number> {
    let aa = a.reduce((acc: Array<Array<number>>, item: number) => {
        if (item < 0) return [acc[0], acc[1].concat([item])]
        else return [acc[0].concat([item]), acc[1]]
    }, [[], []])
    let newarray = aa[1].concat(aa[0])
    return newarray


    let pos = []
    let neg = []
    for (let i = 0; i <= a.length - 1; i++) {
        if (a[i] < 0) neg.push(a[i])
        else pos.push(a[i])
    }
    return neg.concat(pos)
}
console.log("arrange: ", JSON.stringify(arrange([5, -7, 4, 3, -1])) == JSON.stringify([-7, -1, 5, 4, 3]),
    JSON.stringify(arrange([0, 0, 9, -5, 4, 1, -10])) == JSON.stringify([-5, -10, 0, 0, 9, 4, 1]))

//Saņemot masīvu ar skaitļiem, sasummē un atgriez visu skaitļu summu no labās puses. 
//Piemērs: [5, 6, 0, 7, 6] => 24.
function right(a: Array<number>): number {
    let flip = a.reverse()
    return flip.reduce((b, c) => b + c)

    let sum = 0
    for (let i = a.length - 1; i >= 0; i--) {
        sum = sum + a[i]
    }
    return sum
}
console.log("right: ", JSON.stringify(right([5, 6, 0, 7, 6])) == JSON.stringify(24))

//Saņemot masīvu ar skaitļiem, sasummē un atgriez visu skaitļu summu no labās puses, :1057:36)
//bet beidz summēt (apstādinot ciklu ar apgalvojumu “break”), ja skaitlis ir mazāks par 1. 
//Piemērs: [5, 6, 0, 7, 6] => 13. https://www.w3schools.com/js/js_break.asp 

function one(a: Array<number>): number {
    let sum = 0
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] >= 1) sum = sum + a[i]
        else break
    }
    return sum
}
console.log("one: ", JSON.stringify(one([0, 3, 2, 2])) == JSON.stringify((7)),
    JSON.stringify(one([3, -5, 4])) == JSON.stringify(4),
    JSON.stringify(one([0, 0])) == JSON.stringify(0),
    JSON.stringify(one([3, 2, 1, 0])) == JSON.stringify(0))

//atrodi lielāko skaitli sarakstā

function bigest(a: Array<number>): number {
    let aa = a[0]
    for (let i = 0; i <= a.length - 1; i++) {
        if (a[i] >= aa) aa = a[i]
    }
    return aa
    return a.reduce((acc, item) => {
        if (item > acc) return item
        else return acc
    }, 0)
}
console.log("bigest: ", JSON.stringify(bigest([2, 6, 4])) == JSON.stringify(6),
    JSON.stringify(bigest([-9, 1, 0, 6, -15])) == JSON.stringify(6))

// Uztaisi 2d sarakstu no skaitļiem n, m tā lai visos būtu nulles
// outputā vajag būt n * m lielam masīvam, pildītam ar ar nullēm
// priekš replaceZero(2, 3) sanāk [[0, 0], [0, 0], [0, 0]]
// priekš replaceZero(4, 2) sanāk [[0, 0, 0, 0], [0, 0, 0, 0]]

function zeeros(n: number, m: number): Array<number> {
    let na = []
    let ba = []
    for (let i = 1; i <= n; i++) {
        na.push(0)
    }
    for (let i = 1; i <= m; i++) {
        ba.push(na)
    }
    return ba
}
console.log("zeeros: ", JSON.stringify(zeeros(2, 3)) == JSON.stringify([[0, 0], [0, 0], [0, 0]]),
    JSON.stringify(zeeros(4, 2)) == JSON.stringify([[0, 0, 0, 0], [0, 0, 0, 0]]))

// replaceIdx([0, 0, 0, 0, 0], 2, 5) = [0, 0, 5, 0, 0]

function replindx(a: Array<number>, n: number, nn: number): Array<number> {
    return a.reduce((acc, item, index) => {
        if (index == n) return acc.concat([nn])
        else return acc.concat([item])
    }, [])

    for (let i = 0; i <= a.length - 1; i++) {
        if (i == n) a[i] = nn
    }
    return a

    a.splice(n, 0, nn)
    return a
}
console.log("replindx: ", JSON.stringify(replindx([0, 0, 0, 0, 0], 2, 5)) == JSON.stringify([0, 0, 5, 0, 0]))

// Sum to n

function sumton(n: number): number {
    let a = Array.from(Array(n + 1).keys())
    return a.reduce((a, b) => a + b)
}
console.log("sumton: ", sumton(5))

//(Sarežģīts, jāizmanto ir gan splice, gan break.) 
//Saņemot masīvu ar skaitļiem ns, izveido jaunu masīvu un skaitļus no ns liec jaunajā masīvā pa vienam, 
//liekot jauno tieši pirms pirmā lielākā skaitļa salīdzinot ar esošo (no kreisās puses). 

function order(a: Array<number>): Array<number> {

    let newa = []
    for (let i = 0; i <= a.length - 1; i++) {
        let smallest = i
        for (let j = smallest; j <= a.length - 1; j++) {
            if (a[j] <= a[smallest]) smallest = j
        }
        newa.push(a[smallest])
        const tmp = a[smallest]
        a[smallest] = a[i]
        a[i] = tmp
    }
    return newa

    a.sort()
    return a

    let na = []
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < a.length; j++) {
            if (a[i] > a[j]) {
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
        na.push(a[i])
    }
    return na

    for (let i = a.length - 1; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            if (a[i] < a[j]) {
                let temp = a[i]
                a[i] = a[j]
                a[j] = temp
            }
        }
    }
    return a
}

console.log("order: ", order([8, 5, 1, 9]))

//atriez sarakstu bez lielākā skaitļa 

function nobig(a: Array<number>): Array<number> {
    let biggest = a.reduce((acc, item) => {
        if (item > acc) return item
        else return acc
    }, 0)
    return a.splice(a[biggest], 1)

    // let biggest = []
    //  let na =[]
    //  for (let i = 0; i <= a.length - 1; i++) {
    //    if (a[i] >= na[0]) biggest.push(a[i])
    //    else na.push(a[i])
    // }
    // return na
}
console.log("nobig: ", nobig([4, 9, 0, 10, 7]))

// uzraksti, ka sarakstam tu nem nost no labas un pec tam kreisas puses lietas pamisus 
// kamer sarakstā ir zem 5 lietām
function five(a: Array<number>): Array<number> {
    for (let i = 0; i < a.length && a.length >= 5; i++) {
        if (i % 2 == 0) a.pop()
        else a.shift()
    }
    return a
}
console.log("five: ", five([1, 2, 3, 4, 5, 6, 7, 8]), five([8, 0, 9, 0, 0]))

// doti: saraksts ar skaitļiem un saraksts ar divu skaitļu tupļiem. 
// pirmajā sarakstā ir jāizdara modifikācijas no otrā saraksta tupļiem interpretējot tos kā tupļus ar indeksu un vērtību. 
// f([1,2,3], [[1, -2], [2, -3]]) = [1,-2,-3]

// modifs netiek izmainīts
// abos variantos funkcija (vai for kods) tiek izpildīts modifs.length reizes
// forā "modifs[i]" ir tas pats, kas forEachā "modif"
function indexValue(a: Array<number>, modifs: Array<[number, number]>): Array<number> {
    // for (let i = 0; i < modifs.length; i++) {
    //     a.splice(modifs[i][0], 1, modifs[i][1])
    // }
    modifs.forEach(modif =>
        a.splice(modif[0], 1, modif[1])
    )
    return a
}
console.log(
    "indexValue: ",
    indexValue([1, 2, 3], []),
    indexValue([1, 2, 3], [[2, -3]]),
    indexValue([1, 2, 3], [[1, -2], [2, -3]]),
    indexValue([1, 2, 3, 4, 5, 6, 7], [[1, -2], [2, -3], [0, 0], [6, 8], [6, 9]]),
)

// iepriekšējam uzdevumam uztaisi, ka ja kāds no indeksiem nav intervālā, 
// tad uztaisi, ka return type ir "Array<number> | string" un tiklīdz ko kā ir kļūda, uzreiz atgriezies no funkcijas un returno stringu "invalid index" kā kļūdas paziņojumu
// piezīme: "type1 | type2" nozīmē, ka tur var būt viens no diviem tipiem. vai nu tu atgriezīsi veiksmīgu rezultātu vai arī kļūdu

function many(things: Array<number>): void {
    things.forEach(t => console.log(t))
}
many([1, 2, 3, 4, 5])