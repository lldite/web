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