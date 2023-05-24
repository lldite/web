/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number) {
  let array = []
  for (let i = 1; i <= n; i++) {
    array.push(
      Array(n - i)
        .fill(" ")
        .concat(Array(i * 2 - 1).fill("#"))
        .concat(Array(n - i).fill(" "))
        .join("")
    )
  }
  console.log(array)
  let arrayJoined = array.join("\n")
  console.log(arrayJoined)

  // console.log(
  //   Array(n - i)
  //     .fill(" ")
  //     .join("") +
  //     Array(i * 2 - 1)
  //       .fill("#")
  //       .join("") +
  //     Array(n - i)
  //       .fill(" ")
  //       .join("")
  //)
}

export { pyramid }
