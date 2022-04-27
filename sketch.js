o = 5
m = 3

let pursuer;
let target;

function setup() {
  createCanvas(800, 600);
  pursuer = new Vehicle(100, 100);
  target = new Target(200, 100);
}

function draw() {
  background(200);

  let steering = pursuer.pursue(target);
  pursuer.applyForce(steering);

  let d = p5.Vector.dist(pursuer.pos, target.pos);
  if (d < pursuer.r + target.r) {
   target = new Target(random(width), random(height));
    pursuer.pos.set(width / 2, height / 2);
  }

  pursuer.update();
  pursuer.show();

  target.wander();
  target.edges();
  target.update();
  target.show();
}

class Vehicle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 8;
    this.maxForce = 0.25;
    this.r = 16;
  }

  evade(vehicle) {
    let pursuit = this.pursue(vehicle);
    pursuit.mult(-1);
    return pursuit;
  }

  pursue(vehicle) {
    let target = vehicle.pos.copy();
    let prediction = vehicle.vel.copy();
    prediction.mult(10);
    target.add(prediction);
    return this.seek(target);
  }

  flee(target) {
    return this.seek(target).mult(-1);
  }

  seek(target) {
    let force = p5.Vector.sub(target, this.pos);
    force.setMag(this.maxSpeed);
    force.sub(this.vel);
    force.limit(this.maxForce);
    return force;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    noStroke();
    fill(255);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    
    
   //orange
    fill(255,140,0);
    rect(this.r+(o*-4), this.r+(o*-13), (o*1),(o*3));
    rect(this.r+(o*3), this.r+(o*-13), (o*1),(o*3));
    rect(this.r+(o*-4), this.r+(o*-10), (o*8),(o*5));
    rect(this.r+(o*-5), this.r+(o*-5), (o*10),(o*3));
    rect(this.r+(o*-5), this.r+(o*-5), (o*10),(o*3));
    rect(this.r+(o*-4), this.r+(o*-2), (o*8),(o*2));
    rect(this.r+(o*-5), this.r+(o*0), (o*10),(o*2));
    rect(this.r+(o*-6), this.r+(o*2), (o*12),(o*2));
    rect(this.r+(o*-7), this.r+(o*4), (o*14),(o*3));
    rect(this.r+(o*7), this.r+(o*-7), (o*1),(o*2));
    rect(this.r+(o*-8), this.r+(o*-7), (o*1),(o*2));
    rect(this.r+(o*9), this.r+(o*-6), (o*1),(o*1));
    rect(this.r+(o*-10), this.r+(o*-6), (o*1),(o*1));
    rect(this.r+(o*10), this.r+(o*-5), (o*1),(o*1));
    rect(this.r+(o*-11), this.r+(o*-5), (o*1),(o*1));
    rect(this.r+(o*11), this.r+(o*-4), (o*1),(o*2));
    rect(this.r+(o*-12), this.r+(o*-4), (o*1),(o*2));
    rect(this.r+(o*12), this.r+(o*-2), (o*1),(o*2));
    rect(this.r+(o*-13), this.r+(o*-2), (o*1),(o*2));
    
    //warna kuning
    fill(255,222,173)
    rect(this.r+(o*2), this.r+(o*3), (o*1),(o*1));
    rect(this.r-(o*3), this.r+(o*3), (o*1),(o*1));
    rect(this.r-(o*4), this.r+(o*4), (o*8),(o*2));
    rect(this.r-(o*3), this.r+(o*6), (o*6),(o*1));
    rect(this.r-(o*3), this.r+(o*7), (o*6),(o*1));
    rect(this.r-(o*2), this.r+(o*7), (o*4),(o*1));
    
    //warna hitam
    fill('black');
    rect(this.r-(o*5), this.r-(o*2), (o*1),(o*2));
    rect(this.r-(o*6), this.r-(o*6), (o*1),(o*5));
    rect(this.r-(o*5), this.r-(o*13), (o*1),(o*8));
    rect(this.r-(o*4), this.r-(o*14), (o*1),(o*1));
    rect(this.r-(o*3), this.r-(o*13), (o*1),(o*3));
    rect(this.r-(o*2), this.r-(o*11), (o*1),(o*3));
    rect(this.r-(o*1), this.r-(o*11), (o*2),(o*1));
    rect(this.r+(o*1), this.r-(o*11), (o*1),(o*3));
    rect(this.r+(o*2), this.r-(o*13), (o*1),(o*3));
    rect(this.r+(o*3), this.r-(o*14), (o*1),(o*1));
    rect(this.r+(o*4), this.r-(o*13), (o*1),(o*8));
    rect(this.r+(o*5), this.r-(o*6), (o*1),(o*5));
    rect(this.r+(o*4), this.r-(o*2), (o*1),(o*2));
    rect(this.r+(o*5), this.r+(o*0), (o*1),(o*2));
    rect(this.r+(o*6), this.r+(o*2), (o*1),(o*2));
    rect(this.r+(o*7), this.r+(o*4), (o*1),(o*3));
    rect(this.r+(o*6), this.r+(o*7), (o*1),(o*2));
    rect(this.r+(o*3), this.r+(o*9), (o*3),(o*1));
    rect(this.r+(o*-3), this.r+(o*8), (o*6),(o*1));
    rect(this.r+(o*-6), this.r+(o*9), (o*3),(o*1));
    rect(this.r+(o*-7), this.r+(o*7), (o*1),(o*2));
    rect(this.r+(o*-8), this.r+(o*4), (o*1),(o*3));
    rect(this.r+(o*-7), this.r+(o*2), (o*1),(o*2));
    rect(this.r+(o*-6), this.r+(o*0), (o*1),(o*2));
    rect(this.r+(o*-4), this.r+(o*6), (o*1),(o*1));
    rect(this.r+(o*-3), this.r+(o*7), (o*1),(o*1));
    rect(this.r+(o*2), this.r+(o*7), (o*1),(o*1));
    rect(this.r+(o*3), this.r+(o*6), (o*1),(o*1));
    rect(this.r+(o*-1), this.r+(o*3), (o*2),(o*1));
    rect(this.r+(o*-4), this.r+(o*-7), (o*1),(o*1));
    rect(this.r+(o*3), this.r+(o*-7), (o*1),(o*1));
    
    //putih
    fill('white');
    rect(this.r+(o*-4), this.r+(o*-5), (o*1),(o*2));
    rect(this.r+(o*3), this.r+(o*-5), (o*1),(o*2));
    
    //cokelat
    fill(140,82,45);
    rect(this.r+(o*3), this.r+(o*1), (o*1),(o*1));
    rect(this.r+(o*-4), this.r+(o*1), (o*1),(o*1));
    rect(this.r+(o*2), this.r+(o*2), (o*1),(o*1));
    rect(this.r+(o*-3), this.r+(o*2), (o*1),(o*1));
    rect(this.r+(o*-2), this.r+(o*3), (o*1),(o*1));
    rect(this.r+(o*-4), this.r+(o*3), (o*1),(o*1));
    rect(this.r+(o*1), this.r+(o*3), (o*1),(o*1));
    rect(this.r+(o*3), this.r+(o*3), (o*1),(o*1));
    rect(this.r+(o*4), this.r+(o*4), (o*1),(o*2));
    rect(this.r+(o*-5), this.r+(o*4), (o*1),(o*2));
    rect(this.r+(o*-6), this.r+(o*5), (o*1),(o*1));
    rect(this.r+(o*5), this.r+(o*5), (o*1),(o*1));
    rect(this.r+(o*-6), this.r+(o*7), (o*3),(o*1));
    rect(this.r+(o*3), this.r+(o*7), (o*3),(o*1));
    rect(this.r+(o*-7), this.r+(o*6), (o*1),(o*1));
    rect(this.r+(o*6), this.r+(o*6), (o*1),(o*1));
    rect(this.r+(o*-5), this.r+(o*8), (o*1),(o*1));
    rect(this.r+(o*4), this.r+(o*8), (o*1),(o*1));
    rect(this.r+(o*6), this.r+(o*-8), (o*1),(o*6));
    rect(this.r+(o*7), this.r+(o*-8), (o*1),(o*1));
    rect(this.r+(o*8), this.r+(o*-7), (o*2),(o*1));
    rect(this.r+(o*8), this.r+(o*-6), (o*1),(o*1));
    rect(this.r+(o*7), this.r+(o*-5), (o*1),(o*1));
    rect(this.r+(o*10), this.r+(o*-6), (o*1),(o*1));
    rect(this.r+(o*11), this.r+(o*-5), (o*1),(o*1));
    rect(this.r+(o*12), this.r+(o*-4), (o*1),(o*2));
    rect(this.r+(o*11), this.r+(o*-2), (o*1),(o*1));
    rect(this.r+(o*13), this.r+(o*-2), (o*1),(o*3));
    rect(this.r+(o*12), this.r+(o*0), (o*1),(o*1));
    rect(this.r+(o*-7), this.r+(o*-8), (o*1),(o*6));
    rect(this.r+(o*-8), this.r+(o*-8), (o*1),(o*1));
    rect(this.r+(o*-8), this.r+(o*-5), (o*1),(o*1));
    rect(this.r+(o*-9), this.r+(o*-7), (o*1),(o*2));
    rect(this.r+(o*-10), this.r+(o*-7), (o*1),(o*1));
    rect(this.r+(o*-11), this.r+(o*-6), (o*1),(o*1));
    rect(this.r+(o*-12), this.r+(o*-5), (o*1),(o*1));
    rect(this.r+(o*-13), this.r+(o*-4), (o*1),(o*2));
    rect(this.r+(o*-12), this.r+(o*-2), (o*1),(o*1));
    rect(this.r+(o*-14), this.r+(o*-2), (o*1),(o*3));
    rect(this.r+(o*-13), this.r+(o*0), (o*1),(o*1));
    
    //biru tua
    fill(25,25,112);
    rect(this.r+(o*2), this.r+(o*-3), (o*1),(o*1));
    rect(this.r+(o*-3), this.r+(o*-3), (o*1),(o*1));
    rect(this.r+(o*1), this.r+(o*2), (o*1),(o*1));
    rect(this.r+(o*-2), this.r+(o*2), (o*1),(o*1));
    rect(this.r+(o*3), this.r+(o*8), (o*1),(o*1));
    rect(this.r+(o*5), this.r+(o*8), (o*1),(o*1));
    rect(this.r+(o*-4), this.r+(o*8), (o*1),(o*1));
    rect(this.r+(o*-6), this.r+(o*8), (o*1),(o*1));
    rect(this.r+(o*7), this.r+(o*-4), (o*1),(o*1));
    rect(this.r+(o*-8), this.r+(o*-4), (o*1),(o*1));
    rect(this.r+(o*7), this.r+(o*-3), (o*2),(o*1));
    rect(this.r+(o*-9), this.r+(o*-3), (o*2),(o*1));
    rect(this.r+(o*6), this.r+(o*-2), (o*4),(o*1));
    rect(this.r+(o*-10), this.r+(o*-2), (o*4),(o*1));
    rect(this.r+(o*5), this.r+(o*-1), (o*7),(o*1));
    rect(this.r+(o*-12), this.r+(o*-1), (o*7),(o*1));
    rect(this.r+(o*6), this.r+(o*0), (o*3),(o*1));
    rect(this.r+(o*-9), this.r+(o*0), (o*3),(o*1));
    
    //biru muda
    fill(65,105,225);
    rect(this.r+(o*8), this.r+(o*-5), (o*1),(o*2));
    rect(this.r+(o*9), this.r+(o*-5), (o*1),(o*3));
    rect(this.r+(o*10), this.r+(o*-4), (o*1),(o*3));
    rect(this.r+(o*-9), this.r+(o*-5), (o*1),(o*2));
    rect(this.r+(o*-10), this.r+(o*-5), (o*1),(o*3));
    rect(this.r+(o*-11), this.r+(o*-4), (o*1),(o*3));
    rect(this.r+(o*-3), this.r+(o*-4), (o*1),(o*1));
    rect(this.r+(o*2), this.r+(o*-4), (o*1),(o*1));


    pop();
  }

  edges() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }
}
const debug = true;

class Target extends Vehicle {
  constructor(x, y) {
    super(x, y);
    this.maxForce = 0.05;
    this.vel = p5.Vector.random2D();
    this.vel.mult(10);
    this.maxSpeed = 4;
    this.wandertheta = 0;
  }

  wander() {
    let wanderR = 24;
    let wanderD = 120;
    let change = 0.2;
    this.wandertheta += random(-change, change);

    let pos = this.vel.copy();
    pos.normalize();
    pos.mult(wanderD);
    pos.add(this.pos);

    let h = this.vel.heading();

    let offset = createVector(
      wanderR * cos(this.wandertheta + h),
      wanderR * sin(this.wandertheta + h)
    );
    let target = p5.Vector.add(pos, offset);
    let force = this.seek(target);
    this.applyForce(force);

    
  }

  show() {
    noStroke()
    push();
    translate(this.pos.x, this.pos.y);
    
    
    //Merah
    fill('#FD5D5D')
    rect(this.r+(m*-5), this.r+(m*0), (m*9),(m*4))
    rect(this.r+(m*-4), this.r+(m*-1), (m*2),(m*1))
    rect(this.r+(m*-5), this.r+(m*4), (m*8),(m*1))
    rect(this.r+(m*-4), this.r+(m*5), (m*6),(m*1))
    
    //Pink
    fill('#F3D4D5')
    rect(this.r+(m*-3), this.r+(m*0), (m*3),(m*2))
    rect(this.r+(m*-4), this.r+(m*1), (m*3),(m*2))
    
    //Hijau Muda
    fill('#91C483')
    rect(this.r+(m*0), this.r+(m*-2), (m*4),(m*2))
    
    //Hijau Tua
    fill('#243D25')
    rect(this.r+(m*0), this.r+(m*-1), (m*2),(m*1))
    rect(this.r+(m*2), this.r+(m*0), (m*3),(m*1))
    rect(this.r+(m*4), this.r+(m*-1), (m*1),(m*1))
    
    //Emas
    fill('#FFD36E')
    rect(this.r+(m*-2), this.r+(m*-4), (m*1),(m*1))
    
    //Cokelat
    fill('brown')
    rect(this.r+(m*-2), this.r+(m*-3), (m*1),(m*2))
    
    //Hitam
    fill('black')
    rect(this.r+(m*0), this.r+(m*0), (m*2),(m*1))
    rect(this.r+(m*2), this.r+(m*1), (m*4),(m*1))
    rect(this.r+(m*4), this.r+(m*2), (m*1),(m*2))
    rect(this.r+(m*3), this.r+(m*4), (m*1),(m*1))
    rect(this.r+(m*2), this.r+(m*5), (m*1),(m*1))
    rect(this.r+(m*0), this.r+(m*6), (m*2),(m*1))
    rect(this.r+(m*-1), this.r+(m*5), (m*1),(m*1))
    rect(this.r+(m*-3), this.r+(m*6), (m*2),(m*1))
    rect(this.r+(m*-4), this.r+(m*5), (m*1),(m*1))
    rect(this.r+(m*-5), this.r+(m*4), (m*1),(m*1))
    rect(this.r+(m*-6), this.r+(m*0), (m*1),(m*4))
    rect(this.r+(m*-5), this.r+(m*-1), (m*1),(m*1))
    rect(this.r+(m*-4), this.r+(m*-2), (m*2),(m*1))
    rect(this.r+(m*-3), this.r+(m*-4), (m*1),(m*2))
    rect(this.r+(m*-2), this.r+(m*-5), (m*1),(m*1))
    rect(this.r+(m*-1), this.r+(m*-4), (m*1),(m*4))
    rect(this.r+(m*-2), this.r+(m*-1), (m*1),(m*1))
    rect(this.r+(m*0), this.r+(m*-3), (m*4),(m*1))
    rect(this.r+(m*4), this.r+(m*-2), (m*1),(m*1))
    rect(this.r+(m*5), this.r+(m*-1), (m*1),(m*3))
    
    
    pop();
  }
}

