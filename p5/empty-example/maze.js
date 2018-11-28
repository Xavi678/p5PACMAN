const ROW=10;
const COLUMNS=10;
const IMAGE_SIZE=32;
const HEIGHT_TEXT=200;

class maze{

  constructor(){
    this.myfil=ROW;
    this.mycol=COLUMNS;
  /*  this.mapa=[
      [1,0,0,0,0,0,3,0,0,0],
      [0,,2,2,1,2,1,0,1,0],
      [0,0,0,0,0,2,0,0,0,0],
      [0,1,0,1,0,1,0,0,1,0],
      [0,0,2,0,0,0,2,0,1,0],
      [0,1,0,0,2,0,0,0,1,0],
      [0,1,0,0,0,3,0,0,1,0],
      [2,0,0,0,1,0,0,0,0,0],
      [0,1,3,0,1,0,1,0,1,0],
      [0,0,2,0,2,0,0,2,0,0]
    ];*/
    this.mapa=[[]];

  }
generarMap(){
  var i;
  var j;

for(i=0;i<10;i++){
  for(j=0;j<10;j++){

    this.mapa[i][j]=Math.floor(Math.random() * 4);
  }
}
}

}
