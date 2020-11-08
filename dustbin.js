class dustBin {
  constructor() {
    this.widthRect = 20
this.heightRect = 200
this.rectY= 580;

    this.image = loadImage("wastebasket.jpg");
    this.rectangle1 = Bodies.rectangle(350+700,670,200,20,{isStatic:true}); 
        World.add(world,this.rectangle1);
       this.rectangle2 = Bodies.rectangle(240+700,this.rectY,this.widthRect,this.heightRect,{isStatic:true})
        World.add(world,this.rectangle2);
        this.rectangle3 = Bodies.rectangle(440+717,this.rectY,this.widthRect,this.heightRect,{isStatic:true});
        World.add(world,this.rectangle3);

  }
      
     

    display(){
      imageMode(CENTER)
      image(this.image,1050,550,200,217);

      fill(255);  
      rect(this.rectangle1.position.x,this.rectangle1.position.y,200,20)
      rect(this.rectangle2.position.x,this.rectangle2.position.y,this.widthRect,this.heightRect);
      rect(this.rectangle3.position.x,this.rectY,this.widthRect,this.heightRect);
    }
  };
  