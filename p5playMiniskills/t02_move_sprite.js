/*******************************************************/
// P5.play: t02_move_sprite
// Move a sprite
// Written by Wilkin Porter
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(1916, 953);
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