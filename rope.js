class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options= {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.offsetX, y: this.offsetY},
            length:10,
            stiffness:1
        }
        this.body=Constraint.create(options);
    }

    display() {
       var posA=this.body.bodyA;
       var posB=this.body.bodyB;
       console.log(this.body);

        strokeWeight(4);
        line(posA.position.x,posA.position.y, posB.position.x,posB.position.y);
    }
}