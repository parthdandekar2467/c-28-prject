class SRock {
    constructor(x, y, r) {
        var options = {
            isStatic : false,
            restitution : 0,
            friction : 4.0,
            density : 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Matter.Bodies.circle(this.x, this.y, (this.r-20)/2, options);
    
        this.image = loadImage("images/stone.png");

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill(color(102, 102, 102));
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}