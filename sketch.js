var starImg,bgImg,fairyImg;
var star,starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImage = loadImage("images/fairyImage1.png,fairyImage2.png");
}

function setup(){
	createCanvas(800,750);

	fairy = createSprite(130,520);
	fairy.addAnimation("flyingfairy",fairyImg);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
}

function draw(){
	background(bgImg);
	drawSprites();
}




