const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint

var world,engine,body;
var polygon1;
var ground1,ground2,ground3;
var sling1;
var b1,b2,b3,b4,b5,b6,b7;
var b8,b9,b10,b11,b12;
var b13,b14,b15;
var b16;
var B1,B2,B3,B4,B5;
var B6,B7,B8;
var B9;
var score=0;
var backgroundImg,platform;
function preload(){
    getBackgroundImg();

} 
function setup(){
    createCanvas(1400,700);

    engine=Engine.create();
    world=engine.world;

    ground1=new Ground(700,690,1400,20)
    ground2=new Ground(750,480,380,20);
    ground3=new Ground(1180,290,270,20);
// L4
b1=new Box(595,470,50,80);
b2=new Box(645,470,50,80);
b3=new Box(765,470,50,80);
b4=new Box(805,470,50,80);
b5=new Box(835,470,50,80);
b6=new Box(685,470,50,80);
b7=new Box(900,470,50,80);

//L3
b8=new Box(660,420,50,80);
b9=new Box(700,420,50,80);
b10=new Box(765,420,50,80);
b11=new Box(805,420,50,80);
b12=new Box(835,420,50,80);
//L2
b13=new Box(705,370,50,80);
b14=new Box(755,370,50,80);
b15=new Box(785,370,50,80);
//L1
b16=new Box(755,320,50,80);

//L3
B1=new Box(1080,280,50,80);
B2=new Box(1130,280,50,80);
B3=new Box(1180,280,50,80);
B4=new Box(1230,280,50,80);
B5=new Box(1280,280,50,80);
//L2
B6=new Box(1130,220,50,80);
B7=new Box(1180,220,50,80);
B8=new Box(1230,220,50,80);
//L1
B9=new Box(1180,160,50,80);
   polygon1=new Polygon(200,430,65,65);
   sling1=new Slingshot(polygon1.body,{x:200,y:430});
    Engine.run(engine);

}
 
function draw(){
if (backgroundImg)
background(backgroundImg)
push();
fill(255, 255, 255)
textSize(30);
stroke(10);
strokeWeight(10)
text("SCORE:"+score,80,100);
pop();
push();
fill(137, 161, 255)
textSize(30);
stroke(10);
strokeWeight(10)
text("Drag the Hexagonal Stone and Release it,to launch it towards the blocks",10,50)
pop();
push();
fill(245, 245, 245);
textSize(25);
stroke(10);
strokeWeight(5);
text("Press Space to get a second Chance to Play",850,580);
pop();
ground1.display();
ground2.display();
ground3.display();
polygon1.display();
sling1.display();
push();
fill(0, 229, 255)
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();

pop();
push();
fill(85, 124, 224)
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();

pop();
push();
fill(195, 255, 0)
b13.display();
b14.display();
b15.display();

pop()
push()
fill(239, 117, 150)
b16.display();

pop();
push();
fill(255, 178, 79);
B1.display();
B2.display();
B3.display();
B4.display();
B5.display();

pop();
push();
fill(252, 5, 108);
B6.display();
B7.display();
B8.display();

pop();
push();
fill(238, 255, 130)
B9.display();

pop();
b1.score();
b2.score();
b3.score();
b4.score();
b5.score();
b6.score();
b7.score();
b8.score();
b9.score();
b10.score();
b11.score();
b12.score();
b13.score();
b14.score();
b15.score();
b16.score();
B1.score();
B2.score();
B3.score();
B4.score();
B5.score();
B6.score();
B7.score();
B8.score();
B9.score();
drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling1.fly();
}

function keyPressed(){
    if(keyCode===32){
        sling1.attach(polygon1.body);
        Matter.Body.setPosition(polygon1.body,{x:200,y:430});
    }
    }
 async function getBackgroundImg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json();
    var datetime= responseJSON.datetime
     var hour=datetime.slice(11,13);
  if(hour>=06 && hour<=11){
   backgroundImg=loadImage("morning.jpg")
     }
     if(hour>=12 && hour<=16){
         backgroundImg=loadImage("afternoon.png")
     }
     if (hour>=17 && hour<=19){
         backgroundImg=loadImage("evening.png")
     }
     if (hour>=20 && hour<=05){
   backgroundImg=loadImage("night.jpg")
     }
 }
 
    
 