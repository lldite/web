console.log(3)
// 00

/**
 * The first thing we will learn are functions.
 * Since you'll be relaying on using functions throughout the whole course,
 * it's important to get the basics down. For that we'll use exercises 00 to 15.
 * If you'd like to do some more reading on functions, here are some resources:
 *  - https://www.w3schools.com/js/js_functions.asp
 *  - https://javascript.info/function-basics
 * and if you prefer videos:
 *  - https://www.youtube.com/watch?v=xUI5Tsl2JpY (Modern JavaScript Tutorial #4 - Functions)
 */

// funkcija ir darbības apraksts
// == salidzina tikai vērtības "1" == 1 => true
// === salīdzina arī tipus

const helloWorld = function () {
  return "Hello World"
}
console.log("00: ", helloWorld()) // Expected output: "Hello World"

// 01

function addNumbers(a: number, b: number, c: number): number {
  return a + b + c
}
const result = addNumbers(1, 3, 4)
console.log("01: ", result) // Expected output: 8

// 02

function adDNumbers(a: number, b: number, c: number): number {
  return a + b + c
}
const resuult = adDNumbers(1, 3, 4)
console.log("02: ", resuult) // Expected output: 8

// 03

function adding(a: number, b: number, c: number): number {
  return a + b + c
}
const r = adding(1, 3, 4)
console.log("03: ", r) // Expected output: 8

// 04

function trimWord(word: string): string {
  let w = word.trim()
  return w
}
console.log("04: ", trimWord("  CODELEX ")) // Expected output: "CODELEX"

// 05

const isHappy = true
function mood(isHappy: boolean): string {
  if (isHappy) {
    return "I am happy"
  } else {
    return "I am not happy"
  }
}
console.log("05: ", mood(isHappy)) // Expected output: "I am happy"

// 06

function trimW(word: string): string {
  return word.trim()
}
console.log("06: ", trimW("  CODELEX ")) // Expected output: "CODELEX"

// 07

function trimming(word: string): string {
  return word.trim()
}
console.log("07: ", trimming("  CODELEX ")) // Expected output: "CODELEX"

// 08

function getNumber() {
  return Math.random() * 10
  //return Math.random() * (500 - 100) + 100 // iedod ciparu range 100 - 499
}
const result08 = getNumber() // call the function created above and put the result inside the variable
console.log("08: ", result08) // Expected output: {random number}

// 09

function multiply(a: number, b: number, c: number): number {
  return a * b * c
}
const result09 = multiply(1, 3, 4)
console.log("09: ", result09) // Expected output: 12

// 10

function s(w1: string, w2: string): string {
  return w1.concat(" ").concat(w2)
  // return w1.concat(" ", w2)
}
console.log("10: ", s("hello", "world")) // Expected output: "hello world"

// 11

function concatenate(firstWord: string, secondWord: string, thirdWord: string) {
  return firstWord.concat(" ", secondWord).concat(" ", thirdWord)
  //return `${firstWord} ${secondWord} ${thirdWord}`
  //return firstWord + " " + secondWord + " " + thirdWord
}
console.log("11: ", concatenate("Hello", "from", "CODELEX")) // Expected output: "Hello from CODELEX"

// 12

function truncateString(s: string, n: number): string {
  return s.slice(0, n)
}
console.log("12: ", truncateString("CODELEX", 4)) // Expected output: CODE

// 13
// Create a function called isBlank, which checks if passed string is blank or not
function isBlank(s: null | undefined | number | string): boolean {
  // TS tipus atdala ar |
  if (s == "" || s == " " || s == null || s == undefined) {
    return true
  } else {
    return false
  }
}
console.log(
  "13: ",
  isBlank(null), // Expected output: true
  isBlank(""), // Expected output: true
  isBlank(" "), // Expected output: true
  isBlank("abc"), // Expected output: false
  isBlank(" abc ")
) // Expected output: false

function isBlank2(variable: string | null | undefined) {
  if (variable === null) {
    return true
  }
  if (variable === undefined) {
    return true
  }
  if (variable === " ") {
    return true
  }
  if (variable === "") {
    return true
  } else {
    return false
  }
}

function isBlank3(value: null | undefined | number | string): boolean {
  // TS tipus atdala ar |
  return typeof value === "string" ? !value.trim() : !value
}

function isBlank4(
  value: null | undefined | number | string | Array<unknown>
): boolean {
  // TS tipus atdala ar |
  return typeof value === "string" ? !value.trim() : !value
}

function isBlank5(s: any): boolean {
  let x = 0
  x = +s
  if (x != 0) return false
  else return true
}

// 14
// const repeatString = () => {}
function repeatString(s: string, n: number): string {
  let newArray = []
  for (let i = 1; i <= n; i++) {
    newArray.push(s)
  }
  return newArray.join("")
}
console.log(
  "14: ",
  repeatString("a", 4), // Expected output: 'aaaa'
  repeatString("b", 5)
) // Expected output: 'bbbbb'

// 15

function greatest(x: number, y: number): number {
  return Math.max(x, y)
  // if (x > y) {
  //   return x
  // } else {
  //   return y
  // }
}
console.log(
  "15: ",
  greatest(1, 2), // Expected output: 2
  greatest(5, 2)
) // Expected output: 5

//Go back to exercise 15-greatest-number and refactor your previous solution so that
// the function can accept unlimited number of arguments and still return the largest number.
function greatest2(...n: Array<number>): number {
  return n.reduce((item, next) => Math.max(item, next))
}
console.log(
  "15*: ",
  greatest2(1, 2), // Expected output: 2
  greatest2(5, 2), // Expected output: 5
  greatest2(9, 0, 10, 99, 8, 1) // 99
)

// 16

// Let's try to use our knowledge about functions to try and build a tool you could use in real life.
// Sales Tax
// A business requires a program that calculates how much sales tax to charge
// Sales tax is 21% of the price of the product
// You are allowed to change only this function

// type objectType = {
//   product: string
//   price: number
//   salesTax: number
//   total: number
// }
// function calculateSalesTax(value: number, tax: number): objectType {
//   let salesTaxx = parseFloat((value * tax).toFixed(2))
//   let totall = parseFloat((value + salesTaxx).toFixed(2))

//   let object = {
//     product: "You don't know JS",
//     price: value,
//     salesTax: salesTaxx,
//     total: totall,
//   }
//   return object
// }
// console.log("16: ", calculateSalesTax(19.99, 0.21))

function calculateSalesTax(price: number): number {
  let salesTax = price * 0.21
  //let salesTax = (price * 0.21).toFixed(2)
  return salesTax
}
const product = "You don't know JS"
const price = 19.99
const salesTax = calculateSalesTax(price)

console.log(
  "16: " + "\n",
  "Product: " + product + "\n",
  "Price: £" + price + "\n",
  "Sales tax: £" + salesTax.toFixed(2) + "\n",
  "Total: £" + (price + salesTax.toFixed(2))
)

/* Expected output:
    > Product: You don't know JS
    > Price: £19.99
    > Sales tax: £4.20
    > Total: £24.19
*/

// 17
/**
 * Currency Formatting
 *
 * The business has informed you that prices must have 2 decimal places
 * They must also start with the currency symbol
 * Write a function that transforms numbers into the format £0.00
 */

// You are allowed to change only this function
function formatCurrency(n: number): string {
  return "£" + n.toFixed(2)
}
console.log(
  "17: " + "\n",
  "Product: " + product + "\n",
  "Price: " + formatCurrency(price) + "\n",
  "Sales tax: " + formatCurrency(salesTax) + "\n",
  "Total: " + formatCurrency(price + salesTax)
)

/* Expected output:
    > Product: You don't know JS
    > Price: £19.99
    > Sales tax: £4.20
    > Total: £24.19
*/

// function calculateSalesTax2(price: number): string {
//   let salesTax = parseFloat((price * 0.21).toFixed(2))
//   let newString = "£" + salesTax.toString()
//   return newString
// }
// console.log(calculateSalesTax2(19.99))

// 18
/**
 * Currency Formatting
 *
 * The business is breaking out into a new market and need to convert prices to USD
 * Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
 */

// You are allowed to change only this function
function convertToUSD(price: number): number {
  return parseFloat((price * 1.4).toFixed(2))
}
const product2 = "You don't know JS"
const price2 = 19.99
const priceInUSD = convertToUSD(price)

console.log(
  "18: " + "\n",
  "Product: " + product + "\n",
  "Price: $" + priceInUSD
)
/* Expected output:
    > Product: You don't know JS
    > Price: $27.99
*/

// 19
/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */
// You are allowed to change this function
//function convertToUSD2(price) {}
// You are allowed to change this function

function convertToBRL(price: number): number {
  return price * 6.3
}

function convertPrice(price: number, rate: number): number {
  return price * rate * 1.01
}

function addfee(price: number, fee: number): number {
  return price + price * fee
}
//const priceInBRL = addfee(convertToBRL(price, 6.3), 0.01)
function foreignTrans(price: number, excRate: number): number {
  if (excRate == 1) {
    return price
  } else {
    return price * excRate + (price * excRate) / 100
  }
}
const price3 = 12.5
const priceInUSD3 = convertToUSD(price3)
const priceInBRL = convertToBRL(price3)

console.log(
  "19: " + "\n",
  "Product: " + product + "\n",
  "Price: $" + priceInUSD + "\n",
  "Price: R$" + priceInBRL
)
/* Expected output:
    > Product: You don't know JS
    > Price: $?
    > Price: R$?
*/

// 20
/**
 * So far you've been working with numeric and textual data using JS data types - numbers
 * and strings. But there are many more data types in JS. One of them is arrays.
 * Here are a few resources that might help to better understand what arrays are for:
 *  - https://www.w3schools.com/js/js_arrays.asp
 *  - https://javascript.info/array
 */
function stringToArray(a: Array<string>): Array<string> {
  let newA = a[0].split(" ")
  return newA
}
console.log("20: ", stringToArray(["John Doe"])) // Expected output: ['John', 'Doe']

function stringToArray2(arr: Array<string> /*string[]*/) {
  const result: string[] = []
  for (let i = 0; i < arr.length; i++) {
    const element: string = arr[i]
    const name: Array<string> = element.split(" ")
    for (let j = 0; j < name.length; j++) {
      const element: string = name[i]
      result.push(element)
    }
  }
  return result
}

// 21

// Funkcija iekš funkcijas:

// function tidyUpString(mentors: Array<string>): Array<string> {
//   let a: Array<string> = []
//   let lasta: Array<string> = []
//   for (let i = 0; i < mentors.length; i++) {
//     let ns = mentors[i].trim().toLowerCase().replace("/", "")
//     a.push(ns)
//   }
//   function capitalise(a: Array<string>): void {
//     for (let i = 0; i < a.length; i++) {
//       lasta.push(a[i][0].toUpperCase() + a[i].slice(1))
//     }
//   }
//   capitalise(a)
//   return lasta
// }

// Funkcija zem funkcijas:

// function capitalise(a: Array<string>): Array<string> {
//   let lasta: Array<string> = []
//   for (let i = 0; i < a.length; i++) {
//     lasta.push(a[i][0].toUpperCase() + a[i].slice(1))
//   }
//   return lasta
// }
// function tidyUpString(mentors: Array<string>): Array<string> {
//   let a: Array<string> = []
//   for (let i = 0; i < mentors.length; i++) {
//     let ns = mentors[i].trim().toLowerCase().replace("/", "")
//     a.push(ns)
//   }
//   return capitalise(a)
// }
// /Daniel -> daniel -> Daniel

// Viss vienā loopā:

// function tidyUpString(mentors: Array<string>): Array<string> {
//   let a: Array<string> = []
//   for (let i = 0; i < mentors.length; i++) {
//     let ns = mentors[i].trim().toLowerCase().replace("/", "")
//     let ns2 = ns[0].toUpperCase() + ns.slice(1)
//     a.push(ns2)
//   }
//   return a
// }

// Ar mapu:

function tidyUpString(mentors: Array<string>): Array<string> {
  return mentors.map((mentor) => {
    let tidied = mentor.trim().toLowerCase().replace("/", "")
    return tidied[0].toUpperCase() + tidied.slice(1)
  })
}
const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "]
console.log("21: ", tidyUpString(mentors))

function tidyUpString2(mentors2: Array<string>): Array<string> {
  let newarray = mentors2.map((mentor) =>
    mentor.trim().toLowerCase().replace("/", "")
  )
  let tidied = newarray.map(
    (mentor) => mentor[0].toUpperCase() + mentor.slice(1)
  )
  return tidied
}
const mentors2 = ["/Daniel ", "irina ", " Gordon", "ashleigh "]
console.log("21: ", tidyUpString2(mentors2))

function tidyUpString3(mentor: string): string {
  return mentor.trim().toLowerCase().replace("/", "")
}

function capitalize3(mentor: string): string {
  return mentor[0].toUpperCase() + mentor.slice(1)
}

const mentors3 = ["/Daniel ", "irina ", " Gordon", "ashleigh "]
console.log(
  "21: ",
  mentors3.map((m) => tidyUpString3(m)).map((m) => capitalize3(m))
)
console.log("21: ", mentors.map(tidyUpString3).map(capitalize3))
// console.log(mentorsTidy) // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]

// ========== 22 ==========
const letters = ["a", "n", "c", "e", "z", "f"]
let sortedLetters = letters.sort() // You are allowed to change only this line
console.log("22: ", sortedLetters) // Expected output: [ 'a', 'c', 'e', 'f', 'n', 'z' ]

// ========== 23 ==========
/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

function smallest(a: Array<number>): number {
  let smallest = 0
  return a.reduce((acc, next) => {
    if (acc < next) return acc
    else return next
  })
}

function smallest2(a: Array<number>): number {
  return a.reduce((acc, next) => Math.min(acc, next))
}

function biggest(a: Array<number>): number {
  return a.reduce((acc, next) => {
    if (acc > next) return acc
    else return next
  })
}
function biggest2(a: Array<number>): number {
  return a.reduce((acc, next) => Math.max(acc, next))
}
console.log(
  "23: ",
  smallest([1, 2, 3, 4, 5]),
  smallest([9, -3, 6]),
  smallest2([1, 2, 3, 4, 5]),
  smallest2([9, -3, 6]),
  biggest([1, 2, 3, 4, 5]),
  biggest([9, -3, 6]),
  biggest2([1, 2, 3, 4, 5]),
  biggest2([9, -3, 6])
)
// console.log(min([1, 2, 3, 4, 5])) // Expected output: 1
// console.log(min([9, -3, 6])) // Expected output: -3
// console.log(max([1, 2, 3, 4, 5])) // Expected output: 5
// console.log(max([9, -3, 6])) // Expected output: 9

// ========== 24 ==========

function onlyTheAces(arr: Array<string>): Array<string> {
  let ace = "Ace"
  let newArr: Array<string> = []
  arr.map((a) => {
    if (a == ace) newArr.push(a)
  })
  return newArr
}
function onlyTheAces2(arr: Array<string>): Array<string> {
  return arr.filter((a) => a == "Ace")
}
console.log(
  "24: ",
  onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"]),
  onlyTheAces2(["Ace", "King", "Queen", "Jack", "Ace"])
) // Expected result: ['Ace', 'Ace']

// ========== 25 ==========

function add(n: number, m: number): number {
  return n + m
}

function subtract(n: number, m: number): number {
  return n - m
}

function sum(a: Array<number>): number {
  return a.reduce((acc, next) => acc + next)
}

function multiply2(a: Array<number>): number {
  return a.reduce((acc, next) => acc * next)
}

function power(n: number, m: number): number {
  return Math.pow(n, m)
}

console.log(
  "25: " + "\n",
  add(1, 2) + "\n", // Expected output: 3
  subtract(1, 2) + "\n", // Expected output: -1
  sum([1, 2, 3]) + "\n", // Expected output: 6
  multiply2([1, 2, 3]) + "\n", // Expected output: 6
  power(2, 3)
) // Expected output: 8

// ========== 26 ==========

/**
 * Complete the function to check if passed argument satisfies the following:
 *
 *  - is a number
 *  - is an integer (not a float)
 *  - is not equal to any of the numbers in the array `excludedNums`
 */

const excludedNums = [6, 14, 91, 111]

function validate(num: any): boolean {
  let firstVal = true || false
  let secondVal = true || false

  if (typeof num == "number" && num == Math.floor(num)) firstVal = true
  else firstVal = false

  excludedNums.every((exnums) => {
    if (exnums !== num) secondVal = true
    else secondVal = false
  })
  if (firstVal == secondVal) return true
  else return false
}

console.log(
  "26: ",
  validate(6),
  validate(10.5),
  validate(101),
  validate(-91),
  validate("16")
)

/* 
   Expected output:
   
     false
     false
     true
     true
     false
 */

// ========== 27 ==========

/**
 * Write function first5 which returns first five elements from the array
 */

function first5(arr: Array<number>): Array<number> {
  return arr.slice(0, 5)
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8] // You are NOT allowed to edit this line
const first5Numbers = first5(numbers) // You are NOT allowed to edit this line

console.log("27: ", first5Numbers) // Expected result: [1, 2, 3, 4, 5]

// ========== 28 ==========

/**
 * Psst! Want a hint? Try using a for loop for this exercise.
 * If you need some more theory first, here are a few resources that will definitely help:
 *  - https://www.w3schools.com/js/js_loop_for.asp
 *  - https://javascript.info/while-for#the-for-loop
 *  - https://www.youtube.com/watch?v=wxds6MAtUQ0 (Intro to Programming: Loops)
 *  - https://www.youtube.com/watch?v=Kn06785pkJg (JavaScript Loops Made Easy)
 */

function goThroughNumbers(start: number, end: number): any {
  let newArray = []
  if (start < end) {
    for (let i = start; i <= end; i++) {
      if (i % 2 == 0) newArray.push(`${i} - even`)
      else newArray.push(`${i} - odd`)
    }
    return newArray
  } else return "invalid input"
}

console.log(
  "28: " + "\n",
  goThroughNumbers(3, 7) + "\n",
  /* Expected output:
    > 3 - odd
    > 4 - even
    > 5 - odd
    > 6 - even
    > 7 - odd
*/
  goThroughNumbers(8, 12) + "\n",
  /* Expected output:
    > 8 - even
    > 9 - odd
    > 10 - even
    > 11 - odd
    > 12 - even
*/
  goThroughNumbers(4, 3)
) // Expected output: 'invalid input'

// ========== 29 ==========
/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */
function draw(n: number): string {
  let s: string = ""
  for (let i = 1; i <= n; i++) {
    s = s + Array(i).fill("*").join("") + "\n"
  }
  return s
}
console.log(
  "29: " + "\n",
  "\n" + draw(3),
  /* Expected output:
   *
   **
   ***
   */

  "\n" + draw(5)
)
/* Expected output:
 *
 **
 ***
 ****
 *****
 */

// ========== 30 ==========
/**
 * Ah, objects...
 * One of the most important concepts to understand in programming,
 * especially in JavaScript since the whole language is pretty much just objects 🤯
 *
 * Luckily they're not so difficult to learn. As always w3schools will help:
 *  - https://www.w3schools.com/js/js_objects.asp
 */
type Book = {
  title: string
  author: string
}

const books: Array<Book> = [
  {
    title: "4 hour work week",
    author: "Tim Ferris",
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris",
  },
]

function getTheTitles(books: Book[]): Array<string> {
  let newArray: Array<string> = []
  for (let i = 0; i <= books.length - 1; i++) {
    newArray.push(books[i].title)
  }
  return newArray
}
console.log("30: ", getTheTitles(books)) // Expected output: ['4 hour work week', 'Tools of Titans']

interface I_Book {
  title: string
  author: string
}

const getTheTitless = (books: I_Book[]) => {
  return books.map((book) => book.title)
}
console.log(getTheTitless(books)) // Expected output: ['4 hour work week', 'Tools of Titans']

// ========== 31 ==========

/**
 * Loop over the array and for each alive writer print out the following:
 * "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
 */
type Writer = {
  firstName: string
  lastName: string
  occupation: string
  age: number
  alive: boolean
}
const writers: Array<Writer> = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false,
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true,
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false,
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true,
  },
]

function writersAlive(persons: Array<Writer>): Array<string> {
  let newArray: Array<string> = []
  persons.map((person) => {
    let descript = `Hi, my name is ${person.firstName} ${person.lastName}. I am ${person.age} years old, and work as a ${person.occupation}.`
    person.alive ? newArray.push(descript) : 0
  })
  return newArray
}
console.log("31: ", writersAlive(writers))

// ========== 32 ==========
type Status = {
  title: string
  author: string
  isRead: boolean
}
const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false,
  },
]

const showStatus = (library: Array<Status>) => {
  return library.map((status) =>
    status.isRead
      ? `Already read ${status.title} by ${status.author}.`
      : `You still need to read ${status.title} by ${status.author}.`
  )
}

console.log("32: ", showStatus(library))

/*
  Expected output:
  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.
*/

// ========== 33 ==========
/**
 * So far you've learned all about functions, arrays, objects and that's a lot already!
 * The rest of the exercises here are for you to practice some more before moving on to
 * the more complicated exercises in this course.
 */

/**
 * How to convert temperature -> https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature
 *
 * Create two functions fahrenheitToCelsius & celsiusToFahrenheit
 *
 * Temperature should be rounded to one decimal place: i.e., fahrenheitToCelsius(100) should return 37.8 and not 37.77777777777778.
 */

const fahrenheitToCelsius = (fahren: number): number => {
  let celcius = ((fahren - 32) * 5) / 9
  return Math.round(celcius * 10) / 10
}
const celsiusToFahrenheit = (celcius: number): number => {
  let fahren = (celcius * 9) / 5 + 32
  return Math.round(fahren * 10) / 10
}

console.log(
  "33: ",
  fahrenheitToCelsius(100), // Expected result: 0
  celsiusToFahrenheit(100)
)
// Expected result: 32

// ========== 34 ==========
/**
 * Create a function protectEmail which hides some symbols of the email
 */
function protectEmail(email: string): string {
  let indxAt = email.indexOf("@")
  let firstPart = email.slice(0, indxAt)
  let hidden = ""
  if (firstPart.length >= 7) {
    for (let i = 0; i < 3; i++) {
      hidden = hidden + email[i]
    }
    hidden = hidden + "..."
  }
  if (firstPart.length < 7 && firstPart.length > 2) {
    for (let i = 0; i < 2; i++) {
      hidden = hidden + email[i]
    }
    hidden = hidden + "..."
  }
  if (firstPart.length <= 2) {
    hidden = hidden + "..."
  }
  return hidden + email.slice(indxAt, email.length)
}
// function protectEmail2(email: string): string {
//   let indexAt = email.indexOf("@")
//   let firstPart = email.slice(0, indexAt)
//   let secondPart = email.slice(indexAt)
//   return (
//     firstPart.slice(0, Math.min(Math.max(firstPart.length - 3, 0), 3)) +
//     "..." +
//     secondPart
//   )
// }
console.log(
  "34: ",
  protectEmail("secret123@codelex.io") == "sec...@codelex.io", // Expected result: sec...@codelex.io
  protectEmail("example@example.com") == "exa...@example.com", // Expected result: exa...@example.com
  protectEmail("12345@example.com") == "12...@example.com",
  protectEmail("1234@example.com") == "1...@example.com",
  protectEmail("12@example.com") == "...@example.com"
)

// ========== 35 ==========
/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */
const sumAll = function (start: number, end: number): number {
  let newArray = []
  for (let i = Math.abs(start); i <= Math.abs(end); i++) {
    newArray.push(i)
  }
  return newArray.reduce((a, b) => a + b)
}
console.log(sumAll(-1, -4)) // Expected output: 10

// ========== 36 ==========
/**
 * Note : The Pythagorean Theorem tells us that the relationship in every right triangle is:
 * c2 = a2 + b2, where c is the hypotenuse and a, b are two legs of the triangle.
 *
 * https://en.wikipedia.org/wiki/Pythagorean_theorem
 *
 * You should be able to deduce which function arguments are which sides of a triangle
 * and name them in your function accordingly.
 */
const pythagoreanTheorem = (a: number, b: number): number => {
  let c = Math.pow(a, 2) + Math.pow(b, 2)
  return Math.sqrt(c)
}
console.log(
  "36: " + "\n",
  pythagoreanTheorem(2, 4) + "\n", // Expected result: 4.47213595499958
  pythagoreanTheorem(3, 4)
) // Expected result: 5

// ========== 37 ==========
/**
 * Write a function that removes an element form array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 */

// You are allowed to edit only this function

// Atrod un izņem visas vērtības, kas atbilst valueToRemove:
// function remove(arr: Array<any>, valueToRemove: any): Array<any> {
//   let newArray = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== valueToRemove) newArray.push(arr[i])
//   }
//   return newArray
// }

// Atrod un izņem tikai pirmo vērtību,kas atbilst valueToRemove:
function remove(arr: Array<any>, valueToRemove: any): Array<any> {
  let index = arr.indexOf(valueToRemove)
  arr.splice(index, 1)
  return arr
  // let firstPart = arr.slice(0, index)
  // let secondPart = arr.slice(index + 1, arr.length)
  // return firstPart.concat(secondPart)
}

const allnumbers = [1, 2, 3]
const names = ["John", "Ellen", "Alice", "Ellen"]

const newNumbers = remove(allnumbers, 2)
const newNames = remove(names, "Ellen")

console.log("37: " + "\n", newNumbers + "\n", newNames)

/* 
  Expected output:
  
      [1, 3]
      [John, Alice]
*/

// ========== 38 ==========

const removeFromArray2_ = (arr: Array<number>, n: number): Array<number> => {
  let newArray = []
  arr.map((a) => {
    if (arr.indexOf(a) !== arr.indexOf(n)) newArray.push(a)
  })
  return newArray
}
const removeFromArray2 = (
  arr: Array<number>,
  ...ns: Array<number>
): Array<number> => {
  return arr.filter((a) => ns.every((n) => a !== n))
}
console.log(
  "38: ",
  removeFromArray2([1, 2, 3, 4], 3), // Expected output: [1, 2, 4]
  removeFromArray2([1, 2, 3, 4], 7),
  // Expected output: [1, 2, 3, 4]
  removeFromArray2([1, 2, 3, 4], 7, 1, 2)
) // Expected output: [1, 3, 4]

/*
 * Want another challenge similar to this one?
 * Go back to exercise 15-greatest-number and refactor your previous solution so that
 * the function can accept unlimited number of arguments and still return the largest number.
 */

// ========== 39 ==========

const count = (text: string, word: string): number => {
  let count = 0
  let arr = text.toLowerCase().split(" ")
  arr.map((a) => {
    if (a == word) count = count + 1
  })
  return count
  //return str.toLowerCase().split(what.toLowerCase()).length - 1
}
console.log(
  "39: ",
  count("The quick brown fox jumps over the lazy dog", "the"), // Expected output: 2
  count("The quick brown fox jumps over the lazy dog", "fox")
) // Expected output: 1

// ========== 40 ==========
/**
 * Implement map function which works similarly as
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * NB! The goal of this exercise is not to call .map inside your own map function,
 * but instead  you have to figure out how Array.prototype.map() works under the hood
 * and recreate the logic yourself.
 */

function map(arr: Array<number>): Array<number> {
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * 2)
  }
  return newArray
}
const numbers2 = [1, 2, 3]
const numbers3 = [8, 6, -2, 1, 0]
// const doubled = map(numbers2, function (number) {
//   return number * 2
// })
console.log("40: ", map(numbers2), map(numbers3)) // Expected result: [2, 4, 6]

// ========== 41 ==========

/**
 * The good ol' this.. Possibly the most confusing topic in the whole language
 * and one that interviewers often use to make you (me) feel miserable in interviews 😭
 * If you find the docs (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
 * also confusing, try some of these resources:
 *  - https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/
 *  - https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
 *  - https://www.youtube.com/watch?v=Pi3QC_fVaD0 (JavaScript this Keyword Explained In 3 Minutes)
 *  - https://www.youtube.com/watch?v=YOlr79NaAtQ (What is THIS in JavaScript? in 100 seconds)
 */

function Circle(radius: number) {
  this.radius = radius
  this.area = function () {
    return Math.PI * Math.pow(this.radius, 2)
  } // A = PI * (r * r)
  this.perimeter = function () {
    return 2 * Math.PI * this.radius
  } // Per = 2 * PI * r
  // return this // šo dara new ārpus fijas
}

const c = new Circle(3) // return new (jauno objektu)
console.log(
  "41: ",
  "Area =",
  c.area(), // Expected output: Area = 28.27
  "Perimeter =",
  c.perimeter()
) // Expected output: Perimeter = 18.85

/**
 * This was the last exercise in this repository.
 * Congratulations on getting this far!
 */
