const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
let blink = 0;
let colorNumber;

let dvdsize = {
	x: 145,
	y: 65
};

let dvdpos = {
	x: Math.floor(Math.random() * (canvas.width-dvdsize.x)),
	y: Math.floor(Math.random() * (canvas.height-dvdsize.y)),
};

let dvdvel = {
	x: 1,
	y: 1
};


dvd = new Image();
dvd.src = 'img/blue.png';

async function draw() {
	if (blink == 0) {
		ctx.fillStyle = "black";
	} else {
		ctx.fillStyle = "gold";
	}
	ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
	ctx.drawImage(dvd, dvdpos.x, dvdpos.y, dvdsize.x, dvdsize.y);
	if (dvdpos.y > canvas.height-dvdsize.y) {
		dvdvel.y = -1;
		color();
	}
	if (dvdpos.y < 0) {
		dvdvel.y = 1;
		color();
	}
	if (dvdpos.x > canvas.width-dvdsize.x) {
		dvdvel.x = -1;
		color();
	}
	if (dvdpos.x < 0) {
		dvdvel.x = 1;
		color();
	}
	if (dvdpos.y == 0 && dvdpos.x == 0 || dvdpos.y == 0 && dvdpos.x == canvas.width-dvdsize.x || dvdpos.y == canvas.height-dvdsize.y && dvdpos.x == 0 || dvdpos.y == canvas.height-dvdsize.y && dvdpos.x == canvas.width-dvdsize.x) {
		corner();
	}
	dvdpos.x = dvdpos.x + dvdvel.x;
	dvdpos.y = dvdpos.y + dvdvel.y;
	await sleep(1);
	draw();
}

async function corner() {
	for (let i = 0; i < 5; i++) {
		blink = 1;
		await sleep(100);
		blink = 0;
		await sleep(100);
	}
}

function color() {
	let tempColor = Math.floor(Math.random() * 6);
	if (tempColor == colorNumber) {
		color();
	} else {
		colorNumber = tempColor;
		switch (colorNumber) {
			case 0:
				dvd.src = 'img/blue.png';
				break;
			case 1:
				dvd.src = 'img/lightblue.png';
				break;
			case 2:
				dvd.src = 'img/orange.png';
				break;
			case 3:
				dvd.src = 'img/pink.png';
				break;
			case 4:
				dvd.src = 'img/purple.png';
				break;
			case 5:
				dvd.src = 'img/red.png';
				break;
			default:
				color();
		}
	}
}

draw();

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}