// TODO: mask

let mImg;
let mMask;

function preload() {
  mImg = loadImage("../assets/arara.jpg");
  mMask = loadImage("../assets/mask.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0); // this means the bkg is transparent

  mImg.resize(600, 0);
  mMask.resize(600, 0); //seems like you cant actually resize the mask

  mImg.mask(mMask);

  image(mImg, 0, 0);
}

function draw() {}

function mousePressed() {
  save("star_mask.png");
}
