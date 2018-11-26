const FOOD_POINTS=20;
const RAIM_POINTS=40;
var d1=localStorage.getItem("Dificultat");
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


    if(this.cordX==288){

    }else{
    this.direction=0;
    if(d1==1){
    this.cordX+=IMAGE_SIZE;
  }else{
    this.cordX+=64;
  }
}

  /*  if(this.speed==1){
      this.cordX+=IMAGE_SIZE;
    }else if(this.speed==2){
      this.cordX+=64;
    }else if(this.speed==3){
      this.cordX+=128;
    }*/
  }

  esquerra(){
    if(this.cordX==0){

    }else{
    this.direction=2;
    if(d1==1){
    this.cordX-=IMAGE_SIZE;
  }else{
    this.cordX-=64;
  }
}
    /*if(this.speed==1){
      this.cordX-=IMAGE_SIZE;
    }else if(this.speed==2){
      this.cordX-=64;
    }else if(this.speed==3){
      this.cordX-=128;
    }*/
  }

  amunt(){
    if(this.cordY==0){

    }else{
    this.direction=3;
    if(d1==1){
      this.cordY-=IMAGE_SIZE;
    }else{
      this.cordY-=64;
    }
  }
    /*if(this.speed==1){
      this.cordY-=IMAGE_SIZE;
    }else if(this.speed==2){
      this.cordY-=64;
    }else if(this.speed==3){
      this.cordY-=128;
    }*/
  }

  avall(){
    if(this.cordY==288){

    }else{
      this.direction=1;
    if(d1==1){
    this.cordY+=IMAGE_SIZE;
  }else{
    this.cordY+=64;
  }
}
    /*if(this.speed==1){
      this.cordY+=IMAGE_SIZE;
    }else if(this.speed==2){
      this.cordY+=64;
    }else if(this.speed==3){
      this.cordY+=128;
    }*/
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
