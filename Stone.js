class Stone
{
    constructor(x,y){
        var options = {
        restitution :0.6,
        friction :0.9,
        density :12
 } 
     this.body =Bodies.rectangle(x,y,40,40,options);
     this.width = 40;
     this.height = 70;
     World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("brown");
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
    }
}