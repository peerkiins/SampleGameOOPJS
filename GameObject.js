class GameObject {

  Game;
  Position = new Vector2();
  BoundsColor = Colors.White;

  constructor(g) {
    this.Game = g;
  }

  Draw() {
    this.Game.Context.strokeStyle = this.BoundsColor;
    this.Game.Context.strokeRect(
      this.Position.X,
      this.Position.Y,
      this.Width,
      this.Height);
  }

  Update () {
  }

}