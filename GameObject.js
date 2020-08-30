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
      }
      if (this.IsCollided) {
        this.Velocity.Y = -this.Velocity.Y * RESTITUTION;
        this.Velocity.X = - this.Velocity.X * RESTITUTION;
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

      this.Vector.X += this.Velocity.X * DeltaTimeSec;
      this.Vector.Y += this.Velocity.Y * DeltaTimeSec;
    }
  }

  IntersectsWith(OtherObject) {
  }

  onKeyDown(e) {
    console.log(e);
    if (e == 32) {
      this.Jump();
    }
    if (e == 65) {
      this.Moveleft();
    }
    if (e == 68) {
      this.MoveRight();
    }
  }

  Moveleft() {
    this.Velocity.X = -10;
  }

  MoveRight() {
    this.Velocity.X = 10;
  }

  Jump() {
    if (this.IsCollided) {
      this.Velocity.Y = 40;
    }
  }
}