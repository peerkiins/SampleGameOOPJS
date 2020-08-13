class Rounded extends GameObject {
    constructor(g) {
        super(g);
        this.Radius = 100;
        this.sAngle = 0;
        this.eAngle = 2;
        this.Position.X = 0;
        this.Position.Y = 0;
    }

    Draw() {
        this.Game.Context.strokeStyle = this.BoundsColor;
        this.Game.Context.beginPath();
        this.Game.Context.arc(
            this.Position.X + this.Radius,
            this.Position.Y + this.Radius,
            this.Radius,
            this.sAngle,
            this.eAngle * Math.PI);
        this.Game.Context.fill();

        super.Draw();
    }

    Update() {

    }
}