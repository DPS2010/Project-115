nosex=""
nosey=""
function preload() {
    
}
function setup () {
canvas = createCanvas(400, 400)
canvas.center()
video = createCapture(VIDEO)
video.size(400, 400)
video.hide()
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on("pose", gotPoses)
}
function draw() {
    image(video, 0, 0, 400, 400)
    
}
function take_snapshot() {
    save("filter_snapshot.png")
}
function modelLoaded() {
    console.log("Model Loaded")
}
function gotPoses(result) {
    if (result.length > 0) {
        console.log(result)
        nosex = result[0].pose.nose.x
        nosey = result[0].pose.nose.y
    }
}