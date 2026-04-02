/*******************************************************/
// P5.play: t03_gravity
// Sprite falls due to gravity
// Written by Wilkin Porter
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(1916, 953);
	world.gravity.y = 9.807;
	sixsevenrect = new Sprite(6.7, 67, 67, 67);
	sixsevenrect.color = 'cyan';
	sixsevenrect.rotationSpeed = 2;
	sixsevenrect.vel.x = 2;
	sixsevencircle = new Sprite(67, 67, 6.7);
	sixsevencircle.color = 'red';
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('white'); 
}

/*******************************************************/
//  END OF APP
/*******************************************************/