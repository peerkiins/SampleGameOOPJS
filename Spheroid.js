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

        super.Draw
    }

    IntersectsWith(OtherObject) {
        var Obj2Left = OtherObject.Vector.X;
        var Obj2Right = OtherObject.Vector.X + OtherObject.Width;
        var distX = Math.abs(this.Vector.X - OtherObject.Vector.X - OtherObject.Width / 2);
        var distY = Math.abs(this.Vector.Y - OtherObject.Vector.Y - OtherObject.Height / 2);

        if (distY - this.Radius < ((OtherObject.Height / 2) + this.Radius) && this.Vector.X + (this.Radius * 2) > Obj2Left && this.Vector.X < Obj2Right) {
            this.IsCollided = true;
        }

        else {
            this.IsCollided = false;
        }

        super.IntersectsWith();
    }
}