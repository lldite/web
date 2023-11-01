/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str: string): string {
  let reverse: string = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i]
  }
  console.log(reverse)
  return reverse
}

function reverse2(str: string): string {
  let reverse = []
  for (let i = str.length - 1; i >= 0; i--) {
    reverse.push(str[i])
  }
  console.log(reverse)
  return reverse.join("")
}

export { reverse }
