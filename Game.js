class Game {

  CanvasElement;
  Context;
  Width = GAME_WIDTH;
  Height = GAME_HEIGHT;
  BackgroundColor = Colors.CornFlowerBlue;
  GameTime;
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

    // Object Platforms
    let square1 = new Quadrilateral(this);
    square1.Position.Y = GAME_HEIGHT - 100;
    square1.Width = 100;
    square1.Height = 100;
    this.GameObjects.push(square1);

    let rectangle = new Quadrilateral(this);
    rectangle.Width = 200;
    rectangle.Height = 30;
    rectangle.Position.X = 400;
    rectangle.Position.Y = 170;
    this.GameObjects.push(rectangle);

    let rectangle2 = new Quadrilateral(this);
    rectangle2.Width = 30;
    rectangle2.Height = 100;
    rectangle2.Position.X = 400;
    rectangle2.Position.Y = 200;
    this.GameObjects.push(rectangle2);

    let rectangle3 = new Quadrilateral(this);
    rectangle3.Width = 400;
    rectangle3.Height = 30;
    rectangle3.Position.X = 200;
    rectangle3.Position.Y = 550;
    this.GameObjects.push(rectangle3);

    let rectangle4 = new Quadrilateral(this);
    rectangle4.Width = 150;
    rectangle4.Height = 30;
    rectangle4.Position.X = 50;
    rectangle4.Position.Y = 350;
    this.GameObjects.push(rectangle4);

    let rectangle5 = new Quadrilateral(this);
    rectangle5.Width = 150;
    rectangle5.Height = 30;
    rectangle5.Position.X = 800;
    rectangle5.Position.Y = 350;
    this.GameObjects.push(rectangle5);

    // Object Character

    let BallCharacter = new Rounded(this);
    BallCharacter.Position.X = 5;
    BallCharacter.Position.Y = 500;
    BallCharacter.Radius = 50;
    BallCharacter.sAngle = 0;
    BallCharacter.eAngle = 2;
    this.GameObjects.push(BallCharacter);

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
