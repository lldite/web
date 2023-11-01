/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(words: string) {
    console.log("string", words)
    let arraySorted = words
      .split(/[ \t\n]/)
      .map((str) => str.trim().toLowerCase())
      .sort()
    let arrayUnique = []
    console.log("sorted", arraySorted)
    for (let i = 0; i < arraySorted.length; i++) {
      if (arraySorted[i] !== arraySorted[i + 1])
        arrayUnique.push(arraySorted[i])
    }
    console.log("unique", arrayUnique)

    let bigArray = []
    for (let i = 0; i < arrayUnique.length; i++) {
      let alike = []
      for (let j = 0; j < arraySorted.length; j++) {
        if (arrayUnique[i] == arraySorted[j]) alike.push(arraySorted[j])
      }
      bigArray.push(alike)
    }
    console.log("big", bigArray)

    let wordCount: Array<[string, number]> = []
    for (let i = 0; i <= bigArray.length - 1; i++) {
      if (bigArray[i][0] !== "")
        wordCount.push([bigArray[i][0], bigArray[i].length])
    }
    console.log("Count", wordCount)
    return Object.fromEntries(wordCount) // !!
  }
}

export { Words }

// objects
// let o: { age: number; adult: Boolean } = { age: 20, adult: false } // make
// console.log(o.age, o["age"], o.adult, o["adult"]) // izkasīšana dažādos veidos
// let o2: { age: number; adult: Boolean } = { age: o.age, adult: o.adult } // remake
