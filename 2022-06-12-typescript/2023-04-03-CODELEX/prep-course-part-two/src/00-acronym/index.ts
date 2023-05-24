/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string): string {
  let acronym: Array<string> = []
  let newArr = input
    .split(/[" "-]/)
    .map((string) =>
      string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/, "").toUpperCase()
    )

  newArr.map((string) => {
    acronym.push(string[0])
  })

  return acronym.join("")
}

export { parse }
