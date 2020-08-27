class Spheroid extends GameObject {
    constructor(g) {
        super(g);
        this.Radius = 100;
        this.sAngle = 0;
        this.eAngle = 2;
        this.Vector.X = 0;
        this.Vector.Y = 0;
    }
    Draw() {
        this.Game.Context.strokeStyle = this.BoundsColor;
        this.Game.Context.beginPath();
        this.Game.Context.arc(
            this.Vector.X + this.Radius,
            this.Vector.Y + this.Radius,
            this.Radius,
            this.sAngle,
            this.eAngle * Math.PI);
        this.Game.Context.fill();
    }
}