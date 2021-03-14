var socket;
function setup(){
    desktopWidth = windowWidth/1.5;
    mobileWidth = windowWidth;
    let cnv = createCanvas(desktopWidth, 900);
    if (windowWidth < 600){
        let cnv = createCanvas(mobileWidth, 400);
    }
    cnv.parent('sketch');
    background(0);

    socket = io.connect('http://alexaann.net/experiments/public/index.html');
    socket.on('mouse', newDrawing);
}
function newDrawing(data){
    noStroke();
    fill(255,0,100);
    ellipse(data.x, data.y, 20, 20);
}

function mouseDragged() {
    console.log("sending: "+ mouseX + ", " + mouseY);

    var data = {
        x: mouseX,
        y: mouseY
    }

    socket.emit('mouse', data);

    noStroke();
    fill(100,0,255);
    ellipse(mouseX, mouseY, 20, 20);
}

function draw(){
}

function windowResized() {
    if (windowWidth < 600) {
        resizeCanvas(windowWidth, 400);
        background(0);
    }
    if (windowWidth > 600) {
        resizeCanvas(windowWidth/1.5, 700);
        background(0);
    }
}