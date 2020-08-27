class GameObject {

  Game;
  Vector = new Vector2D();
  Velocity = new Vector2D();
  isStatic = true;
  isSpheroid = false;
  isCollided = false;
  BoundsColor = Colors.White;

  constructor(g) {
    this.Game = g;
  }

  Draw() {
  }

  Update(DeltaTimeSec) {
    this.BoundsColor = this.isCollided ? Colors.Red : Colors.White;

    if (!this.isStatic) {
      if (this.isCollided) {
        this.Vector.Y = -this.Velocity.Y * DeltaTimeSec * FRICTION;
      }
      else {
        this.Velocity.Y += GRAVITY * DeltaTimeSec;
        console.log(this.Velocity.Y)
      }
      this.Vector.X += this.Velocity.X * DeltaTimeSec;
      this.Vector.Y += this.Velocity.Y * DeltaTimeSec;

    }
  }

  IntersectsWith(OtherObject) {

  }

}