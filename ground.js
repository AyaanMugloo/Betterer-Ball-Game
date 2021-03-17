class Ground {
    constructor(x,y,width,height) {
      var options = {
        isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 150;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }
  