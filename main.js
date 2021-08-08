song1="";
song2="";
leftx=0;
lefty=0;
righty=0;
rightx=0;
srightw=0;
sleftw=0;
song1s="";
song2s="";
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
    fill(2,190,190);
    stroke(2,190,190);
    song1s=song1.isPlaying();
    if(sleftw>0.2){
        circle(leftx,lefty,20);
        song2.stop();
    if(song1s==false){
song1.play();
document.getElementById("sn").innerHTML="Peter Pan Song";
    }
    }
    if(sleftw>0.2){
        circle(leftx,lefty,20);
        song2.stop();
    if(song1s==false){
song1.play();
document.getElementById("sn").innerHTML="Peter Pan Song";
    }
    }

    if(srightw>0.2){
        circle(rightx,righty,20);
        song1.stop();
    if(song2s==false){
song2.play();
document.getElementById("sn").innerHTML="Harry Potter Song";
    }
    }
    if(srightw>0.2){
        circle(rightx,righty,20);
        song1.stop();
    if(song2s==false){
song2.play();
document.getElementById("sn").innerHTML="Harry Potter Song";
    }
    }
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);

srightw=results[0].pose.keypoints[10].score;
sleftw=results[0].pose.keypoints[9].score;

        rightx=results[0].pose.rightWrist.x;
        righty=results[0].pose.rightWrist.y;
        console.log("Right Wrist X Is"+rightx+"Right Wrist Y Is"+righty);

        leftx=results[0].pose.leftWrist.x;
        lefty=results[0].pose.leftWrist.y;
        console.log("Left Wrist X Is"+leftx+"Left Wrist Y Is"+lefty);
    }
}