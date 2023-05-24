var _a;
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 0, 3000, 3000);
var color = "red";
var mouseDown = false;
canvas.addEventListener("mousemove", function (event) {
    ctx.fillStyle = color;
    if (mouseDown)
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(event.offsetX, event.offsetY, 10, 10);
});
addEventListener("mousedown", function (event) {
    mouseDown = true;
    ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(event.offsetX, event.offsetY, 10, 10);
});
addEventListener("mouseup", function (event) {
    mouseDown = false;
});
(_a = document.querySelector(".tools")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
    color = event.target.dataset.color;
});
