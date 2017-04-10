function setup(){
    createCanvas(600,400);
    background(0);
}

function  draw(){
    if(mouseIsPressed){
        paint(mouseX, mouseY);
    }
    rowOfSquares();
}

function paint(x,y){
    fill(255,0,150);
    noStroke();
    ellipse(x,y,100,100);
    
}
function rowOfSquares(){
    
    for(var i = 50; i<500; i+=100){
       fill(255,0,0);
       rect(i,200,50,50);
    }
   
   
    
}