function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  
    depthSlider = createSlider(1, 10, 5, 1);   
  depthSlider.position(10, height + 10);    
  
  
}

function draw() {
  background(0);
  
   let maxSize = map(mouseX, 0, height, 10, 300);
  let numRect = 20;
  
  stroke(25, 202, 13);  
  strokeWeight(3)
  
   for (let i = 0; i < numRect; i++) {
    let size = map(i, 0, numRect - 1, 20, maxSize);
    let x = map(i, 0, numRect - 1, width / 2, (1 * width) / 4);
     
       rect(x, height / 2, size); 
     }
}