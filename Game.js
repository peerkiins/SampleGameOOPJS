class Game {

  CanvasElement;
  Context;
  Width = GAME_WIDTH;
  Height = GAME_HEIGHT;
  BackgroundColor = Colors.CornFlowerBlue;
  DeltaTimeSec;
  PrevTimeUpdate = moment().valueOf();
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

    document.addEventListener("keydown", this.onKeyDown);

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
    rectangle1.Vector.X = 650;
    rectangle1.Vector.Y = 600;
    this.GameObjects.push(rectangle1);

    let rectangle2 = new Quadrilateral(this);
    rectangle2.Width = 300;
    rectangle2.Height = 30;
    rectangle2.Vector.X = 150;
    rectangle2.Vector.Y = 650;
    this.GameObjects.push(rectangle2);

    // Object Character

    let BallCharacter = new Spheroid(this);
    BallCharacter.Vector.X = 200;
    BallCharacter.Vector.Y = 10;
    BallCharacter.Radius = 50;
    BallCharacter.IsStatic = false;
    this.GameObjects.push(BallCharacter);

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

    requestAnimationFrame(this.Draw);
  }

  Update = () => {
    this.Timeupdate();

    for (let i in this.GameObjects) {
      this.GameObjects[i].Update(this.DeltaTimeSec);
    }

    for (let i in this.GameObjects) {
      for (let j in this.GameObjects) {
        if (!this.GameObjects[i].IsStatic && this.GameObjects[i] != this.GameObjects[j] && this.GameObjects[j] != this.FPSCounter)
          this.GameObjects[i].IntersectsWith(this.GameObjects[j]);
      }
    }
  }

  Timeupdate = () => {
    var CurrentTimeStamp = moment().valueOf();
    this.DeltaTimeSec = (moment().valueOf() - this.PrevTimeUpdate) / 1000;
    this.PrevTimeUpdate = CurrentTimeStamp;
  }

  onKeyDown = (e) => {

    for (let i in this.GameObjects) {

      console.log(this);
      if (!this.GameObjects[i].IsStatic) {
        if (e.keyCode == 32) {
          if (this.GameObjects[i].IsCollided) {
            this.GameObjects[i].Velocity.Y = 10;
          }
        }
        if (e.keyCode == 65) {
          this.GameObjects[i].Velocity.X += -2;
        }
        if (e.keyCode == 68) {
          this.GameObjects[i].Velocity.X += 2;
        }
      }
    }
  }

}

