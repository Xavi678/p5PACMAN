const FOOD_POINTS=20;
const RAIM_POINTS=40;
class pacman extends GameObject{
  constructor(x,y){
    super(x,y);
    this.lives=3;
    this.score=0;
    this.frame=0;
    this.animation=0;
    this.direction=0;
    this.name=null;
    this.speed=1;
  }

  show(){
    //image(img2,this.cordX,this.cordY);
  //  image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
//
// img: la imagen a mostrar
//
// dx 	Número: la coordenada x en el lienzo de destino donde se ubicará la esquina superior izquierda de la imagen
// dy 	Número: la coordenada y en el lienzo de destino donde se ubicará la esquina superior izquierda de la imagen
// dWidth 	Número: ancho de la imagen a dibujar en el lienzo de destino
// dHeight 	Número: altura de la imagen a dibujar en el lienzo de destino
// sx 	Número: la coordenada x de la esquina superior izquierda del subrectángulo de la imagen original a dibujar en el lienzo de destino
// sy 	Número: la coordenada y de la esquina superior izquierda del subrectángulo de la imagen original a dibujar en el lienzo de destino
// sWidth 	Número: el ancho del subrectángulo de la imagen original a dibujar en el lienzo de destino
// sHeight 	Número: la altura del subrectángulo de la imagen original a dibujar en el lienzo de destino
    //this.frame++;
  //  image(pacManImage, 32*this.frame++, 32*this.direction, 32, 32, this.x, this.y, 32,32);
   image(img2, this.cordX,this.cordY, IMAGE_SIZE, IMAGE_SIZE, IMAGE_SIZE*this.frame, IMAGE_SIZE*this.direction, IMAGE_SIZE,IMAGE_SIZE);
/**  console.log("Frame actual pacman:" + this.frame);
  console.log("Direccion actual pacman:" + this.direction);
  console.log("Posicion X pacman:" + this.cordX);
  console.log("Posicion Y pacman:" + this.cordY); */
    //El numero de frames es major que 5 torno a cero ( es podria fer modul 5 amb la resta i
    //continuar sumant)
    this.frame++;
    if ( this.frame == 5) this.frame =0;
    // noLoop();


  }

  dreta(){
    this.direction=0;
      this.cordX+=IMAGE_SIZE;
  }

  esquerra(){
    this.direction=2;
    this.cordX-=IMAGE_SIZE;
  }

  amunt(){
    this.direction=3;
    this.cordY-=IMAGE_SIZE;
  }

  avall(){
    this.direction=1;
    this.cordY+=IMAGE_SIZE;
    }

  eatFood (menjar) {
  var distancia=dist(this.cordX,this.cordY,menjar.cordX,menjar.cordY);
  if(distancia<16){
    this.score+=FOOD_POINTS;
    console.log(this.score);
    return true;
  }
 }

 eatGrapes(raim){
   var distancia=dist(this.cordX,this.cordY,raim.cordX,raim.cordY);
   if(distancia<16){
     this.score+=RAIM_POINTS;
     console.log(this.score);
     return true;
   }
 }
 eatRoca(roca){
   var distancia=dist(this.cordX,this.cordY,roca.cordX,roca.cordY);
   if(distancia<16){
     this.lives-=1;
     console.log(this.lives);
     return true;
   }
 }
}
