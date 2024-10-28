// TODO: effect based on x,y

let mImg;

function preload() {
  mImg = loadImage("../assets/arara.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  mImg.resize(600, 0);
  mImg.loadPixels();

  for (let idx = 0; idx < mImg.pixels.length; idx += 4) {
    let pixIdx = idx / 4;
    let y = int(pixIdx / mImg.width);
    let x = pixIdx % mImg.width;

    let redVal = mImg.pixels[idx + 0];
    let greenVal = mImg.pixels[idx + 1];
    let blueVal = mImg.pixels[idx + 2];
    // let alphaVal = mImg.pixels[idx + 3];

    let alphaVal = map(y, 0, mImg.height, 255, 0); // this is making it transparent? alphaVal is transparency?
    stroke(redVal, greenVal, blueVal, alphaVal);
    if(x > mImg.width/4 && x < 0.75*mImg.width) {
      point(x,y)
    }
  }
  mImg.updatePixels();

  // image(mImg, 0, 0);
}

function draw() {}
