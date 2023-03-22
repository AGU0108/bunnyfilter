var noseX = 0;
var noseY = 0;

var dog_filter;

function preload(){
 bunny_filter = loadImage('bunny.png');
}

function setup(){
canvas = createCanvas(600,600);
canvas.center();

video = createCapture(VIDEO);
video.size(600,600)
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("MODELO OK!")
}


function draw(){
image(video, 0, 0, 600, 600);
image(bunny_filter, noseX, noseY, 500, 500);
}

function take_snapshot(){
    save('filter_photo.png');
}

function gotPoses(results){
    console.log(results);
    noseX = results[0].pose.nose.x - 230;
    noseY = results[0].pose.nose.y - 370;
}
