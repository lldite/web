var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
addEventListener("mousemove", function (event) {
    ctx.fillStyle = "white";
    ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(event.offsetX, event.offsetY, 10, 10);
});
