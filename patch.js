function yourpatch(x,y){
  noFill();
  stroke(150);
  fill(255,0,0)
  rect(x,y,100,100);
  colorMode(RGB);
	stroke(0,255,0);
  strokeWeight(0.5);
  line(x+50,y,x+50,y+100);

  stroke(0,120,0);
  strokeWeight(0.5);
  line(x,y+50,x+100,y+50);
  
  fill(0,120,0)
  rect(17.5+x,y,5,100)
	rect(27.5+x,y,5,100)
  rect(67.5+x,y,5,100)
  rect(77.5+x,y,5,100)
  rect(x,y+17.5,100,5)
  rect(x,y+27.5,100,5)
  rect(x,y+67.5,100,5)
  rect(x,y+77.5,100,5)
  
  stroke(0,0,200);
  strokeWeight(0.75);
  line(15+x,y,15+x,100+y);
  line(35+x,y,35+x,100+y);
  line(65+x,y,65+x,100+y);
  line(85+x,y,85+x,100+y);
  line(x,15+y,100+x,15+y);
  line(x,35+y,100+x,35+y);
  line(x,65+y,100+x,65+y);
  line(x,85+y,100+x,85+y);
  
  stroke(255)
  strokeWeight(0.75);
  line(25+x,y,25+x,100+y);
  line(75+x,y,75+x,100+y);
  line(x,25+y,100+x,25+y);
  line(x,75+y,100+x,75+y);
  
  stroke(255,255,0);
  strokeWeight(0.75);
  line(17+x,y,17+x,100+y);
  line(33+x,y,33+x,100+y);
  line(67+x,y,67+x,100+y);
  line(83+x,y,83+x,100+y);
  line(x,17+y,100+x,17+y);
  line(x,33+y,100+x,33+y);
  line(x,67+y,100+x,67+y);
  line(x,83+y,100+x,83+y);
  
  stroke(255,0,0);
  var lines=0;
  while (lines < 100){
    line(x+lines, y, x, y+lines);
    lines = lines + 2;
  }
  stroke(255,0,0);
  lines = 0;
  while (lines < 100) {
    line(x+100, y+lines, x+lines, y+100);
    lines = lines + 2;
  }
}

background(255);
var x=(width-100)/2
var y=(height-100)/2
yourpatch(x,y);
