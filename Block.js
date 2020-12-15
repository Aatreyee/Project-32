class Block
{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0,
            
            friction:1,
            density:0.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
       
        this.width=width;
        this.height=height;
        World.add(world,this.body);  
        
    }
    display(){
        var angle = this.body.angle;
        if(this.body.speed<3){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("pink");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        } else{
            World.remove(world,this.body);
            push();
            this.visibility=this.visibility-5;
            pop();
        }
            
       
      }
   score(){
        if(this.visibility<0&&this.visibility>-105){
            score++;
        }
    }
   
}

   
  

