// compile me with `npx tsc -w index.ts` ("-w(atches)" / reacts to changes in this file)
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var point = [5, 5];
var arrow = [2, 2];
function render() {
    var size = 10;
    ctx.fillRect(size * point[0], size * point[1], size, size);
}
function tick() {
    ctx.fillStyle = "#ccc";
    render();
    point = [point[0] + arrow[0], point[1] + arrow[1]];
    ctx.fillStyle = "black";
    render();
}
document.addEventListener('keydown', function (event) {
    if (event.key == "w")
        arrow = [2, -2];
    if (event.key == "d")
        arrow = [2, 2];
    if (event.key == "a")
        arrow = [-2, -2];
    if (event.key == "s")
        arrow = [-2, 2];
});
render();
// setInterval(f, t) = ik pēc t ms no šī brīža izpildi f
setInterval(function () {
    tick();
}, 100);
