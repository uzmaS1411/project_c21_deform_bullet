
//+++++project c21

var bullet, wall,thickness;
var speed,weight;
var damage;

function setup()
{
  createCanvas(1600,400);


  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,10);
  bullet.shapeColor ="white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet.velocityX =   speed;

}
function draw()
{
  background("black");
  drawSprites();

  if(theyHaveCollided(wall,bullet))
  {
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    bullet.velocityX =0;
    if(damage >10)
    {
      wall.shapeColor="red"
      textSize(15)
      fill("white");
      text("The wall is not effective against the bullet",300,300)
    }
    else{
      wall.shapeColor="green" 
    }

  }


}


function theyHaveCollided(wall,bullet)
{
  bRightEdge = bullet.width+bullet.x
  wLeftEdge = wall.x;
  if(bRightEdge>=wLeftEdge){
    return true;
  }
  else{
    return false;
  }

}

