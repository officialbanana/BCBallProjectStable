

class Ball {
  
    constructor(x, y, radius) {
      this.gap = [30,660];
      var options = {
          restitution:1,
          isStatic:false,
          friction:0.5,
          density:1.2
      }
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
      World.add(world, this.body);
      
     
      this.image = loadImage("paper.png")
    }

    display(){
      var pos = this.body.position;
      this.gap[0] = pos.x;
      this.gap[1] = pos.y;
      ellipse(this.gap[0],this.gap[1],this.radius,this.radius);
      imageMode(CENTER);
      image(this.image,this.gap[0],this.gap[1],this.radius,this.radius);
      
      
      }
      
  };
  