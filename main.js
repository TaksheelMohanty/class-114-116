function preload(){

}

function setup(){
    canvas = createCanvas(1600, 900);
    canvas.position (150, 150);
    video = createCapture(VIDEO)
    video.hide();
}

function draw(){
    image(video, 600, 300, 400,300);
    
    fill('rgb(255,0,0)');
    circle(1500, 800, 100);
    
    fill('rgb(255,0,0)');
    circle(100, 100, 100);
    
    fill('rgb(255,0,0)');
    circle(1500, 100, 100);
    
    fill('rgb(255,0,0)');
    circle(100, 800, 100);
    
    fill('rgb(34,139,34)');
    rect(150, 785, 1300, 30);
    
    fill('rgb(34,139,34)');
    rect(150, 85, 1300, 30);
    
    fill('rgb(34,139,34)');
    rect(1485, 150, 30, 600);

    fill('rgb(34,139,34)');
    rect(85,150, 30, 600)
    
}

function take_snapshot(){
    save('your_image.png');
}