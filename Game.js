class Game {

  CanvasElement;
  Context;
  Width = GAME_WIDTH;
  Height = GAME_HEIGHT;
  BackgroundColor = Colors.CornFlowerBlue;
  GameObjects = [];
  SphereGameObjects = [];


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
    fpsCounter.Vector.X = 948;
    fpsCounter.Vector.Y = 10;
    fpsCounter.FontSize = 40;
    this.GameObjects.push(fpsCounter);

    // Object Platforms

    let rectangle1 = new Quadrilateral(this);
    rectangle1.Width = 200;
    rectangle1.Height = 30;
    rectangle1.Vector.X = 600;
    rectangle1.Vector.Y = 700;
    this.GameObjects.push(rectangle1);

    let rectangle2 = new Quadrilateral(this);
    rectangle2.Width = 300;
    rectangle2.Height = 30;
    rectangle2.Vector.X = 150;
    rectangle2.Vector.Y = 650;
    this.GameObjects.push(rectangle2);

    // Object Character

    let BallCharacter = new Rounded(this);
    BallCharacter.Vector.X = 300;
    BallCharacter.Vector.Y = 0;
    BallCharacter.Radius = 50;
    this.SphereGameObjects.push(BallCharacter);

    requestAnimationFrame(() => this.Draw());
    setInterval(() => { this.Update() }, 6.94);
  }

  ClearDraw = () => {
    this.Context.fillStyle = this.BackgroundColor;
    this.Context.fillRect(0, 0, this.Width, this.Height);
  }

  Draw = () => {
    this.ClearDraw();
    for (let i in this.GameObjects)
      this.GameObjects[i].Draw();
    for (let i in this.SphereGameObjects)
      this.SphereGameObjects[i].Draw();

    requestAnimationFrame(this.Draw);
  }

  Update = () => {
    this.DetectCollision();
    for (let i in this.GameObjects)
      this.GameObjects[i].Update();
    for (let i in this.SphereGameObjects)
      this.SphereGameObjects[i].Update();
  }

  DetectCollision = () => {
    let GameObj1;
    let GameObj2;

    for (let i = 0; i < this.SphereGameObjects.length; i++) {
      GameObj1 = this.SphereGameObjects[i];
    }
    for (let j = 0; j < this.GameObjects.length; j++) {
      GameObj2 = this.GameObjects[j];
    }
    let DistanceX = Math.abs((GameObj1.Vector.X + GameObj1.Radius / 2) - GameObj2.Vector.X + GameObj2.Width / 2);
    let DistanceY = Math.abs((GameObj1.Vector.Y + GameObj1.Radius / 2) - GameObj2.Vector.Y + GameObj2.Height / 2);

    if (DistanceX > (GameObj2.Width / 2) + GameObj1.Radius || DistanceY > (GameObj2.Height / 2) + GameObj1.Radius) {
      GameObj1.Physics.IsColliding = false;
      GameObj2.Physics.IsColliding = false;
    }
    if (DistanceX <= (GameObj2.Width / 2) + GameObj1.Radius || DistanceY <= (GameObj2.Height / 2) + GameObj1.Radius) {
      GameObj1.Physics.IsColliding = true;
      GameObj2.Physics.IsColliding = true;
    }
    console.log(GameObj1, GameObj2, GameObj1.Physics.IsColliding, GameObj2.Physics.IsColliding);
  }
}
