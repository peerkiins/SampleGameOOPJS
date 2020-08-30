class GameObject {

  Game;
  Vector = new Vector2D();
  Velocity = new Vector2D();
  IsStatic = true;
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
      if (!this.IsCollided) {
        this.Velocity.Y += GRAVITY * DeltaTimeSec;
        this.Velocity.X += this.Velocity.X * DeltaTimeSec * FRICTION;
      }
      if (this.IsCollided) {
        this.Velocity.Y = -this.Velocity.Y * RESTITUTION;
        this.Velocity.X = this.Velocity.X * FRICTION;
      }
      if (this.Vector.Y + this.Radius < this.Radius) {
        this.Velocity.Y = Math.abs(this.Velocity.Y) * RESTITUTION;
      }
      if (this.Vector.X + this.Radius < this.Radius) {
        this.Velocity.X = Math.abs(this.Velocity.X) * RESTITUTION;
      }
      if (this.Vector.X + this.Radius > GAME_WIDTH - this.Radius) {
        this.Velocity.X = -this.Velocity.X * RESTITUTION;
      }

      this.Vector.X += this.Velocity.X;
      this.Vector.Y += this.Velocity.Y;
    }
  }

  IntersectsWith(OtherObject) {
  }
}