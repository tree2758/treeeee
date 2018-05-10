var img;
var r,g,b;
function setup()
{
  r = 0;
  g = 0;
  b = 0;
  createCanvas(904,452);
  img = loadImage("rectangle.png");
}

function draw() 
{
  image(img,452,0);
  fill(r,g + 100,b + 40);
  rect(0,0,452,452);
  fill(r,g + 80,b + 60);
  rect(50,70,352,352);
  fill(r,g + 60,b + 80);
  rect(100,140,252,252);
  fill(r,g + 40,b + 100);
  rect(150,210,152,152);
}

function mousePressed()
{
  if ( (mouseX > 150 && mouseX < 302) && (mouseY > 210 && mouseY < 362) )
  {
    r += 10;
    g += 5;
    b += 2;
    
    if ( r >= 256 )
    {
      r = 0;
      g += 10;
    }
      
    if ( g >= 256 )
    {
      g = 0;
      b += 10;
    }     
 
   if ( b >= 256)
   {
      b = 0;
      r = 0;
   }
  }
}
