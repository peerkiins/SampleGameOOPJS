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

  Update() {
    super.Update();
  }
}