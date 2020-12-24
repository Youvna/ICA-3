let t = 0
let t1 = 0
let t2 = 0
let t3 = 0

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  background(5);
}

function draw() {
  //background(0, 100);

  //sun
  push()
  stroke(204, 203, 141)
  strokeWeight(10)
  fill(176, 175, 121)
  ellipse(200, 200, 80)
  pop()


  translate(width / 2, height / 2)

  //planet1
  push()
  rotate(t)
  fill(90, 145, 144)
  ellipse(65, 25, 30)
  t = t - 2
  pop()

  //planet2
  push()
  rotate(t1)
  fill(128)
  ellipse(85, 25, 10)
  t1 = t1 - 1
  pop()

  //planet3
  push()
  rotate(t2)
  fill(195)
  ellipse(205, 35, 40)
  t2 = t2 - 1
  pop()

  

}