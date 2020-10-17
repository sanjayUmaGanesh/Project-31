const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var engine, world;
var wall1,wall2,wall3,wall4;
var div1,div2,div3,div4,div5,div6;
var divisionHeight = 300;
//var sp;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  

  wall1 = new Ground(5,400,10,height);
  wall2 = new Ground(475,400,10,height);
  wall3 = new Ground(240,5,width,10);
  wall4 = new Ground(240,800,width,10);
  //createSprite(400, 200, 50, 50);

  for(var j = 40; j <= width;j=j+50){
    plinkos.push(new Splinko(j,75));
   }
  
   for(var m = 80; m <= width-15;m=m+50){
    plinkos.push(new Splinko(m,175))
   }
  
   for(var n = 40; n <= width;n=n+50){
    plinkos.push(new Splinko(n,275))
   }
  
   for(var l = 80; l <= width-15;l=l+50){
    plinkos.push(new Splinko(l,375))
   }


  div1 = new Div(80,700,10,260);
  div2 = new Div(160,700,10,260);
  div3 = new Div(240,700,10,260);
  div4 = new Div(320,700,10,260);
  div5 = new Div(400,700,10,260);

   //sp = new Splinko(400,70);
}

function draw() {
  Engine.update(engine);
  background("black");  
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();

  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();

 for(i = 0; i < plinkos.length;i++){
   plinkos[i].display();
 }

/*



 for(var j = 0; j <= plinkos.length;j=j+50){
  plinkos[j].display();
 }

 for(var n = 0; n <= plinkos.length;n=n+50){
  plinkos[n].display();
 }

 for(var m = 0; m <= plinkos.length;m=m+50){
  plinkos[m].display();
 }

 for(var l = 0; l <= plinkos.length;l=l+50){
  plinkos[l].display();
 }
 */

 

 if(frameCount % 60 === 0){
   particles.push(new Particle(random(width/2 -30,width/2 + 30),10,10))  
 }

 for(var s = 0;s < particles.length;s++){
   particles[s].display();
 }
  
  drawSprites();
}