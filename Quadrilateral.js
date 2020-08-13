class Quadrilateral extends GameObject {
  constructor(g) {
    super(g);
    this.Width = 100;
    this.Height = 100;
    this.Position.X = 0;
    this.Position.Y = 0;
  }

  Draw() {
    this.Game.Context.strokeStyle = this.BoundsColor;
    this.Game.Context.strokeRect(
      this.Position.X,
      this.Position.Y,
      this.Width,
      this.Height);

    super.Draw();
  }

  Update() {

  }
}