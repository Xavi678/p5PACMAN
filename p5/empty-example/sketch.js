
var img;
var img2;
var y=0;
var x=0;
const offset=5;
var punt=[];
var roca;
var mymaze;



function setup() {
  // put setup code here

   img=loadImage('imatges/imatge.jpg');
   img2=loadImage('imatges/pacman.png');
   roca=loadImage('imatges/roca.jpg');
   mymaze= new maze();



    createCanvas(COLUMNS*IMAGE_SIZE,ROW*IMAGE_SIZE);

}

function draw() {
  // put drawing code here
  image(img, 0, 0);

  image(img2, x, y);
var i;
var j;
var f=0;
var c=0;
///alert(mymaze.mapa[0][0])
for(i=0;i<10;i++){
  for(j=0;j<10;j++){
    if(mymaze.mapa[i][j] == 1){
      image(roca, j*IMAGE_SIZE, i*IMAGE_SIZE);
    }

  }
}





  if(x==290){

  }else{

  if(keyIsDown(RIGHT_ARROW)){
    x+=5;
  }
}
if(x==0){

}else{
if(keyIsDown(LEFT_ARROW)){
x-=5;
}
}
if(y==0){

}else{
if(keyIsDown(UP_ARROW)){
  y-=5;
}
}
if(y==290){

}else{


if(keyIsDown(DOWN_ARROW)){
y+=5;
}
}

}



function keyPressed(){


}
