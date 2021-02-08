var canvas;
var music;
var box1 
var box11
var box2 
var box22
var box3 
var box33
var box4
var box44

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
    box11 = createSprite(100,540,30,30);
    box22 = createSprite(300,540,30,30);
    box33 = createSprite(500,540,30,30);
    box44 = createSprite(700,540,30,30);


    //create box sprite and give velocity
    box1 = createSprite(100,580,150,20);
    box2 = createSprite(300,580,150,20);
    box3 = createSprite(500,580,150,20);
    box4 = createSprite(700,580,150,20);

}

function draw() {
    background(rgb(169,169,169));
    background("black")
    //create edgeSprite
    createEdgeSprites();
    box1.shapeColor="red"
    box2.shapeColor="orange"
    box3.shapeColor="purple"
    box4.shapeColor="blue"
    box11.shapeColor="red"
    box22.shapeColor="orange"
    box33.shapeColor="purple"
    box44.shapeColor="blue"
drawSprites()
    //add condition to check if box touching surface and make it box
}