var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy ,fairyImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg = loadImage("images/fairyImage1.png","images/fairyImage2.png");
	//sound
	sound = loadSound("sound/joyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	sound.play();
	//create fairy sprite and add animation for fairy
	fairy = createSprite(100,400)
    fairy.addImage(fairyImg)
	fairy.scale = 0.2;
	
    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	fairyBody = Bodies.circle(100 , 400 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, fairyBody);

	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  Engine.update(engine)

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
   if(star.y>370 && starBody.position.y >370){
	Matter.Body.setStatic(starBody,true)
	
}

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	if(keyCode ===LEFT_ARROW){
       fairy.velocityX = fairy.velocityX-1;
	}
    if(keyCode ===RIGHT_ARROW){
		fairy.velocityX = fairy.velocityX+1;
	 }

}

