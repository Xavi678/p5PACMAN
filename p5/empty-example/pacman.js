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
    this.movement=IMAGE_SIZE;

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

  fantasmashow(){
    image(ghost,this.cordX,this.cordY);
  }

  dreta(){


    if(this.cordX==mymaze.mycol*IMAGE_SIZE-32){

    }else{
    this.direction=0;

    this.cordX+=IMAGE_SIZE;

}
}

fdreta(){


  if(this.cordX==mymaze.mycol*IMAGE_SIZE-32){
    this.direction=Math.floor((Math.random() * 4));
    /*if(this.direction==0){
      this.cordX-=8;
    }else if(this.direction==1){
      this.cordY-=8;
    }else if(this.direction==2){
      this.cordY+=8;
    }*/

  }else{


  this.cordX+=4;

}

  /*  if(this.speed==1){
      this.cordX+=IMAGE_SIZE;
    }else if(this.speed==2){
      this.cordX+=64;
    }else if(this.speed==3){
      this.cordX+=128;
    }*/
  }

  fesquerra(){
    if(this.cordX==0){
      this.direction=Math.floor((Math.random() * 4));

    }else{


    this.cordX-=4;

}
    /*if(this.speed==1){
      this.cordX-=IMAGE_SIZE;
    }else if(this.speed==2){
      this.cordX-=64;
    }else if(this.speed==3){
      this.cordX-=128;
    }*/
  }


  esquerra(){
    if(this.cordX==0){

    }else{
    this.direction=2;

    this.cordX-=IMAGE_SIZE;

}
    /*if(this.speed==1){
      this.cordX-=IMAGE_SIZE;
    }else if(this.speed==2){
      this.cordX-=64;
    }else if(this.speed==3){
      this.cordX-=128;
    }*/
  }

  famunt(){
    if(this.cordY==0){
      this.direction=Math.floor((Math.random() * 4));
    }else{


      this.cordY-=4;

  }
    /*if(this.speed==1){
      this.cordY-=IMAGE_SIZE;
    }else if(this.speed==2){
      this.cordY-=64;
    }else if(this.speed==3){
      this.cordY-=128;
    }*/
  }
  amunt(){
    if(this.cordY==0){

    }else{
    this.direction=3;

      this.cordY-=IMAGE_SIZE;

  }
    /*if(this.speed==1){
      this.cordY-=IMAGE_SIZE;
    }else if(this.speed==2){
      this.cordY-=64;
    }else if(this.speed==3){
      this.cordY-=128;
    }*/
  }

  favall(){
    if(this.cordY==mymaze.myfil*IMAGE_SIZE-32){
      this.direction=Math.floor((Math.random() * 4));
    }else{


    this.cordY+=4;

}
    /*if(this.speed==1){
      this.cordY+=IMAGE_SIZE;
    }else if(this.speed==2){
      this.cordY+=64;
    }else if(this.speed==3){
      this.cordY+=128;
    }*/
    }
  avall(){
    if(this.cordY==mymaze.myfil*IMAGE_SIZE-32){

    }else{
      this.direction=1;

    this.cordY+=IMAGE_SIZE;

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

 Morir(fantasma){
   var distancia=dist(this.cordX,this.cordY,fantasma.cordX,fantasma.cordY);
   if(distancia<16){

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
eatRocaf(roca){
   var distancia=dist(this.cordX,this.cordY,roca.cordX,roca.cordY);
   //console.log("roca"+distancia);
   if(distancia<16){


     return true;
   }
 }

 eatPow(pow){
   var distancia=dist(this.cordX,this.cordY,pow.cordX,pow.cordY);
   if(distancia<16){
     if(this.lives<3){
     this.lives+=1;
   }
     console.log(this.lives);
     return true;
   }
 }

 direccio(){

   if(this.direction==0){
     this.fdreta();
   }else if(this.direction==1){
     this.favall();
   }else if(this.direction==2){
     this.fesquerra();
   }else if(this.direction==3){
     this.famunt();
   }
 }

 xocar(){
   if(this.direction==3){

    /* do{
       var n=Math.floor((Math.random() * 4));
     }while(n==3);
     this.direction=n;*/
      this.direction=Math.floor(Math.random()*4);

 }else if(this.direction==0){
   /*do{
     var n=Math.floor((Math.random() * 4));
   }while(n==0);*/
  this.direction=Math.floor(Math.random()*4);
}else if(this.direction==1){

 /*do{
   var n=Math.floor((Math.random() * 4));
 }while(n==1);*/
  this.direction=Math.floor(Math.random()*4);
}else if(this.direction==2){
/*  do{
    var n=Math.floor((Math.random() * 4));
  }while(n==2);*/

  this.direction=Math.floor(Math.random()*4);
}
 }


}
