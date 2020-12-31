const World = Matter.World; 
const Engine = Matter.Engine; 
const Bodies = Matter.Bodies; 

var engine, world; 
var ground; 
var divisions = []; 
var particles = []; 
var plinkos = []; 

function setup() {
  createCanvas(480,700);

  engine = Engine.create(); 
  world = engine.world; 
  ground = new Ground(240,690,480,10); 

  for(var x = 0; x<480; x = 80 + x) {
    divisions.push(new Ground(x,640,10,100)); 
  }

  for(var j = 40; j <=700; j = j + 50) {
    plinkos.push(new Plinko(j,75,10)); 
  }

  for(var j = 15; j <=700-10; j = j + 50) {
    plinkos.push(new Plinko(j,175,10)); 
  }

  for(var j = 40; j <=700; j = j + 50) {
    plinkos.push(new Plinko(j,275,10)); 
  }

  for(var j = 15; j <=700-10; j = j + 50) {
    plinkos.push(new Plinko(j,375,10)); 
  }

}

function draw() {
  background("black");  
  Engine.update(engine); 
  
  ground.display(); 

  for(var i = 0; i<divisions.length; i++) {
    divisions[i].display(); 
  } 

  for( var i = 0; i<plinkos.length; i++) {
    plinkos[i].display(); 
  }

  if(frameCount%60 == 0) {
    particles.push(new Particle(random(width/2-10, width/2+10), 10,5)); 
  }

  for( var i = 0; i<particles.length; i++) {
    particles[i].display(); 
  }


}