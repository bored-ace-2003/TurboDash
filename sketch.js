var car;

function setup() {
  createCanvas(400, 400);
  car = new Car();
}

function draw() {
  background(220);
  car.update();
  car.show()
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    car.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    car.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    car.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    car.dir(-1, 0);
  }
}