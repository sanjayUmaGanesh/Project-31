class Splinko{

    constructor(x,y){
        var options = {
            isStatic: true
        }

        this.r = 30;
        //this.image = loadImage("paper.png");
        this.body = Bodies.circle(x, y, 15, options)
        //this.splinkos = []


        

        World.add(world, this.body);
        

    }
    display(){
        var pos =this.body.position;
        
        push();
        translate(pos.x, pos.y);
        fill("red");
        rectMode(CENTER)
        //imageMode(CENTER);
       // strokeWeight(4);
        ellipse(0, 0, 15);
        pop();

        
      }
    }
    


