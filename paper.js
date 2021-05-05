class Paper{
 
    constructor(x,y,radius){

    var options = {
       
        isStatic: false,
        restitution: 0.3,
        friction:0.5,
        density: 1

    }
    this.body = Bodies.circle(x,y,radius,options);
    this.image = loadImage("paper (1).png");
    
    this.radius = radius;
    World.add(world,this.body);
}


 show(){

    var pos = this.body.position;
   
    fill("green");
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,40,40);
    
}
}