class Block {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.borderColor = "#2CFF05";
        this.bgColor = "#1E1F1F";
        this.strokeWeight = 1
    }



    display() {
        push();
        translate(this.x, this.y); // set origin point, to rotate from  the right point => rn origin = center
        fill(this.bgColor);
        stroke(this.borderColor);
        strokeWeight(this.strokeWeight);
        rotate(this.angle);
        rect(0, 0, size, size ); // position x du coin gauche, position y du coin gauche, longueur, hauteur
        pop();
    }


draw(){
    console.log(pickedColor)
}

    move(){


 

        
        let distance = dist(mouseX, mouseY,this.x, this.y );
        if (distance < distMouse){    
            this.angle += 1; // vu que la fonction est run 30 frames par secondes, ça touuuuuurne
        } 
        else{
        if(this.angle > 0 && this.angle < 90 ){
            this.angle += 1; 
        } else {
            this.angle = 0;
        }
    }
}
}