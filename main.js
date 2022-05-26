canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


background_image="parkingLot.jpg";

rover_image="car2.png";

rover_x=5;
rover_y=225;
rover_width=75;
rover_height=100;

function add(){
    background_image_tag=new Image();
    background_image_tag.onload=uploadbackground;
    background_image_tag.src=background_image;

    rover_image_tag=new Image();
    rover_image_tag.onload=uploadrover;
    rover_image_tag.src=rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_image_tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e){
    keyPressed=e.keyCode
    console.log(keyPressed)
   if(keyPressed=="37"){
        left()
        console.log("left")
    } 
    
    if(keyPressed=="38"){
        up()
        console.log("up")
    } 
    
    if(keyPressed=="39"){
        right()
        console.log("right")
    } 

    if(keyPressed=="40"){
        down()
        console.log("down")
    } 
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("When up arrow is pressed, x=" +rover_x +" | y= " +rover_y);
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("When down arrow is pressed, x=" +rover_x +" | y= " +rover_y);
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("When left arrow is pressed, x=" +rover_x +" | y= " +rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("When right arrow is pressed, x=" +rover_x +" | y= " +rover_y);
        uploadbackground();
        uploadrover();
    }
}