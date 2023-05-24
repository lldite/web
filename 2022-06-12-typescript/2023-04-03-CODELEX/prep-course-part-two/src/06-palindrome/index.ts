/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function palindrome(str: string): Boolean {
  let reverse = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i]
  }
  console.log(reverse)
  return reverse == str ? true : false
}

export { palindrome }
