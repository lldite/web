type Point = [number, number]

type Bird = {
    type: 'bird',
    age: number,
    name: string,
    coordinates: Point,
}

function makeOlder(bird: Bird, age: number): Bird {
    return {
        type: 'bird',
        age: bird['age'] + age,
        name: bird['name'],
        coordinates: bird['coordinates'],
    }
}

let johnny: Bird = {type: 'bird', age: 5, name: "Johnny", coordinates: [5, 3]}
let tom: Bird = {type: 'bird', age: 15, name: "Tom", coordinates: [4, 7]}

console.log('makeOlder', makeOlder(johnny, 2), makeOlder(tom, 1))
console.log('johnny', johnny)

function moveBird(bird: Bird, delta: Point): Bird {
    return {
        type: 'bird',
        age: bird['age'],
        name: bird['name'],
        coordinates: [bird['coordinates'][0] + delta[0], bird['coordinates'][1] + delta[1]],
    }
}
console.log('moveBird', moveBird(tom, [-1, -1]))
console.log('old moved bird', moveBird(makeOlder(johnny, 3), [5, 3]))

type Triple = {
    a: number,
    b: number, 
    c: number,
}
function rotate(t: Triple): Triple {
    return {
        a: t.c,
        b: t.a,
        c: t.b
    }
}
console.log("rotate: ", rotate({a:1, b:2, c: 3}))

function rotateN(t: Triple, n: number): Triple {
    for(let i = 1; i <= n; i++) {
        t = rotate(t)
    }
    return t
}
let triple = {a: 1, b: 2, c: 3}
console.log("rotateN: ", rotateN(triple, 2))

function iterate<A>(f: (A) => A, a: A, n: number): A {
    for(let i = 1; i <= n; i++) {
        a = f(a)
    }
    return a
}
console.log("iterate: ", iterate<Triple>(rotate, triple, 5))

