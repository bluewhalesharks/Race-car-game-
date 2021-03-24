canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKWYVcdzpfru-ukwDxHZbLGcQRns209KgKyA&usqp=CAU";
rover_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWUHkXrk3KekQkqw7qNWZu3AJoxCaz18zPQ&usqp=CAU";

rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);   
}
function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover.width, rover.height);   
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
    if(keyPressed == '38')
    {
        up();
        console.log("up");           
    };

}