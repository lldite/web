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
    if (s.slice(4) == takeout) return without
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
    function lastchar(a: number): string {
        let aa = a.toString()
        return aa.charAt(aa.length - 1)
    }
    if ([n, nn, nnn].every(a => a >= 0) && lastchar(n) == lastchar(nn) && lastchar(n) == lastchar(nnn)) return true
    else return false

    // let ns = n.toString()
    // let nns = nn.toString()
    // let nnns = nnn.toString()
    // if ((ns.charAt(ns.length - 1) == nns.charAt(nns.length - 1)) && (ns.charAt(ns.length - 1) == nnns.charAt(nnns.length - 1))) return true
    // else return false
}
console.log("lastdigit: ", lastdigit(5, 88, 23), lastdigit(19, 9, 79), lastdigit(0, 3, 10), lastdigit(80, -90, 0))

// 37. Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. 
// If the string length is less than 3 convert all the characters in upper case. 

function ssttrriinngg(s: string): string {
    if (s.length <= 3) return s.slice(0, 3).toLowerCase()
    else return s.toUpperCase()
}
console.log("ssttrriinngg: ", ssttrriinngg("aBc"), ssttrriinngg("kartupelis"), ssttrriinngg("TNT"))

// 39. Write a JavaScript program to compute the sum of the two given integers.
//  If the sum is in the range 50..80 return 65 other wise return 80. 

function sumsum(i: number, ii: number): number {
    if ((i + ii) >= 50 && (i + ii) <= 80) return 65
    else return 80
}
console.log("sumsum: ", sumsum(3, 0), sumsum(45, 20))

// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

function eight(e: number, ee: number): Boolean {
    if (e == 8 || ee == 8 || e + ee == 8 || Math.abs(e - ee) == 8) return true
    else return false
}
console.log("eight: ", eight(4, 4), eight(91, 9), eight(8, 16))

// 41. Write a JavaScript program to check three given numbers, 
// if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40. 

function threenums(n: number, nn: number, nnn: number): number {
    if (n == nn && n == nnn) return 30
    if ((n == nn && n !== nnn) || (n == nnn && n !== nn) || (nn == nnn && nn !== n)) return 40
    else return 20
}
console.log("41. threenums: ", threenums(8, 90, -12) == 20, threenums(5, 0, 5) == 40, threenums(0, 0, 0) == 30, threenums(4, 32, 32) == 40)

//42. Write a JavaScript program to check whether two given numbers are increasing in strict mode or in soft mode.  
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function strictsoft(n: number, nn: number): string {
    if (nn - n >= 1) return "Strict mode"
    else // if(nn - n <= 0) 
        return "Soft mode"
}
console.log("strictsoft: ", strictsoft(34, 90), strictsoft(8, 3), strictsoft(87, 87))

//42. Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.  
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function strictsofthree(n: number, nn: number, nnn: number): string {
    if (nn - n >= 1 && nnn - nn >= 1) return "Strict mode"
    else // if(nn - n <= 0 & nnn - nn <= 1) 
        return "Soft mode"
}
console.log("strictsofthree: ", strictsofthree(34, 1, 90), strictsofthree(8, 3, 2), strictsofthree(87, 800, 832))

// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

function rightmost(n: number, nn: number, nnn: number): Boolean {
    if (n >= 0 && nn >= 0 && nnn >= 0) {
        function lastnum(a: number): number {
            return a % 10
        }
        if ((lastnum(n) == lastnum(nn) && lastnum(n) == lastnum(nnn)) ||
            (lastnum(n) == lastnum(nnn) && lastnum(n) !== lastnum(nn)) ||
            (lastnum(nn) == lastnum(nnn) && lastnum(nn) !== lastnum(n))) return true
        else return false
    }
    else return false
}
console.log("rightmost: ", rightmost(45, 90, -1), rightmost(0, 10, 80), rightmost(55, 85, 0))

// 44. Write a JavaScript program to check from three given integers that whether a number is 
// greater than or equal to 20 and less than one of the others.

function threenumbs(n: number, nn: number, nnn: number): Boolean {
    function twenty(a: number): Boolean {
        if (a >= 20) return true
        else return false
    }
    // if (twenty(n) == true && (n < nn || n < nnn)) return true 
    if (n >= 20 && (n < nn || n < nnn)) return true 
    if (twenty(nn) == true && (nn < n || nn < nnn)) return true
    if (twenty(nnn) == true && (nnn < n || nnn < nn)) return true
    else return false
}
console.log("threenumbs: ", threenumbs(2, 8, 9), threenumbs(1, 2, 24), threenumbs(90, 7, 90), threenumbs(26, 90, 67))

// 45. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15. 

function fifteen(n: number, nn: number): Boolean {
    return n == 15 || nn == 15 || n + nn == 15 || Math.abs(n - nn) == 15

    // let a = n == 15 || n + nn == 15 || Math.abs(n - nn) == 15
    // let b = nn == 15 || n + nn == 15 || Math.abs(n - nn) == 15
    // return a || b

    // vakars?
    // līst?
    // vai ir vakars vai līst?
    // vai ir vakars un līst?
}
console.log("fifteen: ", fifteen(2, 3) == false, fifteen(7, 15) == true, fifteen(0, 15), fifteen(31, 16), fifteen(7, 8))

// 46. Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.

function seveneleven(n: number, nn: number): Boolean {
    if (n >= 0 && nn >= 0) {
        function modulo(a: number): Boolean {
            return a % 7 == 0 || a % 11 == 0
        }
        return modulo(n) != modulo(nn)
    } else return false
}
console.log("seveneleven: ", seveneleven(77, 11), seveneleven(11, 3), seveneleven(8, 4), seveneleven(6, -11))

// 47. Write a JavaScript program to check whether a given number is presents in the range 40..10000.

function withinnn(n: number): Boolean{
    return n >= 40 && n <= 1000
}

// 48. Write a JavaScript program to reverse a given string. 

function rreevveerrssee(s: string): string {
    return s.split("").reverse().join("")
}

console.log("rreevveerrssee: ", rreevveerrssee("bananadrama"), rreevveerrssee("butthole"))

// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet

function alphabet(s: string): string {
    let abc = "abcdefghijklmnopqrstuvwxyz".split("")
    let nl = []
    for (let i = 0; i <= s.length; i++) {
        nl.push(abc[abc.indexOf(s[i]) + 1])
    }
    return nl.join("")

}

console.log('alphabet:', alphabet("what"), alphabet("this"))

// Write a JavaScript program to check whether the person is an asshole

function asshole(person: string): Boolean {
    return person == "Raitis"
}
console.log("asshole:", asshole("Gregorijs") == false, asshole("Raitis") == true)

// 50. Write a JavaScript program to capitalize the first letter of each word of a given string.

function capital(s: string): string {
    let sl = s.split(" ")
    function inner(a: string): string {
        return a[0].toUpperCase() + a.slice(1, a.length)
    } 
    return sl.map(a => inner(a)).join(" ")
}
console.log("capital: ", capital("abc Ab g"), capital("es1234 gribu12345 est123456"))

// 52. Write a JavaScript program to convert the letters of a given string in alphabetical order.

function order(s: string): string {
    return s.split("").sort().join("")
}
console.log("order: ", order("haha"), order("rata,.;tiu l;le"))

// 53. Write a JavaScript program to check whether the characters a and b 
// are separated by exactly 3 places anywhere (at least once) in a given string.  

function threeplaces(s: string): Boolean {
   let inner = s.slice(s.indexOf("a"), s.indexOf("b") + 1)
   return inner.indexOf("b") - inner.indexOf("a") == 3
}
console.log("threeplaces: ", threeplaces("bcda"), threeplaces("vvannbnnn"), threeplaces("nvdjhscxzab"), threeplaces("abcabcaccb"))

// 54. Write a JavaScript program to count the number of vowels in a given string.

function vowels(s: string): number {
    // let ss = ""
    let n = 0
    for (let i = 0; i <= s.length - 1; i ++) {
        if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u" 
            || s[i] == "A" || s[i] == "E" || s[i] == "I" || s[i] == "O" || s[i] == "U")
            // ss = ss + s[i]
            n = n + 1 
    } 
    return n
    
    return s.split("").filter(char =>
        "aeiuo".indexOf(char.toUpperCase()) != -1
    ).length

    return s.split("").filter(char => {
        let b = char.toLowerCase()
        return b == "a" || b == "e" || b == "i" || b == "o" || b == "u"
    }).length

    return s.split("").filter(a => 
        a == "a" || a == "e" || a == "i" || a == "o" || a == "u" 
        || a == "A" || a == "E" || a == "I" || a == "O" || a == "U"
    ).length
}
console.log("vowels: ", vowels("bananeinour"), vowels("wert,.;yuytgfdcvbnmkiuytredsdfg"))

// 55. Write a JavaScript program to check whether a given string contains equal number of p's and t's.

function psnts(s: string): Boolean {
   let ps = s.split("").filter(a => a == "p")
   let ts = s.split("").filter(a => a == "t")

   if (ps.length == ts.length) return true
   else return false
}
console.log("psnts: ", psnts("tstststs"), psnts("ulbroka"), psnts("rintipnptins"))


// > "abc def ghi jkl mno".split(' ').map((thing, index) => index)
// [ 0, 1, 2, 3, 4 ]
// > "abc def ghi jkl mno".split(' ').filter((thing, index) => index % 2 == 1)
// [ 'def', 'jkl' ]

// // https://stackoverflow.com/a/23555773
// // [1,2] == [1,2]   ===>   false
// // JSON.stringify(a1) === JSON.stringify(a2)

// // fill(3, 3) = [3, 3, 3]
// // fill(5, 5) = [5, 5, 5, 5, 5]
// function fill<A>(n: number, a: A): Array<A> {
//     return []
// }
// console.log(
//     'fill:',
//     JSON.stringify(fill(5, 5)) == JSON.stringify([5, 5, 5, 5, 5]),
//     JSON.stringify(fill<string>(3, "x")) == JSON.stringify(["x", "x", "x"])
// )

// // fillSquare(5) = [[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]]
// function fillSquare(n: number): Array<Array<number>> {
//     return [[]]
// }

// //evenList(8) = [16, 14, 12, 10, 8]
// //evenList(7) = [14, 12, 10, 8]
// //evenList(6) = [12, 10, 8, 6]
// //evenList(5) = [10, 8, 6]
// function evenList(n: number): Array<number> {
//     return []
