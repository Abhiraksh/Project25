class Dustbin{
 
    constructor(x,y,width,height){

    var options = {
       
        isStatic: true

    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbin (2).png")
    World.add(world,this.body);
}


 visible(){

    var pos = this.body.position;
   
    fill("red");
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,150,250);
    
}
}
