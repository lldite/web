/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string): string {
  let sorted = str.split("").sort()
  let unique: Array<string> = []
  let bigArray = []
  //   for (let i = 0; i <= sorted.length - 1; i++) {
  //     if (sorted[i] !== sorted[i + 1]) unique.push(sorted[i])
  //   }
  sorted.forEach((value, index) => {
    if (value !== sorted[index + 1]) unique.push(value)
  })

  for (let j = 0; j <= unique.length - 1; j++) {
    let alike = []
    for (let i = 0; i <= sorted.length - 1; i++) {
      if (unique[j] == sorted[i]) alike.push(sorted[i])
    }
    bigArray.push(alike)
  }

  let mostCommon = bigArray.reduce((a, b) => (a.length > b.length ? a : b))

  return mostCommon[0]
}

export { maxChar }
