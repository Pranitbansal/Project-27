class Bob {
    constructor(x,y,radius) {
        this.body=Bodies.circle(x,y,(radius-20)/2,{restitution: 0.3, isStatic: true, density: 1.2, friction: 0.5})
        World.add(world,this.body);
        this.radius=radius;
    }

    display() {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}