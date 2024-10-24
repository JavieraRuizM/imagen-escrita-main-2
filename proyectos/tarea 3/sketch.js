let scaleActive = true;

function setup() {
  createCanvas(500, 500);
  
  angleMode(DEGREES)
  
  angleMode(CENTER) 
}

function draw() {
  background(0);
  noFill()
  
  translate(width/ 2, height / 2)
  for(let i = 0; i < 100; i++) {
  
    push();
    
    rotate(sin(frameCount + i ) * 600);
    
 if(scaleActive) {
    scale(mouseX / 100 );
   }
    let r = map(sin(frameCount), -1, 1, 50, 245); 
    let g = map(sin(frameCount / 2), -1, 1, 50, 245); 
    let b = map(sin(frameCount / 4), -1, 1, 50, 245);
    
     stroke(r, g, b);
    
    rect(0, 0, 300 - i * 4, 300 - i * 2, 100);
    
     pop();
}
  }