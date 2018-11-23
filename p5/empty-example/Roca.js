class Roca extends  GameObject{
  constructor(x,y){
    super(x,y);
  }

  show(){
    image(roca,this.cordX,this.cordY);
  }
}
