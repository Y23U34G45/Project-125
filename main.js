LeftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modalLoaded(){
    console.log('Posenet Is Initialized!');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        LeftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(LeftWristX - rightWristX);
    }
}
function draw(){
    background('#6C91C2');
    textSize(difference);
    fill('#FFD700');
    text('Peter', 50, 400);
}