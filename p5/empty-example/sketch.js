
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
var arraypow=[];
var MYpacman;
var food;
var pow;
var mort;
var fruita;
var chomp;
var powerup;
var username=localStorage.getItem("user");
var d1=localStorage.getItem("Dificultat");
var maxpoints;
var fantasma;
var temps;
var columns;
var files;
/* */
if(d1=="" || d1==null || username=="" || username==null){
  window.location.replace("index.html");
  alert("Primer de tot has de posar els Settings");
}

function preload(){
  pow=loadImage('imatges/powerup_opt.png');
  img=loadImage('imatges/imatge.jpg');
  img2=loadImage('imatges/pac.png');
  roca=loadImage('imatges/roca.bmp');
  raim=loadImage('imatges/grape.png');
  food=loadImage('imatges/food.png');
  mort=loadSound('assets/pacman_death.wav');
  fruita=loadSound('assets/pacman_eatfruit.wav');
  chomp=loadSound('assets/pacman_chomp.wav');
  powerup=loadSound('assets/pacman_eatghost.wav');
  files=prompt("Entra les files");
  columns=prompt("Entra les columnes");
  ghost=loadImage('imatges/ghost.png');
}

function setup() {
  // put setup code here



   mymaze= new maze();
   mymaze.generarMap(files,columns);
  // pacman= new pacman(img2,j*IMAGE_SIZE,i*IMAGE_SIZE);
  mypacman= new pacman(1*IMAGE_SIZE,1*IMAGE_SIZE);
  fantasma= new pacman((parseInt(files)-2)*IMAGE_SIZE,(parseInt(columns)-2)*IMAGE_SIZE);
  //createCanvas(COLUMNS*IMAGE_SIZE,ROW*IMAGE_SIZE+HEIGHT_TEXT);
 createCanvas(mymaze.myfil*IMAGE_SIZE, mymaze.mycol*IMAGE_SIZE + HEIGHT_TEXT);
   for(i=0;i<mymaze.myfil;i++){
     for(j=0;j<mymaze.mycol;j++){
       if(mymaze.mapa[i][j] == 1){
        arrayrocamapa.push (new Roca(j*IMAGE_SIZE, i*IMAGE_SIZE));
       }

     }
   }

   for(i=0;i<mymaze.myfil;i++){
     for(j=0;j<mymaze.mycol;j++){
       if(mymaze.mapa[i][j] == 3){
        arraypow.push (new Pow(j*IMAGE_SIZE, i*IMAGE_SIZE));
       }

     }
   }

   for(i=0;i<mymaze.myfil;i++){
     for(j=0;j<mymaze.mycol;j++){
       if(mymaze.mapa[i][j] == 0){
        arrayfoodmapa.push (new Food(j*IMAGE_SIZE, i*IMAGE_SIZE));
       }

     }
   }


    for(i=0;i<mymaze.myfil;i++){
      for(j=0;j<mymaze.mycol;j++){
        if(mymaze.mapa[i][j] == 2){
         arrayRaim.push (new Raim(j*IMAGE_SIZE, i*IMAGE_SIZE));

        }

      }
    }
  if(d1==1){

  temps=1300;

}else if(d1==2){
  temps=1150;
}else if(d1>=3){
  temps=1000;
}


}

function draw() {

  // put drawing code here
  image(img, 0, 0);
background(0);
temps--;
if(temps<=0){
  mort.play();
  alert("Has perdut");
  noLoop();
    window.history.back();

}
var i;
var j;
var indexRaim;
var indexP;
var f=0;
var c=0;
///alert(mymaze.mapa[0][0])
for(indexRaim=0;indexRaim<arrayRaim.length;indexRaim++){
    arrayRaim[indexRaim].show();
}

for(indexP=0;indexP<arraypow.length;indexP++){
    arraypow[indexP].show();
}
for(i=0;i<arrayrocamapa.length;i++){
  arrayrocamapa[i].show();
}

for(i=0;i<arrayfoodmapa.length;i++){
  arrayfoodmapa[i].show();
}

for(indexP=0;indexP<arraypow.length;indexP++){

  if(mypacman.eatPow(arraypow[indexP])){
    arraypow.splice(indexP,1);
    powerup.play();
  }
}
//comprovar colisions
for(i=0;i<arrayfoodmapa.length;i++){
   if(mypacman.eatFood(arrayfoodmapa[i])){
     arrayfoodmapa.splice(i,1);
     chomp.play();
   }
}

for(i=0;i<arrayRaim.length;i++){
   if(mypacman.eatGrapes(arrayRaim[i])){
     arrayRaim.splice(i,1);
     fruita.play();
     temps=temps+25;
   }
}

for(i=0;i<arrayrocamapa.length;i++){
   if(mypacman.eatRoca(arrayrocamapa[i])){
     arrayrocamapa.splice(i,1);
     temps=temps-50;
   }
}
//image(img2, x, y);


mypacman.show();
fantasma.fantasmashow();

 var moure=Math.floor((Math.random() * 4));
if(moure==0){
  fantasma.amunt();
}else if(moure==1){
  fantasma.avall();
}else if(moure==2){
  fantasma.esquerra();
}else if(moure==3){
  fantasma.dreta();
}


/*for(i=0;i<arrayrocamapa.length;i++){
   if(fantasma.eatRoca(arrayrocamapa[i])){
     var moure=Math.floor((Math.random() *3));
    if(moure==0){
      fantasma.amunt();
    }else if(moure==1){
      fantasma.avall();
    }else if(moure==2){
      fantasma.dreta();
    }
  }else{
    fantasma.esquerra();
  }

}*/

if(mypacman.Morir(fantasma)){
  mypacman.lives=0;
}
//inputKeyboard();
if(mypacman.lives==0){
  mort.play();
  alert("Game Over");
  noLoop();
  window.history.back();

}
printfooter();
/*if(d1==1){
  mypacman.speed=1;
}else if(d1==2){
  mypamcan.speed=2;
}else if(d1>=3){
  mypacman.speed=3;
}*/
if(arrayfoodmapa.length==0 && arrayRaim.length==0){
  alert("Has Guanyat Punts:"+mypacman.score);
  noLoop();
  window.history.back();
   /*maxpoints=JSON.parse(localStorage.getItem("maxpunts"));

  maxpoints.push(mypacman.score);

  localStorage.setItem("maxpunts", JSON.stringify(maxpoints));*/
/*maxpoints=localStorage.getItem("maxpunts");
maxpoints=maxpoints+ " Punts " + mypacman.score+ "Usuari: "+ username+ " Data: "+ new Date()+" | ";
localStorage.setItem("maxpunts",maxpoints);*/
var maxpoints=[];
var d=new Date();
if(maxpoints.length==-1){

  maxpoints.push(" Punts " + mypacman.score+ "Usuari: "+ username+ " Data: "+ d);
  localStorage.setItem("usuari1",JSON.stringify(maxpoints));

}else{
  maxpoints=JSON.parse(localStorage.getItem("usuari1"));

  maxpoints.push(" Punts " +mypacman.score+ "Usuari: "+ username+ " Data: "+ d);

  localStorage.setItem("usuari1",JSON.stringify(maxpoints));

}

}
}
function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    mypacman.esquerra();
  } else if (keyCode == RIGHT_ARROW) {
    mypacman.dreta();
  }else if (keyCode == UP_ARROW){
    mypacman.amunt();
  }else if (keyCode == DOWN_ARROW){
    mypacman.avall();
  }
}

function printfooter(){
  var user="Usuari : " + username;
  var initialOFfset= mymaze.myfil*IMAGE_SIZE;

fill(255);
  textSize(12);
textStyle(NORMAL);
text(user, 10, initialOFfset+15);

var vides="Vides restants : " + mypacman.lives;

fill(255);
textSize(12);
textStyle(NORMAL);
text(vides, 10, initialOFfset+35);

var punts="Punts: " + mypacman.score;

fill(255);
textSize(12);
textStyle(NORMAL);
text(punts, 10, initialOFfset+55);

var f="Dificultat: " + d1;

fill(255);
textSize(12);
textStyle(NORMAL);
text(f, 10, initialOFfset+75);

var t="Temps: " + temps;

fill(255);
textSize(12);
textStyle(NORMAL);
text(t, 10, initialOFfset+95);


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
