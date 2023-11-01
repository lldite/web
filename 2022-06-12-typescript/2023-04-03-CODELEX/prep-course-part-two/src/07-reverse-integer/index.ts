/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number): number {
  let string = int.toString()
  let revString = ""
  // console.log("string", string)
  for (let i = string.length - 1; i >= 0; i--) {
    revString = revString + string[i]
  }
  // console.log("rev", revString)
  while (revString[0] == "0") {
    revString = revString.slice(1, revString.length)
  }
  // console.log("revv", revString)

  if (revString[revString.length - 1] == "-")
    return parseInt("-" + revString.slice(0, revString.length - 1))
  else return parseInt(revString)
}

export { reverse }

// parseInt("007") = 7 !!!!!
