const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var bgImg;

var ground,ground1;
var hero;
var rope;

//tower 1
var block1,block2,block3,block4,block5,block6,block7,block8;

//tower 2
var block9,block10,block11,block12,block13,block14;

//tower 3
var block15,block16,block17,block18,block19,block20,block21;

//tower 4
var block22,block23,block24,block25,block26,block27,block28,block29,block30;

//tower 5
var block31,block32,block33,block34,block35;

var monster;

function preload() {
  bgImg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 1400);
  
  engine = Engine.create();
	world = engine.world;

  Engine.run(engine);

  ground = new Ground (400,600,1000,10);

  ground1 = new Ground (1100,500,100,10);
  

  hero = new Hero (230,250,250,150);

  rope = new Fly (hero.body, {x:230 , y:50});

  //tower 1
  block1 = new Block (520,565,40,60);
  block2 = new Block (520,505,40,60);
  block3 = new Block (520,445,40,60);
  block4 = new Block (520,385,40,60);
  block5 = new Block (520,325,40,60);
  block6 = new Block (520,265,40,60);
  block7 = new Block (520,205,40,60);
  block8 = new Block (520,145,40,60);

  //tower 2
  block9 = new Block (600,565,40,60);
  block10 = new Block (600,505,40,60);
  block11 = new Block (600,445,40,60);
  block12 = new Block (600,385,40,60);
  block13 = new Block (600,325,40,60);
  block14 = new Block (600,265,40,60);

  //tower 3
  block15 = new Block (680,565,40,60);
  block16 = new Block (680,505,40,60);
  block17 = new Block (680,445,40,60);
  block18 = new Block (680,385,40,60);
  block19 = new Block (680,325,40,60);
  block20 = new Block (680,265,40,60);
  block21 = new Block (680,205,40,60);

  //tower 4
  block22 = new Block (760,565,40,60);
  block23 = new Block (760,505,40,60);
  block24 = new Block (760,445,40,60);
  block25 = new Block (760,385,40,60);
  block26 = new Block (760,325,40,60);
  block27 = new Block (760,265,40,60);
  block28 = new Block (760,205,40,60);
  block29 = new Block (760,145,40,60);
  block30 = new Block (760,100,40,60);

  //tower 5
  block31 = new Block (840,565,40,60);
  block32 = new Block (840,505,40,60);
  block33 = new Block (840,445,40,60);
  block34 = new Block (840,385,40,60);
  block35 = new Block (840,325,40,60);

  monster = new Monster (1100,150,150,100);

}

function draw() {
  background("white");
  ground1.display();
  background(bgImg);


  ground.display();
  

  rope.display();

  //tower 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  //tower 2
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  //tower 3
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  //tower 4
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();

  //tower 5
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();

  hero.display();

  monster.display();
  

}

function mouseDragged ()
{
  Matter.Body.setPosition(hero.body, {x: mouseX , y:mouseY});
}
