/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]): number {
  // let sorted = array.sort((a, b) => a - b)
  // let a = 0
  // for (let i = sorted.length - 1; i >= 0; i--) {
  //   if (sorted[i] < sorted[sorted.length - 1]) {
  //     a = sorted[i]
  //     break
  //   }
  // }
  // return a

  let sorted = array.sort((a, b) => a - b)
  for (let i = sorted.length - 1; i >= 0; i--) {
    if (sorted[i] < sorted[sorted.length - 1]) return sorted[i]
  }
  return 0

  //return array[sorted.length - 2]

  //   let unique = []
  //   for (let i = 0; i <= sorted.length - 1; i++) {
  //     if (sorted[i] !== sorted[i + 1]) unique.push(sorted[i])
  //   }
  //   return unique[unique.length - 2]
}

export { secondLargest }
