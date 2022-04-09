const blocks = document.querySelectorAll('.klucis') // blocks: List[Element]
console.log('blocks:', blocks)
blocks.forEach(function (block) { // block: Element
    console.log("found block:", block)
})

let kartupelis = 5
console.log('logging 1:', kartupelis + 5)
console.log('logging 2:', 4 + 3)
function multiply(num1, num2){
    let result = num1 * num2;
    return result
}
console.log('main.js, multiply:', multiply(2, 3))

let lielums = 15
let paragrafi = document.querySelector('#paragrafi')

paragrafi.addEventListener('click', function() {
    console.log('mani klikšķina!')
    lielums = lielums + 1
    this.style["font-size"] = lielums + 'px'
})

// let object = {viens: 1, divi: 2}
// object.viens => 1
// object.divi => 2