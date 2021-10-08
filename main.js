nx=0;
ny=0;
di=0;
rwx=0;
lwx=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500)

    canvas = createCanvas(550, 400);
    canvas.position(560, 250);

    posenet = ml5.poseNet(video, mL);
    posenet.on("pose", gotPoses);

}

function mL()
{
    console.log("model loaded");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nx = results[0].pose.nose.x;
        ny = results[0].pose.nose.y;
        console.log("nose x = " + nx + "nose y = " + ny);
        lwx = results[0].pose.leftWrist.x;
        rwx = results[0].pose.rightWrist.x;
        di = floor(lwx - rwx);
        console.log("leftwrist = " + lwx + "-" + "rightwrist = " + rwx + "difference = " + di)
    }
}

function draw()
{
    background('#969A97');
    textSize(di);
    document.getElementById("sq").innerHTML="the height and width is = "+ di;
    fill("red");
    stroke("red");
    a= document.getElementById("in").value;
    text(a, nx, ny);

}