const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

let i = 0;
let boxes = [];
let x;
let y;
let x1a;
let x1b;
let x2a;
let x2b;
let y1a;
let y1b;
let y2a;
let y2b;
boxes.push([Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight)]);
boxes.push([Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight)]);

if (boxes[1][0] < boxes[0][0]) {
    x = true;
    x1a = boxes[0][0] - (boxes[0][0] - boxes[1][0]);
    x1b = boxes[1][0] + (boxes[0][0] - boxes[1][0]);
}
if (boxes[0][0] < boxes[1][0]) {
    x = false;
    x2a = boxes[0][0] + (boxes[1][0] - boxes[0][0]);
    x2b = boxes[1][0] - (boxes[1][0] - boxes[0][0]);
}
if (boxes[1][1] < boxes[0][0]) {
    y = true;
    y1a = boxes[0][1] - (boxes[0][1] - boxes[1][1]);
    y1b = boxes[1][1] + (boxes[0][1] - boxes[1][1]);
}
if (boxes[0][1] < boxes[1][1]) {
    y = false;
    y2a = boxes[0][1] + (boxes[1][1] - boxes[0][1]);
    y2b = boxes[1][1] - (boxes[1][1] - boxes[0][1]);
}

async function main() {
    while (true) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.fillStyle = "white";
        if (i >= 100) {
            if (boxes[1][0] < boxes[0][0]) {
                x = true;
                x1a = boxes[0][0] - (boxes[0][0] - boxes[1][0]);
                x1b = boxes[1][0] + (boxes[0][0] - boxes[1][0]);
            }
            if (boxes[0][0] < boxes[1][0]) {
                x = false;
                x2a = boxes[0][0] + (boxes[1][0] - boxes[0][0]);
                x2b = boxes[1][0] - (boxes[1][0] - boxes[0][0]);
            }
            if (boxes[1][1] < boxes[0][0]) {
                y = true;
                y1a = boxes[0][1] - (boxes[0][1] - boxes[1][1]);
                y1b = boxes[1][1] + (boxes[0][1] - boxes[1][1]);
            }
            if (boxes[0][1] < boxes[1][1]) {
                y = false;
                y2a = boxes[0][1] + (boxes[1][1] - boxes[0][1]);
                y2b = boxes[1][1] - (boxes[1][1] - boxes[0][1]);
            }
            i = 0;
        }
        if (x) {
            boxes[0][0] = boxes[0][0] - (boxes[0][0] - x1a)/100;
            boxes[1][0] = boxes[1][0] + (x1b - boxes[1][0])/100;
        }
        if (!x) {
            boxes[0][0] = boxes[0][0] + (x2a - boxes[0][0])/100;
            boxes[1][0] = boxes[1][0] - (boxes[1][0] - x2b)/100;
        }
        if (y) {
            boxes[0][1] = boxes[0][1] - (boxes[0][1] - y1a)/100;
            boxes[1][1] = boxes[1][1] + (y1b - boxes[1][1])/100;
        }
        if (!y) {
            boxes[0][1] = boxes[0][1] + (y2a - boxes[0][1])/100;
            boxes[1][1] = boxes[1][1] - (boxes[1][1] - y2b)/100;
        }
        ctx.fillRect(boxes[0][0], boxes[0][1], 10, 10);
        ctx.fillRect(boxes[1][0], boxes[1][1], 10, 10);
        i++;
        console.log(i);
        await sleep(5);
    }
}

main();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}