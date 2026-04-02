/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by Wilkin Porter
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(1916, 953);
	world.gravity.y = 9.807/4;
	sixsevenrect = new Sprite(6.7, 67, 67, 67);
	sixsevenrect.color = 'cyan';
	sixsevenrect.rotationSpeed = 2;
	sixsevenrect.vel.x = 2;

	sixsevencircle = new Sprite(67, 67, 6.7);
	sixsevencircle.color = 'red';

	platform_67 = new Sprite(0, 500, 10000, 40, 'k');
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