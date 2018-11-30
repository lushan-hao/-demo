var scoreBox = document.getElementById("score");
var oStart = document.getElementById("startr");
var oPlay = document.getElementById("play");
var oMain = document.getElementById("main");
var oOne = document.getElementById("one");
var oSecond = document.getElementById("second");
var oStartImg = document.getElementById("startimg");
var over = document.getElementById("over");
var fen = document.getElementById("fen");
var close = document.getElementById("close");
var snakeMove;
var speed = 200;
var snakeMove;
close.onclick = function() {
  over.style.display = "none";
  oOne.style.display = "none";
  oStartImg.style.display = 'block';
  oStartImg.style.zIndex = "999";
  oPlay.style.display = 'none';
};
oStartImg.onclick = function() {
  oPlay.style.display = "block";
  oOne.style.display = "block";
  oStartImg.style.display = "none";
  oStartImg.style.zIndex = "-999";
  bindEvent();
  init();
  food();
  snake();
  snakeMove = setInterval(function() {
    // console.log('1');
    move();
  }, speed);
};
oSecond.onclick = function() {
  oOne.style.display = "block";
  oSecond.style.display = "none";
  snakeMove = setInterval(function() {
    // console.log('2');
    move();
  }, speed);
  bindEvent();
};
oOne.onclick = function() {
  oOne.style.display = "none";
  oSecond.style.display = "block";
  clearInterval(snakeMove);
  document.onkeydown = function(e){
    e.returnValue = false;
    return false;
  }
};

function init() {
  //地图
  this.mapW = parseInt(getComputedStyle(oMain).width);
  this.mapH = parseInt(getComputedStyle(oMain).height);
  this.mapDiv = oMain;
  //食物
  this.foodW = 20;
  this.foodH = 20;
  this.foodX = 0;
  this.foodY = 0;
  //蛇
  this.snakeW = 20;
  this.snakeH = 20;
  this.snakeBody = [[7, 1, "head"], [6, 1, "body"], [5, 1, "body"]];
  //游戏属性
  this.direct = "right";
  this.left = false;
  this.right = false;
  this.up = true;
  this.buttom = true;
  this.score = 0;
}

function food() {
  var food = document.createElement("div");
  food.style.width = this.foodW + "px";
  food.style.height = this.foodH + "px";
  food.style.position = "absolute";
  this.foodX = Math.floor(Math.random() * (this.mapW / 20));
  this.foodY = Math.floor(Math.random() * (this.mapH / 20));
  food.style.left = this.foodX * 20 + "px";
  food.style.top = this.foodY * 20 + "px";
  this.mapDiv.appendChild(food).setAttribute("class", "food");
}
function snake() {
  for (var i = 0; i < this.snakeBody.length; i++) {
    var snake = document.createElement("div");
    snake.style.width = this.snakeW + "px";
    snake.style.height = this.snakeH + "px";
    snake.style.position = "absolute";
    snake.style.left = this.snakeBody[i][0] * 20 + "px";
    snake.style.top = this.snakeBody[i][1] * 20 + "px";
    snake.classList.add(this.snakeBody[i][2]);
    this.mapDiv.appendChild(snake).classList.add("snake");
    switch (this.direct) {
      case "right":
        break;
      case "left":
        snake.style.transform = "rotate(180deg)";
        break;
      case "up":
        snake.style.transform = "rotate(-90deg)";
        break;
      case "buttom":
        snake.style.transform = "rotate(90deg)";
        break;
      default:
        break;
    }
  }
}
function move() {
  for (var i = this.snakeBody.length - 1; i > 0; i--) {
    this.snakeBody[i][0] = this.snakeBody[i - 1][0];
    this.snakeBody[i][1] = this.snakeBody[i - 1][1];
  }
  switch (this.direct) {
    case "right":
      this.snakeBody[0][0] += 1;
      break;
    case "left":
      this.snakeBody[0][0] -= 1;
      break;
    case "up":
      this.snakeBody[0][1] -= 1;
      break;
    case "buttom":
      this.snakeBody[0][1] += 1;
      break;
    default:
      break;
  }
  removeClass("snake");
  snake();
  if (
    this.snakeBody[0][0] == this.foodX &&
    this.snakeBody[0][1] == this.foodY
  ) {
    this.score += 1;
    scoreBox.innerHTML = this.score;
    removeClass("food");
    food();
    var snakeEndx = this.snakeBody[this.snakeBody.length - 1][0];
    var snakeEndy = this.snakeBody[this.snakeBody.length - 1][1];
    switch (this.direct) {
      case "right":
        this.snakeBody.push([snakeEndx - 1, snakeEndy, "body"]);
        break;
      case "left":
        this.snakeBody.push([snakeEndx + 1, snakeEndy, "body"]);
        break;
      case "up":
        this.snakeBody.push([snakeEndx, snakeEndy - 1, "body"]);
        break;
      case "buttom":
        this.snakeBody.push([snakeEndx, snakeEndy + 1, "body"]);
        break;
      default:
        break;
    }
  }
  if (this.snakeBody[0][0] < 0 || this.snakeBody[0][0] >= this.mapW / 20) {
    relodGame();
  }
  if (this.snakeBody[0][1] < 0 || this.snakeBody[0][1] >= this.mapH / 20) {
    relodGame();
  }
  var snakeHX = this.snakeBody[0][0];
  var snakeHY = this.snakeBody[0][1];
  for (var i = 1; i < this.snakeBody.length; i++) {
    if (snakeHX == snakeBody[i][0] && snakeHY == snakeBody[i][1]) {
      relodGame();
    }
  }
}
function removeClass(className) {
  var ele = document.getElementsByClassName(className);
  while (ele.length > 0) {
    ele[0].parentNode.removeChild(ele[0]);
  }
}

function bindEvent() {
  document.onkeydown = function(e) {
    var code = e.keyCode;
    setDerict(code);
  };
}

function setDerict(code) {
  switch (code) {
    case 37:
      if (this.left) {
        this.direct = "left";
        this.left = false;
        this.right = false;
        this.up = true;
        this.buttom = true;
      }
      break;
    case 38:
      if (this.up) {
        this.direct = "up";
        this.left = true;
        this.right = true;
        this.up = false;
        this.buttom = false;
      }
      break;
    case 39:
      if (this.right) {
        this.direct = "right";
        this.left = false;
        this.right = false;
        this.up = true;
        this.buttom = true;
      }
      break;
    case 40:
      if (this.buttom) {
        this.direct = "buttom";
        this.left = true;
        this.right = true;
        this.up = false;
        this.buttom = false;
      }
      break;
    default:
      break;
  }
}

function relodGame() {
  removeClass("snake");
  removeClass("food");
  clearInterval(snakeMove);
  this.snakeBody = [[7, 1, "head"], [6, 1, "body"], [5, 1, "body"]];
  this.direct = "right";
  this.left = false;
  this.right = false;
  this.up = true;
  this.buttom = true;
  over.style.display = "block";
  fen.innerHTML = this.score;
  this.score = 0;
  scoreBox.innerHTML = this.score;
}
