//Silva Sofía
//tp1 comision 1
//https://youtu.be/GMUHTFyWC08
let negro;
let blanco;
let rojo;
let cambiarColores = false; // alterna el color de los réctangulos
let colorRojo= false; //las variables en Java es Let y los valores de true y false se mantienen igual, y cambia el color de los rectangulos a rojo

function esPar(numero){
  return numero %2 == 0; //las funciones en JavaScript se declaran con function, entonces noes necesario especificar el tipo de retorno como boolean, ya que Jav lo maneja de forma dinámica
 }

function preload(){//las imágen se carga en preload ya que java se toma un tiempo determinado para procesarlo
 fondo = loadImage("data/opArt.jpg");
}

function setup() {
createCanvas (800,400);
reiniciarPrograma();
negro = color(0);
blanco = color(255);
rojo = color(255,0,0);
}

function draw() {
  image(fondo,0,0,400,400);
  //funciones propias
RectangulosdelFondo(400,0,400,11);
RectangulosAdelante(565,165,70,3);
RectangulosdelLadoIzquierdo(553, 168, 11);
RectangulosdelLadoDerecho(647, 168, 11);
RectangulosdeArriba(568,153, 11);
RectangulosdeAbajo(568,247, 11);

//degrade para el negro
if (cambiarColores) {
  negro = color(random(255));//asigna un color aleatorio a negro
}else{
  negro = color(0);//asigna el negri como negro fijo
}
}

function reiniciarPrograma(){
  cambiarColores =false;
  colorRojo = false;
  negro = color(0);
  rojo = color(255,0,0);
}

function RectangulosdelFondo(x,y,size,cant){ //el int se elimina
  for (let i = 0; i < cant; i++) { // uso let para dejar claro que i se usa solo en este ciclo for, y que no parezca una variable global
    if (i ==0){
      strokeWeight(22);
    }else{
      strokeWeight(15);
    }
    
    if (i % 2 == 0){
      if(colorRojo){
        stroke(color(255,0,0));
      }else{
        stroke(negro);
      }
     }else{
      stroke(blanco);
     }
     
     noFill();
     rect(x,y,size,size);
     
     x += 15;
     y += 15;
     size -= 30;
    }
}

function RectangulosAdelante(x,y,size,cant){
  for(let i = 0; i<cant; i++){
    if(esPar(i)){
      stroke(negro);
    }else{
      stroke(blanco);
    }
    strokeWeight(15);
    rect(x,y,size,size);
    
    x += 15;
    y += 15;
    size -=30;
  }
}

function RectangulosdelLadoIzquierdo(x,y,cant){
 let width = 0; // definir width y height localmente
 let height = 64;
 
 for(let i = 0; i<cant; i++){
   if(esPar(i)){
     stroke(blanco);
   }else{
     stroke(negro);
   }
   
   rect(x,y,width,height);
   
   x -=15;
   
 }
}

function RectangulosdelLadoDerecho(x,y,cant){
x = 647;
let width = 0;
let height = 64;

for(let i =0; i<cant; i++){
  if(esPar(i)){
    stroke(blanco);
  }else{
    stroke(negro);
  }
  rect(x,y,width,height);
  
  x += 15;
}
}

function RectangulosdeArriba(x,y,cant){
x = 568;
y = 153;
let width = 64;
let height = 0;

for(let i = 0; i<cant; i++){
  if(esPar(i)){
    stroke(blanco);
  }else{
    stroke(negro);
  }
  
  rect(x,y,width,height);
  
  y -= 15;
}
}

function RectangulosdeAbajo(x,y,cant){
y = 247;
let width = 64;
let height = 0;
for(let i = 0; i<cant; i++){
  if(esPar(i)){
    stroke(blanco);
  }else{
    stroke(negro);
  }
  
  rect(x,y,width,height);
  
  y += 15;
}
}

function keyPressed(){
if (key == 'c'){
  cambiarColores = !cambiarColores; // aleterna entre true y false
}else if (key == '+'){
  colorRojo = !colorRojo; // lo mismo que arriba
}else if (key == 'a'){
  reiniciarPrograma();
  
}
}
