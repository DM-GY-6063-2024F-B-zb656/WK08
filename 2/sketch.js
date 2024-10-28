// TODO: x,y to canvas

let mImg;

function preload() {
  mImg = loadImage("../assets/arara.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  mImg.resize(width, 0);
  mImg.loadPixels();

  let rectDim = 25;
  for (let y = 0; y < height; y += rectDim) {
    for (let x = 0; x < width; x += rectDim) {
      let pixIdx = y * mImg.width + x;
      let p5Idx = 4 * pixIdx;

      let redVal = mImg.pixels[p5Idx + 0];
      let greenVal = mImg.pixels[p5Idx + 1];
      let blueVal = mImg.pixels[p5Idx + 2];

      fill(redVal, greenVal, blueVal);
      let diam = map(greenVal, 0, 255, 32, 8);
      ellipse(x, y, random(8,32));
    }
  }
  mImg.updatePixels();

  // image(mImg, 0, 0);
}

function draw() {}
