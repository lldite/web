// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

// 18.Write a JavaScript program to check two given numbers and return true 
// if one of the number is 50 or if their sum is 50

// kā konvertējas šis teikums uz kodu:
// return if X -> return X
// if X or Y -> return X || Y
// "one of number is 50" -> return a == 50 || b == 50
// if one is 50 or if their sum is 50 -> return (a == 50 || b == 50 || a + b == 50)

function fifty(a: number, b: number): Boolean {
    return a == 50 || b == 50 || a + b == 50
    return ((a == 50 || b == 50) || (a + b == 50))

    if (a == 50 || b == 50 || a + b == 50)
        return true
    return false
}
console.log(fifty(3, 8), fifty(50, 50), fifty(50, 55), fifty(40, 10))

console.log(new Date())

// 15. Write a JavaScript program to get the difference between a given number and 13, 
// if the number is greater than 13 return double the absolute difference. 

function thirteen(b: number): number {
    const a = 13
    let diff = b - a
    let double = Math.abs(diff * 2)
    if (b >= a) return diff
    else return double
}
console.log(thirteen(20), thirteen(7))

// 16. Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are same, then returns triple their sum.

function sum(x: number, y: number): number {
    // let s = x + y 
    // let t = s * 3
    // if (x == y) return t
    //     else return s

    if (x == y) return (x + y) * 3
    else return x + y
}
console.log(sum(3, 3), sum(5, 9))

// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. 
// Returns triple their absolute difference if the specified number is greater than 19. 

function absdiff(x: number): number {
    // if (x > 19) return Math.abs(x - 19) * 3
    //    else return Math.abs(x - 19)

    let abs = Math.abs(x - 19)
    if (x > 19) return abs * 3
    else return abs
}
console.log(absdiff(3), absdiff(78))

// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

function within(i: number): Boolean {
    if (Math.abs(100 - i) <= 20 || Math.abs(400 - i) <= 20) return true
    else return false
}
console.log(within(90), within(7), within(80), within(340))

// 20. Write a JavaScript program to check from two given integers, 
// whether one is positive and another one is negative. 

function pozneg(x: number, y: number): Boolean {
    if (x > 0 && y < 0 || x < 0 && y > 0) return true
    else return false
}
console.log(pozneg(7, -3), pozneg(-4, 1))

// 21. Write a JavaScript program to create a new string adding "Py" in front of a given string.
//  If the given string begins with "Py" then return the original string.  

function adding(s: string): string {
    let py = "Py"
    let string = py + s
    if (s.charAt(0) == "P" && s.charAt(1) == "y") return s
    else return string
    // else return `Py${s}`
}
console.log(adding("banana"), adding("Python"))

// 22. Write a JavaScript program to remove a character at the specified position of a given string
//  and return the new string.

function remove(s: string): string {
    let newstring = s.replace(s.charAt(1), "")
    return newstring
}
console.log(remove("mullet"), remove("boo"))

// 23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. 
// The string length must be greater than or equal to 1. 

function firstlast(s: string): string {
    let invalid = "string too short"
    // let newstring = (s.replace(s.charAt(0), s.charAt(s.length - 1))).slice(0, (s.length - 1))
    // let laststring = newstring + s.charAt(0)
    // if (s.length >= 1) return laststring
    // else return invalid

    let n = s.slice(1, s.length - 1)
    let m = s.charAt(s.length - 1) + n + s.charAt(0)
    return m
}
console.log("firstlast", firstlast("abc"), firstlast("zebra"), firstlast(""))

// 24. Write a JavaScript program to create a new string from a given string 
// with the first character of the given string added at the front and back.  

function frontback(s: string): string {
    let newstring = `${s.charAt(0)}${s}${s.charAt(0)}`
    return newstring
}
console.log(frontback("abc"))

// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

function multiple(a: number): string {
    let negative = "negative number"
    let three = "multiple of 3"
    let seven = "multiple of 7"
    let both = "multilpe of 3 and 7"
    let invalid = "invalid number"
    if (a < 0) return negative
    if (a % 3 !== 0 && a % 7 !== 0) return invalid
    if (a % 3 == 0 && a % 7 == 0) return both
    if (a % 3 == 0) return three
    if (a % 7 == 0) return seven
}
console.log(multiple(15), multiple(21), multiple(70), multiple(4))

// 26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. 
// The string length must be 3 or more. 

function threechar(s: string): string {
    let three = s.slice(-3)
    let newstring = three + s + three
    return newstring
}
console.log(threechar("abc123"), threechar("bumbumhole"))

// 27. Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

function java(s: string): Boolean {
    return s.slice(0, 4) == "Java"
    // if (s.slice(0, 4) == "Java")
    //     /* if condition is true */ return true
    // else
    //     /* if condition is false */ return false
}
console.log("java:", java("gunshot"), java("Javalium"), java("javalium"))

// 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). 
// Return true if either of them are in the said range. 

function numrange(n: number, m: number): Boolean {
    return n >= 50 && n <= 99 || m >= 50 && m <= 99
    // if (n >= 50 && n <= 99 || m >= 50 && m <= 99) return true
    // else return false
}
console.log(numrange(48, 99), numrange(12, 100), numrange(55, 80))

// 29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive).
// Return true if one or more of them are in the said range. 

function threerange(a: number, b: number, c: number): Boolean {
    if (a >= 50 && a <= 99 || b >= 50 && b <= 99 || c >= 50 && c <= 99) return true
    else return false
}
console.log(threerange(48, 99, 78), threerange(1, 1, 2), threerange(5, 100, 59))

// 30. Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, 
// if "Script" presents in the string return the string without "Script" otherwise return the original one. 

function fifth(s: string): string {
    let takeout = "Script"
    let without = s.replace(takeout, "")
    if(s.slice(4) == takeout) return without
    else return s
}
console.log(fifth("bananadrama"), fifth("JavaScript"), fifth("JaavaScript"))

// 31. Write a JavaScript program to find the largest of three given integers. 

function largest(a: number, b: number, c: number): number {
    // jaunais "accumulator" (accumulator ir "i") ir Math.max(vecais "i", nākamais)
    let l = [a, b, c]
    return l.reduce((a, b) => Math.max(a, b))
    // return Math.max(a, b, c)
}
console.log("largest: ", largest(1, 2, 3), largest(6, -9, 0))

// 32. Write a JavaScript program to find a value which is nearest to 100 
// from two different given integer values.

function closesto(n: number, m: number): number {
    let ln = Math.abs(100 - n)
    let lm = Math.abs(100 - m)
    if (ln < lm) return n
    else return m
}
console.log("closesto:", closesto(8, 66), closesto(-23, 0), closesto(-1, 1), closesto(95, 110))

// 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.  

function tworanges(e: number, h: number): Boolean {
    function interval(n: number): Boolean {
        if ((n >= 40 && n <= 60) || (n >= 70 && n <= 100)) return true
        else false
    }
    if (interval(e) == true && interval(h) == true) return true
    else false 
}
console.log("tworanges: ", tworanges(80, 56), tworanges(1, 99), tworanges(55, 56))

// 34. Write a JavaScript program to find the larger number from the two given positive integers, 
// the two numbers are in the range 40..60 inclusive.

function largernum(n: number, m: number): string {
    let l = [n, m]
    function interval(n: number): Boolean {
        if (n >= 40 && n <= 60) return true
        else false
    }
    if (interval(n) == true && interval(m) == true) 
        return l.reduce((a, b) => (Math.max(a, b))).toString()
        else return "not in range"
}    
console.log("largernum: ", largernum(0, 3), largernum(44, 79), largernum(50, 60))

// 35. Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

function exist(s: string, c: string): Boolean {
    return s.slice(1, 4).indexOf(c) >= 0
}
console.log("exist: ", exist("frtgyhju", "j"), exist("kartupelis", "r"), exist("abc", "a"))

// 36. Write a JavaScript program to check whether the last digit of the three given positive integers is same.

function lastdigit(n: number, nn: number, nnn: number): Boolean {
    // extract common code to function
    let ns = n.toString()
    let nns = nn.toString()
    let nnns = nnn.toString()
    if ((ns.charAt(ns.length -1) == nns.charAt(nns.length -1)) && (ns.charAt(ns.length -1) == nnns.charAt(nnns.length -1))) return true
    else return false    
}
console.log("lastdigit: ", lastdigit(5, 88, 23), lastdigit(19, 9, 79), lastdigit(0, 3, 10))





// Write a JavaScript program to check whether the person is an asshole

function asshole(person: string): Boolean {
    return person == "Raitis"
}
console.log("asshole:", asshole("Gregorijs") == false, asshole("Raitis") == true)

// https://stackoverflow.com/a/23555773
// [1,2] == [1,2]   ===>   false
// JSON.stringify(a1) === JSON.stringify(a2)

// fill(3, 3) = [3, 3, 3]
// fill(5, 5) = [5, 5, 5, 5, 5]
function fill<A>(n: number, a: A): Array<A> {
    return []
}
console.log(
    'fill:',
    JSON.stringify(fill(5, 5)) == JSON.stringify([5, 5, 5, 5, 5]),
    JSON.stringify(fill<string>(3, "x")) == JSON.stringify(["x", "x", "x"])
)

// fillSquare(5) = [[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]]
function fillSquare(n: number): Array<Array<number>> {
    return [[]]
}

//evenList(8) = [16, 14, 12, 10, 8]
//evenList(7) = [14, 12, 10, 8]
//evenList(6) = [12, 10, 8, 6]
//evenList(5) = [10, 8, 6]
function evenList(n: number): Array<number> {
    return []
}