Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");


greencar_height=75;
greencar_width=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_img_tag=new Image();
	background_img_tag.onload = uploadBackground();
	background_img_tag.src = background_image;
	greencar_img_tag=new Image();
	greencar_img_tag.onload = uploadgreencar();
	greencar_img_tag.src = greencar_image;

}

function uploadBackground() {
	ctx.drawImage(background_img_tag,0,0,Canvas.width,Canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_img_tag,greencar_x,greencar_y,greencar_width,greencar_height)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y>=0){
		greencar_y = greencar_y - 10
		console.log("when up arrow pressed , x = " +greencar_x+"y="+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencar_y<=300){
		greencar_y = greencar_y + 10
		console.log("when up arrow pressed , x = " +greencar_x+"y="+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(greencar_x>=0){
		greencar_x = greencar_x - 10
		console.log("when up arrow pressed , x = " +greencar_x+"y="+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(greencar_x<=700){
		greencar_x = greencar_x + 10
		console.log("when up arrow pressed , x = " +greencar_x+"y="+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
    }
