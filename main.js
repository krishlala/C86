var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
Player_y = 10;
var plyer_object = "";
function player_update()
{
  fabric.Image.fromURL("player.png", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    plyer_object.scaleToHeight(450);
    player_object.set({
      top:player_y,
      left:player_x
    });
    canvas.add(plyer_object);
    
  })
}
