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
    ctx.fillRect(10, 10, 500, 50); // x, y, width, height in pixels
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
// first()
// piramidas()
function klucEqualDiagonal(n) {
    for (var i = 1; i <= n; i++) {
        ctx.fillRect(100 * i, 100 * i, 20, 20);
    }
}
// klucEqualDiagonal(5)
// a is not included in the sum
// e.g. sumFrom1ToN(5) = 1+2+3+4
function sumFrom1ToN(a) {
    return Array.from(Array(a).keys()).reduce(function (a, b) { return a + b; });
}
console.log('sumFrom1ToN', sumFrom1ToN(1), sumFrom1ToN(2) == 1, sumFrom1ToN(3) == 3, sumFrom1ToN(4) == 6);
function klucSmallToBig(n) {
    for (var j = 1; j <= n; j++) {
        // ctx.fillRect(sumFrom1ToN(j), sumFrom1ToN(j), j, j)
        ctx.fillRect(j * (j - 1) / 2, j * (j - 1) / 2, j, j);
        // ctx.fillRect((10 * i) * i, (10 * i) * i, 10 * i, 10 * i)
        // klucitis([(10 * i) * i , (10 * i) * i], 10 * i)
    }
}
//klucSmallToBig(100)
// ctx.fillStyle = "red"
// ctx.fillRect(100, 100, 80, 80)
function chessBoard(n) {
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            var x = 100 * j;
            var y = 100 * i;
            if ((j + i) % 2 == 0) {
                ctx.fillStyle = "black";
            }
            else {
                ctx.fillStyle = "red";
            }
            ctx.fillRect(x, y, 100, 100);
        }
    }
}
// chessBoard(8)
function gradientBoard(n, size, gaps) {
    if (gaps === void 0) { gaps = 0; }
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            if ((i + j) % 7 != 0 && (i - j) % 7 != 0) {
                ctx.fillStyle = ((j + i) % 2 == 0) ? "#cccccc" : "#888888";
                ctx.fillRect(size * j, size * i, size - gaps, size - gaps);
            }
        }
    }
}
gradientBoard(250, 15, 2);
