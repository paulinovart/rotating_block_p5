//import GUI from 'lil-gui';


let distMouse = 50;
//let b;
let cols; let rows; let size = 50;
let blocks = [];
let canvasHeight = window.innerHeight - 70;
let canvasWidth = window.innerWidth - 70;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    rectMode(CENTER);
    angleMode(DEGREES);
    cols = width/size;
    rows = height/size;

    for (let i=0; i<cols; i++){
        blocks[i] = [];
        for (j=0; j<rows; j++){
            blocks[i][j] = new Block(size/2 + i*size, size/2 + j*size); //pour set la position en fonction du nombre de carrés déjà faits
        }
    }


}

function draw(){
    background ("black")
    for (let i=0; i<cols; i++){

        for (j=0; j<rows; j++){
            blocks[i] [j].move();
            blocks[i] [j].display();
        }
    }

//console.log(window.gui)

   // background(220);
   //  b.move();
   // b.display();



    //console.log(distance)
   

}


window.gui.add( document, 'title' );
