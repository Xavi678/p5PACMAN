
var img;
var img2;
var y=0;
var x=0;
const offset=5;
var punt=[];
var roca;
var mymaze;
var arrayrocamapa=[];
var arrayRaim=[];
var arrayfoodmapa=[];
var MYpacman;
var food;
var username=localStorage.getItem("user");


function preload(){
  img=loadImage('imatges/imatge.jpg');
  img2=loadImage('imatges/pac.png');
  roca=loadImage('imatges/roca.bmp');
  raim=loadImage('imatges/grape.png');
  food=loadImage('imatges/food.png');
}

function setup() {
  // put setup code here


   mymaze= new maze();
  // pacman= new pacman(img2,j*IMAGE_SIZE,i*IMAGE_SIZE);
  mypacman= new pacman(1*IMAGE_SIZE,1*IMAGE_SIZE);
  createCanvas(COLUMNS*IMAGE_SIZE,ROW*IMAGE_SIZE+HEIGHT_TEXT);
   for(i=0;i<mymaze.myfil;i++){
     for(j=0;j<mymaze.mycol;j++){
       if(mymaze.mapa[i][j] == 1){
        arrayrocamapa.push (new Roca(j*IMAGE_SIZE, i*IMAGE_SIZE));
       }

     }
   }

   for(i=0;i<mymaze.myfil;i++){
     for(j=0;j<mymaze.mycol;j++){
       if(mymaze.mapa[i][j] == 2){
        arrayfoodmapa.push (new Food(j*IMAGE_SIZE, i*IMAGE_SIZE));
       }

     }
   }


    for(i=0;i<mymaze.myfil;i++){
      for(j=0;j<mymaze.mycol;j++){
        if(mymaze.mapa[i][j] == 0){
         arrayRaim.push (new Raim(j*IMAGE_SIZE, i*IMAGE_SIZE));
        }

      }
    }


}

function draw() {
  // put drawing code here
  image(img, 0, 0);
background(0);

var i;
var j;
var indexRaim;
var f=0;
var c=0;
///alert(mymaze.mapa[0][0])
for(indexRaim=0;indexRaim<arrayRaim.length;indexRaim++){
    arrayRaim[indexRaim].show();
}
for(i=0;i<arrayrocamapa.length;i++){
  arrayrocamapa[i].show();
}

for(i=0;i<arrayfoodmapa.length;i++){
  arrayfoodmapa[i].show();
}

//comprovar colisions
for(i=0;i<arrayfoodmapa.length;i++){
   if(mypacman.eatFood(arrayfoodmapa[i])){
     arrayfoodmapa.splice(i,1);
   }
}

for(i=0;i<arrayRaim.length;i++){
   if(mypacman.eatGrapes(arrayRaim[i])){
     arrayRaim.splice(i,1);
   }
}

for(i=0;i<arrayrocamapa.length;i++){
   if(mypacman.eatRoca(arrayrocamapa[i])){
     arrayrocamapa.splice(i,1);
   }
}
//image(img2, x, y);

mypacman.show();
//inputKeyboard();
if(mypacman.lives==0){
  alert("Game Over");
  noLoop();
  window.history.back();

}
printfooter();

}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    mypacman.esquerra();
  } else if (keyCode === RIGHT_ARROW) {
    mypacman.dreta();
  }else if (keyCode === UP_ARROW){
    mypacman.amunt();
  }else if (keyCode === DOWN_ARROW){
    mypacman.avall();
  }
}

function printfooter(){
  var user="Usuari : " + username;

fill(255);
  textSize(12);
textStyle(NORMAL);
text(user, 10, 350);

var vides="Vides restants : " + mypacman.lives;

fill(255);
textSize(12);
textStyle(NORMAL);
text(vides, 10, 370);

var punts="Punts: " + mypacman.score;

fill(255);
textSize(12);
textStyle(NORMAL);
text(punts, 10, 390);
}
/**function inputKeyboard(){
  if(keyPressed(){
      //  pacman.dreta();
      //x+=5;
      mypacman.dreta();
  }


if(keyPressed(LEFT_ARROW)){
    //  pacman.esquerra();
    mypacman.esquerra();
}


if(keyIsDown(UP_ARROW)){
  // pacman.avall();
mypacman.amunt();

}


if(keyIsDown(DOWN_ARROW)){
  mypacman.avall();
  //y+=5;
}
}*/
