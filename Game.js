class Game {

  CanvasElement;
  Context;
  Width = GAME_WIDTH;
  Height = GAME_HEIGHT;
  BackgroundColor = Colors.CornFlowerBlue;
  GameObjects = [];


  Initialize = () => {
    this.CanvasElement = document.createElement("canvas");
    this.CanvasElement.width = this.Width;
    this.CanvasElement.height = this.Height;
    this.CanvasElement.style.display = "block";
    this.CanvasElement.style.margin = "auto";
    this.CanvasElement.style.border = "1px solid white";
    this.CanvasElement.style.marginTop = "100px";
    document.body.appendChild(this.CanvasElement);

    this.Context = this.CanvasElement.getContext("2d");

    // Initialize FPS Object
    let fpsCounter = new FPSCounter(this);
    fpsCounter.Position.X = 10;
    fpsCounter.Position.Y = 10;
    fpsCounter.FontSize = 40;
    this.GameObjects.push(fpsCounter);

    let square1 = new GameObject(this);
    square1.Position.Y = 100;
    square1.Width = 100;
    square1.Height = 100;
    this.GameObjects.push(square1);

    let rectangle = new GameObject(this);
    rectangle.Width = 200;
    rectangle.Height = 100;
    rectangle.Position.X = 400;
    rectangle.Position.Y = 100;
    this.GameObjects.push(rectangle);

    let rectangle2 = new GameObject(this);
    rectangle2.Width = 100;
    rectangle2.Height = 200;
    rectangle2.Position.X = 400;
    rectangle2.Position.Y = 200;
    this.GameObjects.push(rectangle2);

    requestAnimationFrame(() => this.Draw());
    setInterval(() => this.Update, 6.94);
  }

  ClearDraw = () => {
    this.Context.fillStyle = this.BackgroundColor;
    this.Context.fillRect(0, 0, this.Width, this.Height);
  }

  Draw = () => {
    this.ClearDraw();

    for (let i in this.GameObjects)
      this.GameObjects[i].Draw();

    requestAnimationFrame(this.Draw);
  }

  Update = () => {
    for (let i in this.GameObjects)
      this.GameObjects[i].Update();
  }

}
