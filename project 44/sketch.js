var city1 , city2 , city3 , player, level3Img , RoadImg , playerImg , level2Img , level1Img , obstacle , obstacle2 , noticeBoard

function preLoad(){
level3Img = loadImage("LEVEL 3 CITY.jpg")
level1Img = loadImage("LEVEL ONE CITY.JPG")
level2Img = loadImage("level 2 city.jpg")

RoadImg = loadImage("road for level 3 city.jpg")
playerImg = loadImage("running player.gif")

obstacle = loadImage("giphy corona virus obstacles.gif")
obstacle2 = loadImage("giphy corona virus obstacles level 3.gif")

noticeBoard = loadImage("CORONA EFFECTED ZONE.JPG")

}

function setup() {
  createCanvas(1000,800);
  createSprite(400, 200, 50, 50);
  /*player = createSprite(400,400)
  player.addImage("playerImg1",playerImg)*/

  city1 = createSprite(500,400,1000,800);
  city1.addImage(level1Img);

  /*city2 = createSprite(500,400,1000,800);
  city2.addImage("city2" , level2Img)

  city3 = createSprite(500,400,1000,800);
  city3.addImage("city3" , level2Img)*/
}

function draw() {
  background(255,255,255);  
  drawSprites();
}