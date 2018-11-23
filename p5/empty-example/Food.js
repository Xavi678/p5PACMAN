class Food extends  GameObject{
  constructor(x,y){
    super(x,y);
  }

  show(){
    image(food,this.cordX,this.cordY);
  }
}
