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
    this.mapa=[];

  }
generarMap(rows,cols){
  this.myfil=rows;
  this.mycol=cols;
  /*var i;
  var j;
var arrayFila = [];
  for(i=0;i<ROW;i++){
  for(j=0;j<COLUMNS;j++){
    arrayFila.push(Math.floor(Math.random() * 4));
  }
  this.mapa.push(arrayFila);
  arrayFila.clear();
}*/



// Creates all lines:
for(var i=0; i < rows; i++){

// Creates an empty line
this.mapa.push([]);

// Adds cols to the empty line:
this.mapa[i].push(new Array(cols));

for(var j=0; j < cols; j++){
// Initializes:
this.mapa[i][j] = Math.floor((Math.random() * 4));
}
}

return this.mapa;
}


}
