const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var Sling1, Sling2, Sling3, Sling4, Sling5;
var mConstraint;

function setup(){
    var canvas = createCanvas(windowWidth/2, windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;

    //let canvasmouse = Mouse.create(canvas.elt);
    //canvasmouse.pixelRatio = pixelDensity();
    //let option = {
    //
    //    mouse : canvasmouse
    //}
    //mConstraint = MouseConstraint.create(engine, option);
    //World.add(world, mConstraint);


    let canvasmouse = Mouse.create(canvas.elt); 
    canvasmouse.pixelRatio = pixelDensity(); 
    
    let options = {
         mouse: canvasmouse 
    };

   mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);

    pendulum1 = new Pendulum(100, 200, "blue");
    pendulum2 = new Pendulum(160, 200, "blue");
    pendulum3 = new Pendulum(220, 200, "blue");
    pendulum4 = new Pendulum(280, 200, "blue");
    pendulum5 = new Pendulum(340, 200, "blue");


    Sling1 = new sling(pendulum1.body, {x : 100, y : 100});
    Sling2 = new sling(pendulum2.body, {x : 160, y : 100});
    Sling3 = new sling(pendulum3.body, {x : 220, y : 100});
    Sling4 = new sling(pendulum4.body, {x : 280, y : 100});
    Sling5 = new sling(pendulum5.body, {x : 340, y : 100});


}

function draw(){
    background("black");
    Engine.update(engine);

    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();
    Sling1.display();
    Sling2.display();
    Sling3.display();
    Sling4.display();
    Sling5.display();
    
   // mouseDragged();
}
function mouseDragged(){

    Matter.Body.setPosition(pendulum1.body, {x : mouseX, y : mouseY});
}