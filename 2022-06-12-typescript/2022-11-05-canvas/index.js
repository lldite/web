var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(200, 0, 0)";
ctx.fillRect(10, 10, 500, 50); // x, y, width, height
ctx.fillStyle = "rgb(200, 60, 0)";
ctx.fillRect(20, 20, 500, 50);
ctx.fillStyle = "rgb(200, 110, 0)";
ctx.fillRect(30, 30, 500, 50);
ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
// Array.from(Array(10).keys()).forEach(n => {
//     const m = n * 20
//     ctx.fillRect(m + 30, m + 30, 50, 50)
// })
