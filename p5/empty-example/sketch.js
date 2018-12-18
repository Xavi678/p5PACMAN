
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

var fantasma;
var temps;
var columns;
var files;
var maxpoints=new Array('w');
/* */


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
  if(d1=="" || d1=="null" || username=="" || username=="null"){

  alert("Primer de tot has de posar els Settings");
  window.location.href="index.html";

}


  if(files==null  || columns==null ){
    alert("Eps el valor no pot ser null, i han de ser integers");
    window.location.href="index.html";

  }


   mymaze= new maze();
   mymaze.generarMap(files,columns);
  // pacman= new pacman(img2,j*IMAGE_SIZE,i*IMAGE_SIZE);
  mypacman= new pacman(5*IMAGE_SIZE,5*IMAGE_SIZE);
  fantasma= new pacman(0*IMAGE_SIZE,0*IMAGE_SIZE);
  fantasma1=new pacman(0*IMAGE_SIZE,9*IMAGE_SIZE);
  fantasma2=new pacman(9*IMAGE_SIZE,0*IMAGE_SIZE);
  fantasma3=new pacman(9*IMAGE_SIZE,9*IMAGE_SIZE);
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
fantasma1.fantasmashow();
fantasma2.fantasmashow();
fantasma3.fantasmashow();

for(i=0;i<arrayrocamapa.length;i++){
  if(fantasma.eatRocaf(arrayrocamapa[i])){
    //fantasma.direction=Math.floor((Math.random() * 4));
    fantasma.xocar();
  }
}

for(i=0;i<arrayrocamapa.length;i++){
  if(fantasma1.eatRocaf(arrayrocamapa[i])){
    //fantasma1.direction=Math.floor((Math.random() * 4));
    fantasma1.xocar();
  }
}
for(i=0;i<arrayrocamapa.length;i++){
  if(fantasma2.eatRocaf(arrayrocamapa[i])){
    //fantasma2.direction=Math.floor((Math.random() * 4));
    fantasma2.xocar();
  }
}
for(i=0;i<arrayrocamapa.length;i++){
  if(fantasma3.eatRocaf(arrayrocamapa[i])){
    fantasma3.xocar();


  }
}

fantasma.direccio();
fantasma1.direccio();
fantasma2.direccio();
fantasma3.direccio();
/*if(fantasma.direction==0){
  fantasma.fdreta();
}else if(fantasma.direction==1){
  fantasma.favall();
}else if(fantasma.direction==2){
  fantasma.fesquerra();
}else if(fantasma.direction==3){
  fantasma.famunt();
}

if(fantasma1.direction==0){
  fantasma1.fdreta();
}else if(fantasma1.direction==1){
  fantasma1.favall();
}else if(fantasma1.direction==2){
  fantasma1.fesquerra();
}else if(fantasma1.direction==3){
  fantasma1.famunt();
}

if(fantasma2.direction==0){
  fantasma2.fdreta();
}else if(fantasma2.direction==1){
  fantasma2.favall();
}else if(fantasma2.direction==2){
  fantasma2.fesquerra();
}else if(fantasma2.direction==3){
  fantasma2.famunt();
}

if(fantasma3.direction==0){
  fantasma3.fdreta();
}else if(fantasma3.direction==1){
  fantasma3.favall();
}else if(fantasma3.direction==2){
  fantasma3.fesquerra();
}else if(fantasma3.direction==3){
  fantasma3.famunt();
}
/*var moure=Math.floor((Math.random() * 4));
if(moure==0){
 fantasma1.famunt();
}else if(moure==1){
 fantasma1.favall();
}else if(moure==2){
 fantasma1.fesquerra();
}else if(moure==3){
 fantasma1.fdreta();
}

var moure=Math.floor((Math.random() * 4));
if(moure==0){
 fantasma2.famunt();
}else if(moure==1){
 fantasma2.favall();
}else if(moure==2){
 fantasma2.fesquerra();
}else if(moure==3){
 fantasma2.fdreta();
}

var moure=Math.floor((Math.random() * 4));
if(moure==0){
 fantasma3.famunt();
}else if(moure==1){
 fantasma3.favall();
}else if(moure==2){
 fantasma3.fesquerra();
}else if(moure==3){
 fantasma3.fdreta();
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

if(mypacman.Morir(fantasma1)){
  mypacman.lives=0;
}

if(mypacman.Morir(fantasma2)){
  mypacman.lives=0;
}

if(mypacman.Morir(fantasma3)){
  mypacman.lives=0;
}
//inputKeyboard();
if(mypacman.lives==0 || temps<=0){
  mort.play();
  alert("Game Over");
  noLoop();
  //window.history.back();
  window.location.href="index.html";
  var d=new Date();
 /* if(maxpoints==undefined){
    maxpoints=[];
  }else{*/
  maxpoints=JSON.parse(localStorage.getItem("usuari1"));
alert(mypacman.score);
if(mypacman.score!=0){
maxpoints.push(" Punts " + mypacman.score+ "Usuari: "+ username+ " Data: "+ d);
alert(maxpoints);
}

localStorage.setItem("usuari1",JSON.stringify(maxpoints));

 /* if(maxpoints.length==0){

    maxpoints.push(" Punts " + mypacman.score+ "Usuari: "+ username+ " Data: "+ d);
    localStorage.setItem("usuari1",JSON.stringify(maxpoints));

  }else{
    maxpoints=JSON.parse(localStorage.getItem("usuari1"));

    maxpoints.push(" Punts " +mypacman.score+ "Usuari: "+ username+ " Data: "+ d);

    localStorage.setItem("usuari1",JSON.stringify(maxpoints));

  }*/
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
  //window.location.href="index.html";
   /*maxpoints=JSON.parse(localStorage.getItem("maxpunts"));

  maxpoints.push(mypacman.score);

  localStorage.setItem("maxpunts", JSON.stringify(maxpoints));*/
/*maxpoints=localStorage.getItem("maxpunts");
maxpoints=maxpoints+ " Punts " + mypacman.score+ "Usuari: "+ username+ " Data: "+ new Date()+" | ";
localStorage.setItem("maxpunts",maxpoints);*/

var d=new Date();
maxpoints=JSON.parse(localStorage.getItem("usuari1"));
if(mypacman.score!=0){
maxpoints.push(" Punts " + mypacman.score+ "Usuari: "+ username+ " Data: "+ d);
}
localStorage.setItem("usuari1",JSON.stringify(maxpoints));
/*if(maxpoints.length==0){

  maxpoints.push(" Punts " + mypacman.score+ "Usuari: "+ username+ " Data: "+ d);
  localStorage.setItem("usuari1",JSON.stringify(maxpoints));

}else{
  maxpoints=JSON.parse(localStorage.getItem("usuari1"));

  maxpoints.push(" Punts " +mypacman.score+ "Usuari: "+ username+ " Data: "+ d);

  localStorage.setItem("usuari1",JSON.stringify(maxpoints));

}
*/
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
