/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by Wilkin Porter
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth -4,  windowHeight -4);
	frameRate(60)
	world.gravity.y = 9.807;
	wallLH  = new Sprite(4, height/2, 8, height, 'k');
	wallLH.color = 'black';
	wallRH  = new Sprite(width-4, height/2, 8, height, 'k');
	wallRH.color = 'black';
	wallTop = new Sprite(width/2, 4, width, 8, 'k');
	wallTop.color = 'black';
	wallBot = new Sprite(width/2, height-4, width, 8, 'k');
	wallBot.color = 'black';
	wallMid = new Sprite(width/2, height/2, 8, height/2, 'k');
	wallMid.color = 'black';

	ball_1 = new Sprite(width/2, height/2, 90, 'd');
	ball_1.color = 'cyan';
	ball_1.vel.x = (randomInclNegative()*40);
	ball_1.vel.y = (randomInclNegative()*40);
	ball_1.bounciness = 1;
	ball_1.friction = 0;
	ball_1.drag = 0;

	ball_2 = new Sprite(width/2, height/2, 90, 'd');
	ball_2.color = 'yellow';
	ball_2.vel.x = (randomInclNegative()*40);
	ball_2.vel.y = (randomInclNegative()*40);
	ball_2.bounciness = 1;
	ball_2.friction = 0;
	ball_2.drag = 0;

	ball_3 = new Sprite(width/2, height/2, 90, 'd');
	ball_3.color = 'red';
	ball_3.vel.x = (randomInclNegative()*40);
	ball_3.vel.y = (randomInclNegative()*40);
	ball_3.bounciness = 1;
	ball_3.friction = 0;
	ball_3.drag = 0;

	ball_4 = new Sprite(width/2, height/2, 90, 'd');
	ball_4.color = 'green';
	ball_4.vel.x = (randomInclNegative()*40);
	ball_4.vel.y = (randomInclNegative()*40);
	ball_4.bounciness = 1;
	ball_4.friction = 0;
	ball_4.drag = 0;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('lightgrey'); 
}

/*******************************************************/
// randomInclNegative()
/*******************************************************/
function randomInclNegative() {
	if (Math.random() >= 0.5) {
		return Math.random()*-1;
	}

	return Math.random();
}

/*******************************************************/
//  END OF APP
/*******************************************************/