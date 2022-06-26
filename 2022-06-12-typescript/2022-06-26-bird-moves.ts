function sum(ns: Array<number>): number {
    return ns.reduce((sum, n) => sum + n)
}

// console.log(sum([1,2,3,4]))

//

type Point = [number, number]

type Bird = {
    type: 'bird',
    age: number,
    name: string,
    coordinates: Point,
}

function makeOlder(bird: Bird): Bird {
    return {
        type: 'bird',
        age: bird['age'] + 1,
        name: bird['name'],
        coordinates: bird['coordinates'],
    }
}

let johnny: Bird = {type: 'bird', age: 5, name: "Johnny", coordinates: [5, 3]}
let tom: Bird = {type: 'bird', age: 15, name: "Tom", coordinates: [4, 7]}

// console.log(makeOlder(makeOlder(johnny)), makeOlder(tom))

function moveBird(bird: Bird, delta: Point): Bird {
    return {
        type: 'bird',
        age: bird['age'],
        name: bird['name'],
        //coordinates: [0, 0],
        //coordinates: bird['coordinates'],
        coordinates: [bird['coordinates'][0], bird['coordinates'][1]],
    }
}

console.log('bird moves', moveBird(tom, [1, 1]))

1 as number
'what' as string