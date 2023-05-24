// 16

/**
 * Let's try to use our knowledge about functions to try
 * and build a tool you could use in real life.
 */

/**
 * Sales Tax
 *
 * A business requires a program that calculates how much sales tax to charge
 * Sales tax is 21% of the price of the product
 */

// You are allowed to change only this function
// function calculateSalesTax(price: number): number {
//     return price *
// }

// const product = "You don't know JS";
// const price = 19.99;
// const salesTax = calculateSalesTax(price);

// console.log("Product: " + product);
// console.log("Price: £" + price);
// console.log("Sales tax: £" + salesTax);
// console.log("Total: £" + (price + salesTax));

/* Expected output:
    > Product: You don't know JS
    > Price: £19.99
    > Sales tax: £4.20
    > Total: £24.19
*/

// 21

function tidyUpString(str: string): string {
  return str.trim().toLowerCase().replace("/", "")
}

// You are allowed to edit this function
function capitalise(str: string): string {
  const firstChar = str[0]
  const firstCharUpper = firstChar.toUpperCase()
  const restOfString = str.slice(1)
  return firstCharUpper + restOfString
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "]
let mentorsTidy = mentors.map((mentor) => capitalise(tidyUpString(mentor))) // You are allowed to edit this line
//const mentorsCapitalized = mentorsTidy.map((mentor) => capitalise(mentor))
console.log(mentorsTidy) // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]

//38
const removeFromArray = function (arr: number[], ...number: number[]) {}

console.log(removeFromArray([1, 2, 3, 4], 3)) // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)) // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)) // Expected output: [1, 3, 4]

/*
 * Want another challenge similar to this one?
 * Go back to exercise 15-greatest-number and refactor your previous solution so that
 * the function can accept unlimited number of arguments and still return the largest number.
 */

// 30

/**
 * Ah, objects...
 * One of the most important concepts to understand in programming,
 * especially in JavaScript since the whole language is pretty much just objects 🤯
 *
 * Luckily they're not so difficult to learn. As always w3schools will help:
 *  - https://www.w3schools.com/js/js_objects.asp
 */

interface I_Book {
  title: string
  autor: string
}

const books = [
  {
    title: "4 hour work week",
    author: "Tim Ferris",
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris",
  },
]

const getTheTitles = (books: I_Book[]) => {
  return books.map((book) => book.title)
}

console.log(getTheTitles(books)) // Expected output: ['4 hour work week', 'Tools of Titans']
