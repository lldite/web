// compile me with `npx tsc -w index.ts` ("-w(atches)" / reacts to changes in this file)
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var draw = false;
document.addEventListener("mousedown", function (e) { return (draw = true); });
document.addEventListener("mouseup", function (e) { return (draw = false); });
document.addEventListener("mousemove", function (event) {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 300, 50);
    ctx.font = "48px serif";
    ctx.fillStyle = "black";
    ctx.fillText("" + event.offsetX + "x" + event.offsetY, 0, 40);
    if (draw)
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(event.offsetX - 5, event.offsetY - 5, 10, 10);
    else { }
});
