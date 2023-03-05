// compile me with `npx tsc -w index.ts` ("-w(atches)" / reacts to changes in this file)
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
// ctx.fillStyle = "red";
// ctx?.fillRect(10, 10, 50, 50);
// ctx.fillStyle = "black";
// ctx?.fillRect(100, 100, 100, 100);
function diagonal(size, count) {
    ctx.fillStyle = "#b591b1";
    for (var i = 0; i < count; i++) {
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(size * i, size * i, size, size);
    }
}
//diagonal(10, 10);
function diagonalGetBigger(size, count) {
    ctx.fillStyle = "#b591b1";
    for (var i = 1; i <= count; i++) {
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(size * ((i * (i - 1)) / 2), size * ((i * (i - 1)) / 2), size + size * i, size + size * i);
    }
}
diagonalGetBigger(10, 10);
