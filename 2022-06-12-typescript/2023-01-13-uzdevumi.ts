// doti: saraksts ar skaitļiem un saraksts ar divu skaitļu tupļiem. 
// pirmajā sarakstā ir jāizdara modifikācijas no otrā saraksta tupļiem interpretējot tos kā tupļus ar indeksu un vērtību. 
// f([1,2,3], [[1, -2], [2, -3]]) = [1,-2,-3]

// modifs netiek izmainīts
// abos variantos funkcija (vai for kods) tiek izpildīts modifs.length reizes
// forā "modifs[i]" ir tas pats, kas forEachā "modif"

// function indexValue(a: Array<number>, modifs: Array<[number, number]>): Array<number> {
//     for (let i = 0; i < modifs.length; i++) {
//         a.splice(modifs[i][0], 1, modifs[i][1])
//     }
//     return a
// }
function indexValue(a: Array<number>, modifs: Array<[number, number]>): Array<number> | string {
    for (let i = 0; i < modifs.length; i++) {
        if (modifs[i][0] >= 0 && modifs[i][0] < a.length)
            a.splice(modifs[i][0], 1, modifs[i][1])
        else
            return "bad index"
    }
    return a
}
console.log(
    "indexValue: ",
    indexValue([1, 2, 3], []),
    indexValue([1, 2, 3], [[2, -3]]),
    indexValue([1, 2, 3], [[1, -2], [2, -3]]),
    indexValue([1, 2, 3, 4, 5, 6, 7], [[1, -2], [2, -3], [0, 0], [6, 8], [6, 9]]),
    indexValue([1, 2, 3], [[1, -2], [8, -3]]),
) 

// iepriekšējam uzdevumam uztaisi, ka ja kāds no indeksiem ir ārpus saraksta indeksu intervāla, 
// tad uztaisi, ka return type ir "Array<number> | string" un tiklīdz ko kā ir kļūda, uzreiz atgriezies no funkcijas un returno stringu "invalid index" kā kļūdas paziņojumu
// piezīme: "type1 | type2" nozīmē, ka tur var būt viens no diviem tipiem. vai nu tu atgriezīsi veiksmīgu rezultātu vai arī kļūdu

// bonus mācību stunda/atgādinājums:
// ja foram nevienu no lietām nenorāda `for (;;) { code }`, tad tu vari vnk bezgalīgi izpildīt to pašu kodu — radīt bezgalīgu ciklu. cikls — atkārtojošs kods — ir for essence. 
// `for (init; cond; after) { code }` tad var vienkāršot, lietojot šo konstrukciju, kura nekad nebeidzas `{ init; for (;;) { if (!cond) break; code; after } }`
// te arī par to ir rakstīts: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

function foriki() {
    for (let i = 3; i < 100; i = i * 2) {
        console.log(`i šajā ciklā ir ${i}`)
    }

    {
        let i = 3
        for (; ;) {
            if (!(i < 100)) break
            console.log(`i šajā ciklā ir ${i}`)
            i = i * 2
        }
    }

    {
        let i = 3
        for (; ;) {
            if (i < 100) {
                console.log(`i šajā ciklā ir ${i}`)
                i = i * 2
            } else break
        }
    }
    // for (;;) {} == for (;true;) {}
}
// foriki()

// dots: n: number;
// atgriez:
//   tupli ar sarakstiem, kuriem sākotnējā vērtība ir [[], []] un ciklā n reizes izpildi šīs instrukcijas:
//   pieskaiti vienam (nākamreiz otram) sarakstam beigās no tupļa otra saraksta summu (tukša saraksta summa ir 0)

// function tuuplsum(n: number): [Array<number>, Array<number>] {
//     let tuupl: [Array<number>, Array<number>] = [[1], [1]]
//     for (let i = 0; i < n; i++) {
//         if (i % 2 == 0) {
//             tuupl[0].push(tuupl[1].reduce((a, b) => a + b, 0))
//         } else {
//             tuupl[1].push(tuupl[0].reduce((a, b) => a + b, 0))
//         }
//     }
//     return tuupl
// }
function tuuplsum(n: number): [Array<number>, Array<number>] {
    let tuupl: [Array<number>, Array<number>] = [[1], [1]]
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            let sum = 0
            for (let j = 0; j < tuupl[1].length; j++) { sum = sum + tuupl[1][j] }
            tuupl[0].push(sum)
        } else {
            let sum = 0
            for (let j = 0; j < tuupl[0].length; j++) { sum = sum + tuupl[0][j] }
            tuupl[1].push(sum)
        }
    }
    return tuupl
}

console.log(
    "tuuplsum: ",
    JSON.stringify(tuuplsum(5)) == JSON.stringify([[1, 1, 3, 8], [1, 2, 5]]),
    JSON.stringify(tuuplsum(8)) == JSON.stringify([[1, 1, 3, 8, 21], [1, 2, 5, 13, 34]])
)