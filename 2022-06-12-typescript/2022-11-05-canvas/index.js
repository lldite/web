// compile me with `npx tsc -w index.ts` ("-w(atches)" / reacts to changes in this file)
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
// alpha values from 0 (transparent to 1 opaque
// ctx.fillStyle = "rgba(0, 0, 0, 0.1)" // red, green, blue, alpha (transparency)
// ctx.fillRect(10, 10, 500, 50) // x of left side of rect, y of left side of rect, width, height
// ============================
function first() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(10, 10, 500, 50); // x, y, width, height
}
function klucitis(centrs, n) {
    ctx.fillRect(centrs[0] - n, centrs[1] - n, n * 2, n * 2);
}
function piramida(centrs, platums, solis) {
    for (var i = platums; i > 0; i = i - solis) {
        klucitis(centrs, i);
    }
}
function piramidas() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
    piramida([200, 200], 100, 1);
    piramida([400, 200], 70, 20);
    piramida([600, 200], 100, 10);
}
piramidas();
