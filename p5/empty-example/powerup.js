class Pow extends  GameObject{
  constructor(x,y){
    super(x,y);
  }

  show(){
    image(pow,this.cordX,this.cordY);
  }
}
