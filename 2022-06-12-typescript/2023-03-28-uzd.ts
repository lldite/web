function sumNumber(a: number, b: number): number {
  let c = a + b
  return c
}
console.log("sumNumber:", sumNumber(1, 1))

//

function sumTuuplInline(a: [number, number]): number {
  return a[0] + a[1]
}
console.log("sumTuupl:", sumTuupl([1, 1]))

type twoNumTuple = [number, number]
function sumTuupl(a: twoNumTuple): number {
  let c = a[0] + a[1]

  return c
}
console.log("sumTuupl:", sumTuupl([1, 1]))

//

function sumObjectInline(s: { a: number; b: number }): number {
  let c = s.a + s.b
  return c
}
console.log("sumObjectInline:", sumObjectInline({ a: 2, b: 3 }))

type twoNum = {
  a: number
  b: number
}
function sumObject(s: twoNum): number {
  let c = s.a + s.b
  return c
}
console.log("sumObject:", sumObject({ a: 2, b: 3 }))

// tuples
let t: [number, Boolean] = [1, false] // make
console.log(t[0], t[1]) // izkasīt
let t2: [number, Boolean] = [t[0], t[1]] // remake

// objects
let o: { age: number; adult: Boolean } = { age: 20, adult: false } // make
console.log(o.age, o["age"], o.adult, o["adult"]) // izkasīšana dažādos veidos
let o2: { age: number; adult: Boolean } = { age: o.age, adult: o.adult } // remake
