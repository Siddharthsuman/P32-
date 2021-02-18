class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
       this.visiblity=255;
        World.add(world,this.body)
    }
    score(){
      if(this.visiblity<0&&this.visiblity>-105){
        score++;
      }
    }
     display(){
       //  console.log(this.body.speed);
        if(this.body.speed<9.4 ){
            var pos=this.body.position;
            rectMode(CENTER);
          rect(pos.x,pos.y,this.width,this.height)
            
        }
        else{
            World.remove(world,this.body);
            push();
            this.visiblity=-5;
            tint(255,this.visiblity);
          
         // this.visibility=this.visibility-5; 
          pop();
        }
       
       
        }

}