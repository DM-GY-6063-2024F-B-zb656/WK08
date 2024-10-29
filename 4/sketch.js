// TODO: saving images

let mImg;

let mPg;

function preload() {
  mImg = loadImage("../assets/arara.jpg");
}

function star(x, y, w, c) {
  c = c | (w / 10);
  push();
  translate(x, y);
  beginShape();
  let r = w / 2;
  vertex(0, -r);
  vertex(c, -c);
  vertex(r, 0);
  vertex(c, c);
  vertex(0, r);
  vertex(-c, c);
  vertex(-r, 0);
  vertex(-c, -c);
  endShape(CLOSE);
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  mPg = createGraphics(mImg.width, mImg.height);

  mPg.background(255,0,0);
  


  // stroke(0);
  // fill(255);
  // star(width / 2, height / 2, 400);

  image(mPg, 0,0);
}

function draw() {}
