//import GUI from 'lil-gui';


let distMouse = 50;
let cols; let rows; let size = 50; 
let blocks = [];
let canvasHeight = window.innerHeight - 70;
let canvasWidth = window.innerWidth - 70;
let pickedBorderColor;
let pickedSquareColor;
let pickedStrokeWeight;



const gui = new window.GUI();




blockParams = {
	size ,
    borderColor : "#2CFF05",
    squareColor : "#1E1F1F",
    borderWeight : 1 ,
    backgroundColor : "#000000",
}



pickedBorderColor = blockParams.borderColor;
pickedSquareColor = blockParams.squareColor;
pickedStrokeWeight = blockParams.borderWeight;


gui.addColor(blockParams, 'squareColor').onChange(value => {
    pickedSquareColor = value;

    cols = Math.floor(width / size);
    rows = Math.floor(height / size);

    blocks = [];
    for (let i = 0; i < cols; i++) {
        blocks[i] = [];
        for (let j = 0; j < rows; j++) {
            blocks[i][j] = new Block(size / 2 + i * size, size / 2 + j * size);
            blocks[i][j].borderColor = pickedBorderColor;
            blocks[i][j].bgColor = pickedSquareColor;
            blocks[i][j].borderWeight = pickedStrokeWeight;
        }
    }

});


gui.addColor(blockParams, 'borderColor').onChange(value => {
    pickedBorderColor = value;

    cols = Math.floor(width / size);
    rows = Math.floor(height / size);

    blocks = [];
    for (let i = 0; i < cols; i++) {
        blocks[i] = [];
        for (let j = 0; j < rows; j++) {
            blocks[i][j] = new Block(size / 2 + i * size, size / 2 + j * size);
            blocks[i][j].borderColor = pickedBorderColor;
            blocks[i][j].bgColor = pickedSquareColor;
            blocks[i][j].borderWeight = pickedStrokeWeight;
        }
    }

});





gui.add(blockParams, 'borderWeight',1, 8, 1).onChange(value => {
    pickedStrokeWeight = value;

    cols = Math.floor(width / size);
    rows = Math.floor(height / size);

    blocks = [];
    for (let i = 0; i < cols; i++) {
        blocks[i] = [];
        for (let j = 0; j < rows; j++) {
            blocks[i][j] = new Block(size / 2 + i * size, size / 2 + j * size);
            blocks[i][j].borderColor = pickedBorderColor;
            blocks[i][j].bgColor = pickedSquareColor;
            blocks[i][j].borderWeight = pickedStrokeWeight;
        }
    }

});



gui.add(blockParams, 'size', 30, 70, 5).onChange(value => {
    // update the global size used by the sketch
    size = value;


    // recompute grid dimensions
    cols = Math.floor(width / size);
    rows = Math.floor(height / size);

    // recreate the blocks array to match the new size ==> en gros,  on reproduit le moment de la foction setup qui est responsable de ça
    blocks = [];
    for (let i = 0; i < cols; i++) {
        blocks[i] = [];
        for (let j = 0; j < rows; j++) {
            blocks[i][j] = new Block(size / 2 + i * size, size / 2 + j * size);
            blocks[i][j].borderColor = pickedBorderColor;
            blocks[i][j].bgColor = pickedSquareColor;
           blocks[i][j].borderWeight = pickedStrokeWeight;
        }
    }
});







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
            blocks[i][j].borderColor = pickedBorderColor;
            blocks[i][j].bgColor = pickedSquareColor;
            blocks[i][j].borderWeight = pickedStrokeWeight;
        }

    }


}





gui.addColor(blockParams, 'backgroundColor');

function draw(){



  
    background(blockParams.backgroundColor)
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



