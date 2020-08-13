class GameTime {
    DeltaT;
    PreviousTimeUpdate;

    UpdateTime() {
        this.DeltaT = moment().valueOf() - this.PreviousTimeUpdate;
        this.PreviousTimeUpdate = moment().valueOf();
    }
}