const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var solo;
var caixa, caixa2, caixa3, caixa4, caixa5,
caixa6, caixa7, caixa8, caixa9, caixa10,
caixa11, caixa12, caixa13, caixa14, caixa15,
caixa16, caixa17, caixa18, caixa19, caixa20;
var engine, world;

function setup(){
    createCanvas(3000,800);

    engine = Engine.create();
    world = engine.world;

    solo = new Solo(600,600,1200,20);

    caixa = new Caixa(900,100,70,70);
    caixa2 = new Caixa(900,100,70,70);
    caixa3 = new Caixa(900,100,70,70);
    caixa4 = new Caixa(900,100,70,70);
    caixa5 = new Caixa(900,100,70,70);
    caixa6 = new Caixa(900,100,70,70);
    caixa7 = new Caixa(800,100,70,70);
    caixa8 = new Caixa(800,100,70,70);
    caixa9 = new Caixa(800,100,70,70);
    caixa10 = new Caixa(800,100,70,70);
    caixa11 = new Caixa(800,100,70,70);
    caixa12 = new Caixa(800,100,70,70);
    caixa13 = new Caixa(700,100,70,70);
    caixa14 = new Caixa(700,100,70,70);
    caixa15 = new Caixa(700,100,70,70);
    caixa16 = new Caixa(700,100,70,70);
    caixa17 = new Caixa(700,100,70,70);
    caixa18 = new Caixa(700,100,70,70);
    caixa19 = new Caixa(700,100,70,70);
    caixa20 = new Caixa(700,100,70,70);
}

function draw(){
    background("white");

    Engine.update(engine);

    solo.display();

    caixa.display();
    caixa2.display();
    caixa3.display();
    caixa4.display();
    caixa5.display();
    caixa6.display();
    caixa7.display();
    caixa8.display();
    caixa9.display();
    caixa10.display();
    caixa11.display();
    caixa12.display();
    caixa13.display();
    caixa14.display();
    caixa15.display();
    caixa16.display();
    caixa17.display();
    caixa18.display();
    caixa19.display();
    caixa20.display();
}