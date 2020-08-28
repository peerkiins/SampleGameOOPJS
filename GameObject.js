class GameObject {

  Game;
  Vector = new Vector2D();
  Velocity = new Vector2D();
  IsStatic = true;
  IsSpheroid = false;
  IsCollided = false;
  BoundsColor = Colors.White;

  constructor(g) {
    this.Game = g;
  }

  Draw() {
  }

  Update(DeltaTimeSec) {

    if (!this.IsStatic) {
      this.BoundsColor = this.IsCollided ? Colors.Red : Colors.White;
      if (this.IsCollided) {
        this.Velocity.Y = -this.Velocity.Y * RESTITUTION;
      }
      else {
        this.Velocity.Y += GRAVITY * DeltaTimeSec;
      }
      console.log(this.IsCollided)
      this.Vector.X += this.Velocity.X * DeltaTimeSec;
      this.Vector.Y += this.Velocity.Y * DeltaTimeSec;
    }
  }

  IntersectsWith(OtherObject) {
  }
}