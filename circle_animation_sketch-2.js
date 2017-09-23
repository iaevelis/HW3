background(255);
noStroke();

var h = 0;
var a = 0;

while(true) {
  background(255);
  colorMode(HSB);
  fill(h, 100, 100);
  h = h + 5;

  x = a + 100;
	a = 10 + a
    
  y = 100
  
  ellipse(x, y, 60, 60);

  if (a >= 300) {
  	a = 0;
  }
  
  if (h >= 360) {
    h = 0;
  }
}
