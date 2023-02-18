// compile me with `npx tsc -w index.ts` ("-w(atches)" / reacts to changes in this file)
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var point = [5, 5];
var arrow = 'se';
// let compass: number = 0 // 0: diagonal; 1: vertical / horizontal
function render() {
    var size = 10;
    ctx.fillRect(size * point[0], size * point[1], size, size);
}
function directionToCoord(d) {
    if (d == 'ne')
        return [2, -2];
    else if (d == 'se')
        return [2, 2];
    else if (d == 'sw')
        return [-2, 2];
    else if (d == 'nw')
        return [-2, -2];
}
function tick() {
    ctx.fillStyle = "#ccc";
    render();
    var arrowC = directionToCoord(arrow);
    point = [point[0] + arrowC[0], point[1] + arrowC[1]];
    ctx.fillStyle = "black";
    render();
}
document.addEventListener('keydown', function (event) {
    // let arrow: Direction = 'se' // bad
    if (event.key == "w")
        arrow = 'ne';
    if (event.key == "d")
        arrow = 'se';
    if (event.key == "a")
        arrow = 'nw';
    if (event.key == "s")
        arrow = 'sw';
    console.log(arrow);
});
render();
// setInterval(f, t) = ik pēc t ms no šī brīža izpildi f
// setInterval(tick, 100)
setInterval(function () { tick(); }, 100);
