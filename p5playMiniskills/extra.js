/*******************************************************/
// P5.play: extra.js
// Ice Demo
// Written by Wilkin Porter
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	var titleHeight = 100;
	console.log("setup: ");
	cnv = new Canvas(windowWidth -4,  windowHeight -4);
	frameRate(60)
	//world.gravity.y = 9.807;
	wallLH  = new Sprite(4, height/2+titleHeight, 8, height, 'k');
	wallLH.color = 'black';
	wallRH  = new Sprite(width-4, height/2+titleHeight, 8, height, 'k');
	wallRH.color = 'black';
	wallTop = new Sprite(width/2, 4+titleHeight, width, 8, 'k');
	wallTop.color = 'black';
	wallBot = new Sprite(width/2, height-4, width, 8, 'k');
	wallBot.color = 'black';

	iceBall = new Sprite(width/2, height/2+100, 80, 'd');
	iceBall.color = 'black';
	iceBall.vel.x = (randomInclNegative()*40);
	iceBall.vel.y = (randomInclNegative()*40);
	iceBall.bounciness = 1.5;
	iceBall.friction = 0;
	iceBall.drag = 0;
	iceBall.text = "ICE";
    iceBall.textSize = 40;
    iceBall.textColor = 'white';

	alienGroup = new Group();
	alienGroup.collides(iceBall, removeAlien);

	for (i = 0; i < 100; i++) {
		alien = new Sprite(width/2, height/2, 20, 20);
		alien.vel.x = (randomInclNegative()*80);
		alien.vel.y = (randomInclNegative()*80);
		alien.bounciness = 1;
		alien.friction = 0;
		alien.drag = 0;
        alien.color = random(['#633a0e', '#855624', '#2e1a05']);
		alienGroup.add(alien);
	}

	whiteGroup = new Group();

	for (i = 0; i < 50; i++) {
		white = new Sprite(width/2, height/2, 20, 20);
		white.vel.x = (randomInclNegative()*80);
		white.vel.y = (randomInclNegative()*80);
		white.bounciness = 1;
		white.friction = 0;
		white.drag = 0;
        white.color = 'white';
		whiteGroup.add(white);
	}
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('lightgrey'); 
	
	fill('red'); 
  	textSize(40);
  	textAlign(CENTER, CENTER);
  	text('I do not support ICE. This is to raise awareness only.', width/2, 50);
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
// removeAlien()
/*******************************************************/
function removeAlien(_alienCollidedWith, _ball1) {
	_alienCollidedWith.remove();
}

/*******************************************************/
//  END OF APP
/*******************************************************/