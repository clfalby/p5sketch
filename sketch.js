var marla=0;
    iqra=5

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
    background(173,216,230); //an RGB color for the canvas' background
  //circle
}

//The draw function happens over and over again
function draw() {

  strokeWeight(3);
  stroke(255,marla,127) // an RGB color for the circle's border
 
  fill(iqra,255,127,iqra); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(200,iqra,100,20); // center of canvas, 20px dia
  line(20,marla,marla,400);
  line(iqra,20,400,iqra);
}

function mousePressed(){
  iqra=iqra+5;
  marla=marla+2;
}