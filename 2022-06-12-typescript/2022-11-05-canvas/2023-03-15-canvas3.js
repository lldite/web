// compile me with `npx tsc -w index.ts` ("-w(atches)" / reacts to changes in this file)
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
function getLonger(size) {
    var step = 0;
    setInterval(function () {
        step = step + size;
        ctx.fillStyle = "#998d57"; // moss green
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(step, 0, size, size);
    }, 500);
}
//getLonger(50)
function movingKubik(size) {
    var step = 0;
    setInterval(function () {
        step = step + size;
        ctx.fillStyle = "white";
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(step - size, 0, size, size);
        ctx.fillStyle = "#547a99"; // blue
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(step, 0, size, size);
    }, 500);
}
// movingKubik(50)
function moveKubik(position, size, step) {
    var direction = [step, 0];
    setInterval(function () {
        ctx.fillStyle = "white";
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(position[0], position[1], size, size);
        position = [position[0] + direction[0], position[1] + direction[1]];
        ctx.fillStyle = "#432a52"; // dark purple
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(position[0], position[1], size, size);
    }, 10);
    document.addEventListener("keydown", function (event) {
        if (event.key == "w")
            direction = [0, -step];
        if (event.key == "s")
            direction = [0, step];
        if (event.key == "a")
            direction = [-step, 0];
        if (event.key == "d")
            direction = [step, 0];
        if (event.key == " ")
            direction = [0, 0];
    });
}
// moveKubik([100, 100], 10, 5)
// moveKubik([150, 150], 20, 4)
// moveKubik([200, 200], 30, 3)
function moveKubik2(size) {
    var step = 1;
    var position = [300, 300];
    var direction = [step, 0];
    var color = "#432a52"; // dark purple
    setInterval(function () {
        ctx.fillStyle = "white";
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(position[0], position[1], size, size);
        position = [position[0] + direction[0], position[1] + direction[1]];
        ctx.fillStyle = color;
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(position[0], position[1], size, size);
    }, 10);
    document.addEventListener("keydown", function (event) {
        if (event.key == "w") {
            direction = [0, -step];
            color = "#432a52";
        }
        if (event.key == "s") {
            direction = [0, step];
            color = "#432a52";
        }
        if (event.key == "a") {
            direction = [-step, 0];
            color = "#432a52";
        }
        if (event.key == "d") {
            direction = [step, 0];
            color = "#432a52";
        }
        if (event.key == " ") {
            direction = [0, 0];
            color = "red";
        }
        if (event.key == "]")
            step = step + 1;
        if (event.key == "[")
            step = step - 1;
    });
}
//moveKubik2(50)
function moveKubik3(size) {
    var step = 10;
    var positions = [
        [200, 200],
        [300, 300],
    ];
    var direction = [step, 0];
    setInterval(function () {
        positions.forEach(function (position) {
            ctx.fillStyle = "white";
            ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(position[0], position[1], size, size);
            position[0] = position[0] + direction[0];
            position[1] = position[1] + direction[1];
            ctx.fillStyle = "#432a52"; // dark purple
            ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(position[0], position[1], size, size);
        });
    }, 100);
    document.addEventListener("keydown", function (event) {
        if (event.key == "w")
            direction = [0, -step];
        if (event.key == "s")
            direction = [0, step];
        if (event.key == "a")
            direction = [-step, 0];
        if (event.key == "d")
            direction = [step, 0];
        if (event.key == " ")
            direction = [0, 0];
        // kad tu nospied enter, tad panāc, ka tiek pielikts papildu position vietā [300, 300]
    });
}
//moveKubik3(10)
