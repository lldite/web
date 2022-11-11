// console.log("lācīc")
const number = 10
const numbers = Array.from(Array(number).keys())
// console.log(numbers.map(x => ({zivs: x, govs: (5 - x)})))
// console.log(numbers.map(x => {
//     let y = 10 - x * 2
//     return {
//         zivs: [x, "x", 7],
//         govs: (5 - x),
//         kaija: x > 5 ? "x ir lielāks par 5" : "x nav lielāks par 5",
//     }
// }))

// console.log("?:", true ? 3 : 1, false ? 3 : 1)

function f(x: number, y: number): number {
    return x + y
}

// console.log("f calls:", f(5, 9), f(8, 4))

function sum(ns: Array<number>): number {
    let s = 0   
    ns.forEach(n => s = s + n)
    return s
}

console.log(1)
console.log("summas:", sum([1,2,3]), sum([6, 9, 12, -27]))

function biggest(ns: Array<number>): number {
    let b = 0
    ns.forEach(n => {
        // if (b > n) {} else b = n // refactored
        if (n >= b) b = n
    })
    return b
}

// console.log(
//     "izprintēt lielāko:", 
//     biggest([-2, 22, 9.09, 9]), 
//     biggest([5, 7, 9, 6])
// )

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
// console.log(twoarrays([-9, -4, 6, 55, -89, 5, -32, 1, -10, 8]))

function evenOddList(n: number): [Array<number>, Array<number>] {
    let odd = [] as Array<number> 
    let even: Array<number> =[]
    const numbers = Array.from(Array(n).keys()).map(n => n + 1) // = [1,2,...n]
    numbers.forEach(n => {
        if (n % 2 == 0) even.push(n)
        else odd.push(n)
    })
    return [odd, even]
}

// console.log(evenOddList(5), [[1,3,5], [2,4]])

function rotateArray<A>(a: Array<A>): Array<A> {
    let newarray = a.slice(1)
    newarray.push(a[0])
    return newarray
}

// console.log(rotateArray([1,2,3,4,5]), [2,3,4,5,1])

function rotateArray2<A>(a: Array<A>): Array<A> {
    return rotateArray(rotateArray(a))

}

// console.log(rotateArray2([1,2,3,4,5]), [3,4,5,1,2])

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

    // let out: Array<number> = []
    // list.forEach((element, index) => { // element = 1, index = 0
    //     if (index < number) out.push(number); else out.push(element)
    //     // if (index < number) list[index] = number
    //     // if (index < number) element < number
    // })
    // return out

    // list.forEach((element, index) => {
    //     if (index < number) list[index] = number
    // })
    // return list

    const numbers = Array.from(Array(number).keys()).map(_ => number)
    return numbers.concat(list.slice(list.length - number))
}

let list = [8, 7, 6, 5]
console.log("list", list)
console.log("replace", replace(list, 2))
console.log("list", list)

// fill(3) = [3, 3, 3]
// fill(5) = [5, 5, 5, 5, 5]
function fill<A>(n: number, a: A): Array<A> {
    let list = []
    for(let i = 0; i < n; i++) {
        list.push(a)
    }
    // init = "i = 0"
    // cond = "i < n"
    // kods = "list.push(n)"
    // next = "i++"
    return list
}

console.log('fill', fill(3, 0), fill(5, "x"))

// fillSquare(5) = [[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]]
function fillSquare(n: number): Array<Array<number>> {
    let list: Array<number> = []
    for(let i = 0; i < n; i++) {
        list.push(n)
    }

    let bigList: Array<Array<number>> = []
    for(let i = 0; i < n; i++) {
        bigList.push(list)
    }
    return bigList
}

console.log('fillSquare', fillSquare(5))

//evenList(7) = [14, 12, 10, 8]
//evenList(6) = [12, 10, 8, 6]
function evenList(n: number): Array<number> {
    let list: Array<number> = []
    for(let i = n * 2; i >= n; i = i - 2) {
        list.push(i)
    }
    return list
}
console.log("evenList:", evenList(6), evenList(7), evenList(11))

// ===== 2022.07.03

//n=4 => sum=1+2+3+4
function summa(n: number): number {
    let list: Array<number> = []
    for(let i = 0; i <= n; i++) {
        list.push(i)
    }
    return list.reduce((a, b) => a + b)
}
console.log("summa: ", summa(4), summa(10))

//[0, 0, step, -step, 2 * step, -2 * step, ...]; end = 6, step = 2 => [0, 0, 2,-2, 4, -4]
function endStep(end: number, step: number): Array<number> {
    let list = [0, 0]
    for(let i = step; i < end; i = i * 2) {
        list.push(i)
        list.push(-i)
        //list.push(i, -i)
    }
    return list
}
console.log("endStep: ", endStep(6, 2), endStep(8, 4), endStep(10, 2))

//Saņemot skaitli n, atgriezt 1 ar n nullēm galā (pieņemsim, ka n <= 10). 
//Piemērs: n = 5, rezultāts = 100000. (Sākumstāvoklis = 1, izmaiņa ir i = i * 10 un vai nu next vai kodu var izlaist!)
function nulls(n: number): number {
    let x = 1
    // for(let i = 9 + 1; i <= 9 + n; i++) {
    for(let i = 1; i <= n; i++) {
        x = x * 10
    }
    return x
    //return Math.pow(10, n)
}
console.log("nulls: ", nulls(5), nulls(3))

//Saņemot skaitli n, atgriezt sarakstu ar n tukšiem sarakstiem. 
//Piemērs: n = 5, rezultāts = [[], [], [], [], []]. 
//Visam labāk pierakstīt tipus manuāli kā vingrinājumu. 
//Par nosacījumu izmantot ārpus for redzamības loka (scope) definētā saraksta garumu nevis pašu for mainīgo!
function arrays(n: number): Array<Array<number>> {
    let array = []
    let bigArray = []
    for(let i = 1; i <= n; i++) {
        bigArray.push(array)
    }
    return bigArray
}
console.log("arrays: ", arrays(3), arrays(6))

// ===== 2022.07.05.

//a = [5, 3, 1] => f(a)= [4, 2, 0]
function minusOne(a: Array<number>): Array<number> {
    for(let i: number = 0; i < a.length; i++) {
        a[i] = a[i] - 1
    }
    return a
    //let newArray: Array<number> = a.map(n => n - 1)
    //return newArray
}
let moa = [5,4,2]
console.log('minusOne1', moa)
console.log('minusOne2', minusOne(moa))
console.log('minusOne3', moa)
console.log('minusOne4', minusOne([3, 2, 1]), minusOne([10, 5, 9, 1]))

//Saņemot masīvu ar skaitļiem ns (short for numbers), pieskaiti katram skaitlim visa masīva ns sumu un atgriezt to. 
//Piemērs: f([6, 8, 1, -2]) = [19, 21, 14, 11]. 
//“ns” saturam jāpaliek tādam pašam! 
//Iepriekšējo uzdevumu funkcijas drīkst izmantot.
function sumOfArray(ns: Array<number>): Array<number> {
    let summa = ns.reduce((a, b) => a + b)
    for(let i: number = 0; i < ns.length; i++) {
        ns[i] = ns[i] + summa
    }
    return ns
    // let summa = ns.reduce((a, b) => a + b)
    // let newArray = ns.map(n => n + summa)
    // return newArray
}
console.log("sumOfArray: ", sumOfArray([1, 2, 3]))

//Saņemot masīvu ar skaitļiem ns, liec tos jaunā masīva sākumā, ja tie ir negatīvi, bet beigās, ja tie ir pozitīvi. 
//Atgriez jauno masīvu. Piemērs: [5, -7, 4, 3, -1] => [-1, -7, 5, 4, 3].
//https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript 
function negPoz(ns: Array<number>): Array<number> {
    let newArray = []
    for(let i: number = 0; i < ns.length; i++) {
        if (!(ns[i] < 0)) {
            newArray.splice(newArray.length, 0, ns[i]) 
        } else {
            newArray.splice(0, 0, ns[i]) 
        }
    }
    return newArray
}
console.log("negPoz; ", negPoz([3, 4, -1, -9]), negPoz([5, -7, 4, 3, -1]))

//Saņemot masīvu ar skaitļiem, sasummē un atgriez visu skaitļu summu no labās puses. 
//Piemērs: [5, 6, 0, 7, 6] => 24.
function arraySum(a: Array<number>): number {
    let summa = 0
    // for(let i = a.length - 1; i >= 0; i--) {
    //     summa = summa + a[i]
    // }
    let i = a.length - 1
    for(;;) {
        if (!(i >= 0)) {
            break
        }
        summa = summa + a[i]
        i--
    }
    return summa
    // let s = a.reverse().reduce((a, b) => a + b)
    // return s
}
console.log("arraySum: ", arraySum([1, 2, 3]))

//Saņemot masīvu ar skaitļiem, sasummē un atgriez visu skaitļu summu no labās puses, :1057:36)
//bet beidz summēt (apstādinot ciklu ar apgalvojumu “break”), ja skaitlis ir mazāks par 1. 
//Piemērs: [5, 6, 0, 7, 6] => 13. https://www.w3schools.com/js/js_break.asp 
function sumRightWithBreak(a: Array<number>): number {
    let summa = 0
    for(let i = a.length - 1; i >= 0; i--) {
        if (a[i] < 1) {
            break
        }
        summa = summa + a[i]
    }
    return summa
}
console.log("sumRightWithBreak: ", sumRightWithBreak([4, 5, 6, -1, 9, 2]))

//(Sarežģīts, jāizmanto ir gan splice, gan break.) 
//Saņemot masīvu ar skaitļiem ns, izveido jaunu masīvu un skaitļus no ns liec jaunajā masīvā pa vienam, 
//liekot jauno tieši pirms pirmā lielākā skaitļa salīdzinot ar esošo (no kreisās puses). 
function oneByOne(ns: Array<number>): Array<number> {
    let newArray = []
    for(let i = 0; i <= ns.length - 1; i++) {
        let j: number = 0
        for (; j < newArray.length; j++) {
            if (ns[i] <= newArray[j]) {
                break
            }
        }
        newArray.splice(j, 0, ns[i])
    }
    return newArray
}

console.log('oneByOne:', oneByOne([1, 10, 5, 3, 7, 2, 6, 4, 9, 8, 11]))

//atrodi lielāko skaitli sarakstā
function biggestNumber(a:Array<number>): number {
    let biggest = 0 
    for(let i = 0; i<= a.length - 1; i++) {
        if (a[i] > biggest) {
            biggest = a[i]
        } else {
            biggest
        }
    } 
    return biggest
}
console.log("biggestNumber: ", biggestNumber([4,3,2]), biggestNumber([5, 1, 8, 0, 9, 7]))

//atriez sarakstu bez lielākā skaitļa 
function withoutBiggestNumber(a:Array<number>): Array<number> {
    let biggest = 0
    for(let i = 0; i<= a.length - 1; i++) {
        if (a[i] > biggest) {
            biggest = a[i]
        } else {
            biggest
        }
    }
    a.splice(a.indexOf(biggest), 1) //šīs rindiņas rezultāts ir jauns Array, kas satur izņemto vērtību (biggest) => [biggest]
    return a //atgriež izmainītu a jeb a bez biggest vērtības
}
function secondBiggest(a: Array<number>): number {
    withoutBiggestNumber(a) //paņem oriģinālo a un atgriež a1
    return biggestNumber(a) //paņem a1 un atgriež number(biggest)
}
console.log("secondBiggest: ", secondBiggest([1, 3, 8, 7, 9]), secondBiggest([4, 1, 10, 7, 33, 32]))

function slice<A>(xs: Array<A>, start: number, end: number): Array<A> {
    let a = []
    if (start < end) {
        for(let i = start; i <= end; i++) {
            a.push(xs[i])
        }
        return a
    } else {
        for(let i = end; i <= start; i++) {
            a.push(xs[i])
        }
       return a.reverse()
    }

    // for(let i = 0; i<= xs.length - 1; i++) {
    //    if(i >= start && i <= end) {
    //         a.push(xs[i])
    //    } else {
    //        []
    //    }
    // }
}
console.log('slice', slice<string>(['⭐', '💜', '*', '🙃', '♾'], 2, 3))
console.log('slice', slice<number>([9, 8, 7, 6, 5, 4, 3], 1, 4))
console.log('slice', slice<string>(['⭐', '💜', '*', '🙃', '♾'], 4, 1))
console.log('slice', slice<number>([9, 8, 7, 6, 5, 4, 3], 5, 2))

// Uztaisi 2d sarakstu no skaitļiem n, m tā lai visos būtu nulles
function replaceZero(n: number, m: number): Array<Array<number>> {
    let array = []
    let newArray = []
    array.push(n, m)
    let zeros = array.map(x => 0)
    newArray.push(zeros)
    return newArray
}
console.log("replaceZero: ", replaceZero(1, 2))

// outputā vajag būt n * m lielam masīvam, pildītam ar ar nullēm
// priekš replaceZero(2, 3) sanāk [[0, 0], [0, 0], [0, 0]]
// priekš replaceZero(4, 2) sanāk [[0, 0, 0, 0], [0, 0, 0, 0]]
function replaceNull(n: number, m: number): Array<Array<number>> {
    // let an = []
    // let am = []
    // for(let i = 1; i <= n; i++) {
    //     an.push(0)
    // }
    // for(let i = 1; i <= m; i++) {
    //     am.push(an)
    // }
    // return am
    return Array.from(Array(m).keys()).map(_ => 
        Array.from(Array(n).keys()).map(_ => 0)
    )    
} 
console.log("replaceNull: ", replaceNull(2, 3), replaceNull(4, 2))

// function gaga(n: number, m: number): Array<Array<number>> {
//     let array = []
//     let newArray = []
//     array.push(n)
//     array.reduce(a => a, a)
// }

// replaceIdx([0, 0, 0, 0, 0], 2, 5) = [0, 0, 5, 0, 0]
function replaceIdx(list: Array<number>, i: number, n: number): Array<number> {
    list[i] = n
    return list
}
let rilist = [0, 0, 0, 0, 0]
console.log('replaceIdx', replaceIdx(rilist, 2, 5))
console.log('replaceIdx rilist', rilist)

function arrayDiagonal(n: number): Array<Array<number>> {
    let arrayn = Array.from(Array(n).keys())
    let arraym = Array.from(Array(n).keys()).map((e, i) => arrayn.map(a => a + i))
    return arraym
}
console.log("arrayDiagonal: ", arrayDiagonal(3))

// Ja tev iedod array: Array<Array<A>>, un p: Point (nokopē point tipu) un a: A, izmaini "array at p to a".
type Point = [number, number] // x, y
type Row = Array<number>
type Grid = Array<Row>
let grid: Grid = [
    [9, 8, 7] as Row,
    [8, 7, 6] as Row,
    [7, 6, 5] as Row,
]

// Grid = Array<Row> = Array<Array<number>>

function replaceGrid(a: Grid, p: Point, n: number): void {
  
}
console.log('grid before', grid)
replaceGrid(grid, [1, 1], 0)
console.log('grid after', grid)

// Leldes eglīte :)

function fillArray<A>(n: number, a: A): Array<A> {
    return Array.from(Array(n).keys()).map(_ => a)
}
console.log('fillArray(3, ":)") =', fillArray(3, ':)'))

// Uztaisi eglīti priekš n: number un izprintē. 
function eglite(n: number): Array<Array<number>> {
    let array = Array.from(Array(n).keys()).map(n => "-")
    let arrayBig =[]
    for (let i = 1; i <= n; i++) {
    arrayBig.push(array)
    }
    return arrayBig
    
    //for(let r = 0; r <= n - 1; r++) {
        //let array = Array.from(Array(n).keys()).map(
            //if(array[r] == n - 1) {
              //array[r] => "*"
            //} else {
            //array[r] => "_"
           // }
       // )
}
console.log("eglite: ", eglite(5))

function sumToN(n: number): number {
    let a = 0
    for(let i = 1; i <= n; i++){
        a = a + i
    }
    return a
}
console.log("sumToN: ", sumToN(5))

function summaReduce(n: number): number {
    let list = Array.from(Array(n).keys()).map( a => a + 1)
    return list.reduce((a, b) => a + b)
}
console.log("summaReduce: ", summaReduce(5))