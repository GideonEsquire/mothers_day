let heart_img;
let hearts = [];
let bg;

function preload() {
  heart_img = loadImage('assets/heart.png');
  bg = loadImage('assets/mothers_day.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (i = 0; i < 100; i++) {
    hearts[i] = new Heart(heart_img,
          random(0, width),
          random(0, height),
          random(0, 100),
          random(12, 24));
  }

}

function draw() {
  image(bg, 0, 0, windowWidth, windowHeight);
  for (i = 0; i < hearts.length; i++) {
    hearts[i].show();
    hearts[i].jitter();
    hearts[i].sin_move();
  }
}