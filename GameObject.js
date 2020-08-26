class GameObject {

  Game;
  Vector = new Vector2D();
  Velocity = new Vector2D();
  isStatic = false;
  isSpheroid = false;
  BoundsColor = Colors.White;

  constructor(g) {
    this.Game = g;
  }

  Draw() {
  }

  Update(DeltaTimeSec) {
    console.log(DeltaTimeSec)
    // this.Velocity.Y = GRAVITY * DeltaTimeSec;

    // this.Vector.Y += this.Velocity.Y * DeltaTimeSec;

    // console.log(this.Velocity.Y)
    // console.log(this.Vector.Y)
  }
}