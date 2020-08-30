class Quadrilateral extends GameObject {
  constructor(g) {
    super(g);
    this.Width = 100;
    this.Height = 100;
    this.Vector.X = 0;
    this.Vector.Y = 0;
  }

  Draw() {
    this.Game.Context.strokeStyle = this.BoundsColor;
    this.Game.Context.strokeRect(
      this.Vector.X,
      this.Vector.Y,
      this.Width,
      this.Height);

    super.Draw();
  }

  IntersectsWith(OtherObject) {
    if (OtherObject.Vector.X > this.Width + this.Vector.X ||
      this.Vector.X > OtherObject.Width + OtherObject.Vector.X ||
      OtherObject.Vector.Y > this.Height + this.Vector.Y ||
      this.Vector.Y > OtherObject.Height + OtherObject.Vector.Y) {
      this.IsCollided = false;
      OtherObject.IsCollided = false;
    }
    else {
      this.IsCollided = true;
      OtherObject.IsCollided = true;
    }
    super.IntersectsWith();
  }
}