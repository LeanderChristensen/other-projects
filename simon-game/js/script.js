var simonSound1 = new Audio('audio/simonSound1.mp3');
var simonSound2 = new Audio('audio/simonSound2.mp3');
var simonSound3 = new Audio('audio/simonSound3.mp3');
var simonSound4 = new Audio('audio/simonSound4.mp3');

var x = 1;
var y = false;
var count = 0;
var press = 0;
var random = 0;
var game = [];
var start = false;
var ready = false;
var target;
var normal;
var cheat = false;

function play() {
  if (start === false) {
    count = 0;
    game = [];
    press = 0;
    start = true;
    ready = false;
    document.getElementById("countNumber").style.left = "23px";
    document.getElementById("countNumber").style.top = "-4px";
    document.getElementById("countNumber").style.fontSize = "46px";
    document.getElementById("startText").innerHTML = "STOP";
    document.getElementById("startText").style.left = "6px";
    document.getElementById("countNumber").innerHTML = "1";
    y = false;
    next();
  } else {
    count = 0;
    game = [];
    press = 0;
    start = false;
    ready = false;
    if(y===false){document.getElementById("countNumber").innerHTML = "--";document.getElementById("countNumber").style.left = "14px";}
    document.getElementById("startText").style.left = "4px";
    document.getElementById("startText").innerHTML = "START";
  }
}

async function Press(id) {
  if (start === true && ready === true) {
    if (cheat === true) {
      if (id === 1 || id === 2 || id === 3 || id === 4) {
        if (id !== game[press]) {
          //do nothing
        } else {
          blink(id);
          press++;
          if (press === game.length) {
            ready = false;
            next();
          }
          ready = false;
          await sleep(500);
          ready = true;
        }
      }
    } else {
    blink(id);
    if (id === 1 || id === 2 || id === 3 || id === 4) {
      if (id !== game[press]) {
        end(0);
      } else {
        press++;
        if (press === game.length) {
          ready = false;
          next();
        }
        ready = false;
        await sleep(500);
        ready = true;
      }
    }
   }
  }
}

async function next() {
  count++;
  await sleep(750);
  if (count === 21) {end(1);}else{
    document.getElementById("countNumber").innerHTML = count.toString();
    if (count === 10) {
      document.getElementById("countNumber").style.left = "14px";
    }
    random = Math.floor(Math.random() * 4) + 1;
    game.push(random);
    Game(random);
  }
}

async function Game(id) {
  press = 0;
  for (var i = 0; i < game.length; i++) {
    blink(game[i]);
    await sleep(1000);
  }
  ready = true;
}

function end(id) {
  if (id === 1) {
    document.getElementById("countNumber").style.left = "5px";
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("startText").style.visibility = "hidden";
    win();
  } else if (id === 0) {
    document.getElementById("countNumber").style.left = "5px";
    document.getElementById("countNumber").style.top = "1px";
    document.getElementById("countNumber").style.fontSize = "36px";
    document.getElementById("countNumber").innerHTML = "LOSE";
    y = true;
    play();
  }
}

async function blink(id) {
  switch(id) {
    case 1:
      target = document.getElementById("one");
      simonSound1.play();
      target.style.backgroundColor = "white";
      await sleep(500);
      target.style.backgroundColor = "red";
      await sleep(200);
      break;
    case 2:
      target = document.getElementById("two");
      simonSound2.play();
      target.style.backgroundColor = "white";
      await sleep(500);
      target.style.backgroundColor = "blue";
      await sleep(200);
      break;
    case 3:
      target = document.getElementById("three");
      simonSound3.play();
      target.style.backgroundColor = "white";
      await sleep(500);
      target.style.backgroundColor = "yellow";
      await sleep(200);
      break;
    case 4:
      target = document.getElementById("four");
      simonSound4.play();
      target.style.backgroundColor = "white";
      await sleep(500);
      target.style.backgroundColor = "green";
      await sleep(200);
      break;
  }
}

function win() {
  switch(x) {
    case 0:
      document.getElementById("countNumber").innerHTML = "";
      x = 1;
      break;
    case 1:
      document.getElementById("countNumber").innerHTML = "WIN";
      x = 0;
      break;
  }
  setTimeout(win, 1000);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
