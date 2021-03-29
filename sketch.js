const Engine = Matter.Engine;
    const World = Matter.World;
    const Body = Matter.Body;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;

    var tree, treeImage;
    var juno, junoImage;
    var sun, sunImage;

    var ThrowRock;
    var OriginGround;
    var Mango1, Mango2, Mango3, Mango4, Mango5, Mango6, Mango7;
    var ChainHand;

function preload() {
    treeImage = loadImage("images/tree.png");
    junoImage = loadImage("images/boy.png");
    //sunImage = loadImage("Images/OhnoSun.png");
}

function setup() {
    createCanvas(1350, 600);

    tree = createSprite(1020, 330, 50, 50);
    tree.addImage(treeImage);
    tree.scale=0.4;

    juno = createSprite(250, 510, 70, 70);
    juno.addImage(junoImage);
    juno.scale=0.09;

    engine = Engine.create();
    world = engine.world;

    OriginGround = new Ground(width/2, 580, 1350, 40);

    ThrowRock = new SRock(250, 300, 40);

    Mango1 = new Mango(1170, 200, 30);
    Mango2 = new Mango(1100, 250, 30);
    Mango3 = new Mango(1090, 170, 30);
    Mango4 = new Mango(930, 180, 30);
    Mango5 = new Mango(1000, 200, 30);
    Mango6 = new Mango(920, 300, 30);
    Mango7 = new Mango(1000, 290, 30);
    Mango8 = new Mango(860, 230, 30);
    Mango9 = new Mango(1050, 130, 30);
    Mango10 = new Mango(990, 140, 30);
    Mango11 = new Mango(1200, 270, 30);
    Mango12 = new Mango(950, 250, 30);

    ChainHand = new ChainConstraint(ThrowRock.body, {x:200, y:460});
}

function draw() {
    background(0, 153, 255);
    drawSprites();

    Engine.update(engine);

    detectCollision(ThrowRock, Mango1);
    detectCollision(ThrowRock, Mango2);
    detectCollision(ThrowRock, Mango3);
    detectCollision(ThrowRock, Mango4);
    detectCollision(ThrowRock, Mango5);
    detectCollision(ThrowRock, Mango6);
    detectCollision(ThrowRock, Mango7);
    detectCollision(ThrowRock, Mango8);
    detectCollision(ThrowRock, Mango9);
    detectCollision(ThrowRock, Mango10);
    detectCollision(ThrowRock, Mango11);
    detectCollision(ThrowRock, Mango12);

    OriginGround.display();
    ThrowRock.display();
    Mango1.display();
    Mango2.display();
    Mango3.display();
    Mango4.display();
    Mango5.display();
    Mango6.display();
    Mango7.display();
    Mango8.display();
    Mango9.display();
    Mango10.display();
    Mango11.display();
    Mango12.display();

    ChainHand.display();

   
}

function mouseDragged() {
    Matter.Body.setPosition(ThrowRock.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
    ChainHand.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(ThrowRock.body, {x:200, y:460})
        ChainHand.comeBack(ThrowRock.body);
    }
}


function detectCollision(ThrowRock,mango){
    mangoBodyPosition=mango.body.position;
    stoneBodyPosition=ThrowRock.body.position;
    
    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance<=mango.r+ThrowRock.r){
    Matter.Body.setStatic(mango.body,false);	

    }

}