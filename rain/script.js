const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");


let boxes = [];

async function main() {
    while (true) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        if (Math.floor(Math.random() * 100) == 9) {
            ctx.fillStyle = "#ffff80";
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
            // await sleep(1);
        }
        ctx.fillStyle = "blue";
        boxes.push([Math.floor(Math.random() * window.innerWidth), 0]);
        for (let i=0;i<boxes.length;i++) {
            ctx.fillRect(boxes[i][0], boxes[i][1], 5, 10);
            //boxes[i][0] += 10;
            boxes[i][1] += 10;
        }
        //boxes[0].y++;
        await sleep(5);
    }
}

main();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// function draw(evt) {
//     var pos = getMousePos(canvas, evt);
//     ctx.fillRect(pos.x-12, pos.y-12, 25, 25);
// }

// function getMousePos(canvas, evt) {
//     var rect = canvas.getBoundingClientRect();
//     return {
//       x: evt.clientX - rect.left,
//       y: evt.clientY - rect.top
//     };
// }  