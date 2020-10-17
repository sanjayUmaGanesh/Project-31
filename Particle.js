class Particle{

    constructor(x,y,r){
        var options = {
            restitution: 0.8
            //density: 1.5,
            //friction: 1.2
        }

        this.r = r;
        this.color = color(random(0,255),random(0,255),random(0,255));
        //this.image = loadImage("paper.png");
        this.body = Bodies.circle(x, y,this.r, options)
        //this.splinkos = []

        World.add(world, this.body);
        

    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        //imageMode(CENTER);
       // strokeWeight(4);
        ellipse(0, 0, this.r,this.r);
        pop();

        
      }
    }
    


