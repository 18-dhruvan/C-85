canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_x=18;
rover_y=18;
rover_width=300;
rover_height=300;
rover_image="rover.png"
var image_array=[
     "mars2.jpg",
     "mars3.jpg",
     "mars5.jpg",
     "mars.jpg"
];
random_number=Math.floor(Math.random()*4)
background_image=image_array[random_number];
function add(){
    backgrond_imgAdd=new Image();
    backgrond_imgAdd.onload=uploadBackground;
    backgrond_imgAdd.src=background_image;
    rover_imgAdd=new Image();
    rover_imgAdd.onload=uploadrover;
    rover_imgAdd.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(backgrond_imgAdd,0,0,900,600)
    
}
function uploadrover(){
    ctx.drawImage(rover_imgAdd,rover_x,rover_y,90,60)
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
    keypressed=e.keyCode
 console.log (keypressed);
if (keypressed=="37"){
    left();
}
if (keypressed=="38"){
    up()
}
if (keypressed=="39"){
    right()
}
if (keypressed=="40"){
    down()
}
}

function up(){
    if (rover_y>0){
    rover_y= rover_y-10;
    uploadBackground()
uploadrover()}
}
function down(){
    if (rover_y<300){
    rover_y= rover_y+10;
    uploadBackground()
uploadrover()}
}

function right(){
    if (rover_x<800)
    rover_x= rover_x+10;
    uploadBackground()
uploadrover()
}

function left(){
    if (rover_x>0){
    rover_x= rover_x-10;
    uploadBackground()
uploadrover()}
}
