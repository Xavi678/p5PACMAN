var img;
var img2;
var y=0;
var x=0;
const offset=5;
function setup() {
  // put setup code here

   img=loadImage('imatges/imatge.jpg');
   img2=loadImage('imatges/pacman.png');
    createCanvas(605, 340);
}

function draw() {
  // put drawing code here
  image(img, 0, 0);
  image(img2, x, y);

  if(x==575){

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
if(y==310){

}else{


if(keyIsDown(DOWN_ARROW)){
y+=5;
}
}

}



function keyPressed(){


}
