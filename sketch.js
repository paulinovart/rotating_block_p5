
let distMouse = 50;
//let b;
let cols; let rows; let size = 50;
let blocks = [];

function setup() {
    createCanvas(800, 800);
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
background (150)
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