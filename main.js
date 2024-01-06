noseX=0;
noseY=0;
sunglasses='';


function preload() {
sunglasses=("sunglass.png")
}

function setup() {
Canvas=createCanvas(400,300);
Canvas.center();
Video=createCapture(VIDEO);
Video.hide()
poseNet=ml5.poseNet(Video,modelLoaded)
poseNet.on('pose',gotPoses)


    
}

function gotPoses(results){
    if(results.length>0)

    console.log(results)

    noseX=results[0].pose.nose.X;
    noseY=results[0].pose.nose.Y;
}



function draw() {
    image(Video,0,0,400,300)
    image(sunglasses,noseX,noseY,120,50)
    
}


function modelLoaded() {
    console.log ("modelLoadedsuccessfully")
}





