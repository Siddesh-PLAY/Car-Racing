var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var allplayers;
var form, player, game;
var C1,C2,C3,C4;
var Cars;

function setup(){
  canvas = createCanvas(displayWidth-60,displayHeight-60);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount===4){
    game.update(1)
  }
  if(gameState===1){
    clear();
    game.play();
  }
}
