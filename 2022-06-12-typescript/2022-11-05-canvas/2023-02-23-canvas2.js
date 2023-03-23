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
//diagonalGetBigger(10, 10)
function chessBoard(size, count, selected) {
    if (selected === void 0) { selected = [-1, -1]; }
    for (var i = 0; i < count; i++) {
        for (var j = 0; j < count; j++) {
            if (i == selected[0] && j == selected[1]) {
                ctx.fillStyle = "#8ceb34";
            }
            else if ((i + j) % 2 == 0) {
                ctx.fillStyle = "grey";
            }
            else {
                ctx.fillStyle = "black";
            }
            ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(size * i, size * j, size, size);
        }
    }
}
function chessBoardApp() {
    var sizee = 20;
    var countt = 30;
    chessBoard(sizee, countt);
    document.addEventListener("mousemove", function (event) {
        var clicked = [
            Math.floor(event.offsetX / sizee),
            Math.floor(event.offsetY / sizee),
        ];
        chessBoard(sizee, countt, clicked);
    });
}
//chessBoardApp()
// let step = 0
// setInterval(() => {
//   step = step + 1
//   ctx.fillRect(step, 0, 50, 50)
// }, 1000)
function getLonger() {
    var step = 0;
    setInterval(function () {
        step = step + 5;
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, step, 50, 50);
    }, 500);
}
//getLonger()
function movingBlock() {
    var step = 0;
    setInterval(function () {
        step = step + 1;
        ctx.fillStyle = "white";
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(step - 1, 0, 50, 50);
        ctx.fillStyle = "#b591a3";
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(step, 0, 50, 50);
    }, 500);
}
// function moveBlock(): void {
//   let x = 500
//   let y = 500
//   setInterval(() => {
//     ctx.fillStyle = "#b591a3"
//     ctx?.fillRect(x, y, 50, 50)
//   }, 1000)
//   document.addEventListener("keydown", (event) => {
//     if (event.key == "w") y = y - 1
//     if (event.key == "s") y = y + 1
//     if (event.key == "a") x = x - 1
//     if (event.key == "d") x = x + 1
//   })
// }
// function moveBlock(): void {
//   let coord = [500, 500]
//   setInterval(() => {
//     ctx.fillStyle = "#b591a3"
//     ctx?.fillRect(coord[0], coord[1], 50, 50)
//   }, 500)
//   document.addEventListener("keydown", (event) => {
//     if (event.key == "w") coord = [coord[0], coord[1] - 1]
//     if (event.key == "s") coord = [coord[0], coord[1] + 1]
//     if (event.key == "a") coord = [coord[0] - 1, coord[1]]
//     if (event.key == "d") coord = [coord[0] + 1, coord[1]]
//   })
// }
// function moveBlock(): void {
//   let direction = [0, 1]
//   let position = [500, 500]
//   setInterval(() => {
//     ctx.fillStyle = "#b591a3"
//     ctx?.fillRect(
//       position[0] + direction[0],
//       position[1] + direction[1],
//       50,
//       50
//     )
//   }, 500)
//   document.addEventListener("keydown", (event) => {
//     if (event.key == "w") direction = [0, -1]
//     if (event.key == "s") direction = [0, 1]
//     if (event.key == "a") direction = [-1, 0]
//     if (event.key == "d") direction = [1, 0]
//   })
// }
// pie coord vajag arī direction, kas ir izmaiņa - [0, 1] vai [-1, 0] vai taml.
// sanāk, ka event handleris maina virzienu, bet reāli pozīcija mainās iekš setInterval
// pirms maini pozition, vecajai pa virsu uzzīmē baltu kluci (addEventListener nemaina coord)
// coord nosauc par position, bet to, ko maina aEL nosauc par direction
// function moveBlock(): void {
//   let direction = [0, 0]
//   let position = [300, 300]
//   setInterval(() => {
//     position = [position[0] + direction[0], position[1] + direction[1]]
//     ctx.fillStyle = "#b591a3"
//     ctx?.fillRect(position[0], position[1], 50, 50)
//   }, 50)
//   document.addEventListener("keydown", (event) => {
//     if (event.key == "w") direction = [0, -1]
//     if (event.key == "s") direction = [0, 1]
//     if (event.key == "a") direction = [-1, 0]
//     if (event.key == "d") direction = [1, 0]
//   })
// }
function moveBlock() {
    var position = [300, 300];
    var direction = [0, 0];
    var speed = 10;
    setInterval(function () {
        ctx.fillStyle = "white";
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(position[0], position[1], 50, 50);
        position = [position[0] + direction[0], position[1] + direction[1]];
        ctx.fillStyle = "#b591a3";
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(position[0], position[1], 50, 50);
    }, 50);
    document.addEventListener("keydown", function (event) {
        if (event.key == "w")
            direction = [0, -speed];
        else if (event.key == "s")
            direction = [0, speed];
        else if (event.key == "a")
            direction = [-speed, 0];
        else if (event.key == "d")
            direction = [speed, 0];
        else if (event.key == "Enter")
            direction = [-direction[0], -direction[1]];
        else if (event.key == " ")
            direction = [0, 0];
        // if (event.key == "w") {
        //   direction = [0, -speed]
        // } else {
        //   if (event.key == "s") {
        //     direction = [0, speed]
        //   } else {
        //     if (event.key == "a") {
        //       direction = [-speed, 0]
        //     } else {
        //       if (event.key == "d") direction = [speed, 0]
        //     }
        //   }
        // }
    });
}
moveBlock();
//eventListener maina atmiņu. tas neko nezīmē
