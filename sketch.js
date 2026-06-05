
let distMouse = 50;
//let b;
let cols; let rows; let size = 30;
let blocks = [];
canvasHeight = window.innerHeight - 70;
canvasWidth = window.innerWidth - 70;

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
background ("#1E1F1F")
    for (let i=0; i<cols; i++){

        for (j=0; j<rows; j++){
            blocks[i] [j].move();
            blocks[i] [j].display();
        }
    }




   // background(220);
   //  b.move();
   // b.display();



    //console.log(distance)
   

}