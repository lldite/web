// compile me with `npx tsc -w index.ts` ("-w(atches)" / reacts to changes in this file)
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var point = [5, 5];
var arrow = 'e';
var speed = 2;
function render() {
    var size = 10;
    ctx.fillRect(size * point[0], size * point[1], size, size);
}
function directionToCoord(d, delta) {
    if (delta === void 0) { delta = 3; }
    if (d == 'n')
        return [0, -delta];
    else if (d == 's')
        return [0, delta];
    else if (d == 'e')
        return [delta, 0];
    else if (d == 'w')
        return [-delta, 0];
}
function tick() {
    ctx.fillStyle = "#ccc";
    render();
    var arrowC = directionToCoord(arrow, speed);
    point = [point[0] + arrowC[0], point[1] + arrowC[1]];
    ctx.fillStyle = "black";
    render();
}
document.addEventListener('keydown', function (event) {
    // let arrow: Direction = 'se' // bad
    if (event.key == "w")
        arrow = 'n';
    if (event.key == "d")
        arrow = 'e';
    if (event.key == "a")
        arrow = 'w';
    if (event.key == "s")
        arrow = 's';
    if (event.key == ",")
        speed = speed - 1;
    if (event.key == ".")
        speed = speed + 1;
    console.log(event.key, arrow);
});
render();
// setInterval(f, t) = ik pēc t ms no šī brīža izpildi f
// setInterval(tick, 100)
setInterval(function () { tick(); }, 100);
