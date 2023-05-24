/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string): number {
  let vowel = "aeiouAEIOU"
  let array = []
  for (let i = 0; i <= vowel.length - 1; i++) {
    for (let j = 0; j <= s.length - 1; j++) {
      if (vowel[i] == s[j]) array.push(s[j])
    }
  }
  return array.length
}

export { vowels }
