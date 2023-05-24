/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

function isEven(n: number): Boolean {
  let str = n.toFixed(1)
  console.log(str)
  let clean = str.slice(0, str.indexOf("."))

  console.log(clean)
  if (
    clean[clean.length - 1] == "0" ||
    clean[clean.length - 1] == "2" ||
    clean[clean.length - 1] == "4" ||
    clean[clean.length - 1] == "6" ||
    clean[clean.length - 1] == "8"
  )
    return true
  else return false
}

export { isEven }
