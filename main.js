song1="";
song2="";
leftx=0;
lefty=0;
function preload() {
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}


function setup() {
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded); 
    posenet.on("pose",gotPoses);
 }
 function modelLoaded() {
     console.log("PoseNet Is Initialized");
 }


function draw() {
    image(video,0,0,600,500);
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);



        rightx=results[0].pose.rightWrist.x;
        righty=results[0].pose.rightWrist.y;
        console.log("Right Wrist X Is"+rightx+"Right Wrist Y Is"+righty);

        leftx=results[0].pose.leftWrist.x;
        lefty=results[0].pose.leftWrist.y;
        console.log("Left Wrist X Is"+leftx+"Left Wrist Y Is"+lefty);
    }
}