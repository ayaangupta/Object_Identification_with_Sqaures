img = "";
status1 = "";
objects =[];

function preload(){
    img = loadImage("ipad.jpg");
}

function setup(){
    canvas = createCanvas(640, 427);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting objects";
}

function modelLoaded(){
    console.log("modelLoaded");
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    } else{
        console.log(results);
        objects = results;
    }
}

function draw(){
    image(img, 0, 0, 640, 427);
    
    if(status1 != ""){
        for (i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill('#FFFFFF');
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke('#FFFFFF');
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            
            
        }
    }
}

function back_to_home_ipad(){
    window.location = "index.html";
}