//-------------------------------------------------
// Part 1: ASCIIanimation
//-------------------------------------------------

// Define
const Game = function (_config) {
    const TEXT_SIZE = ['7pt', '10pt', '12pt', '16pt', '24pt', '32pt'];

    this._gameConfig = Object.assign({
        isStarted: false,
        animationType: "Blank", // Blank, Custom, Exercise, Juggler, Bike, Dive
        textSize: '12pt', // 7pt, 10pt, 12pt, 16pt, 24pt, 32pt
        speed: 250, // normal: 250, turbo: 50
        elAnimationAreaId: 'text-area',
        elStartButtonId: 'start',
        elStopButtonId: 'stop',
        elAnimationSelectId: 'animation',
        elTextSizeId: 'fontsize',
        elTurbo: 'turbo',
    }, _config);

    this._animations = ANIMATIONS;
    this._timer = null;
    this._currentFrame = 0;

    this.startGame = () => {
        let frames = this._animations[this._gameConfig["animationType"]].split("=====\n");
        this.disableUI();
        this._timer = setInterval(() => {
            if (this._currentFrame === frames.length) 
				this._currentFrame = 0;
            document.getElementById(this._gameConfig.elAnimationAreaId).value = frames[this._currentFrame++];
        }, this._gameConfig.speed);
    }

    this.disableUI = () => {
        document.getElementById(this._gameConfig.elStartButtonId).disabled = true;
        document.getElementById(this._gameConfig.elStopButtonId).disabled = false;
        document.getElementById(this._gameConfig.elAnimationSelectId).disabled = true;
        document.getElementById(this._gameConfig.elTextSizeId).disabled = true;
        document.getElementById(this._gameConfig.elTurbo).disabled = true;
    }

    this.enableUI = () => {
        document.getElementById(this._gameConfig.elStartButtonId).disabled = false;
        document.getElementById(this._gameConfig.elStopButtonId).disabled = true;
        document.getElementById(this._gameConfig.elAnimationSelectId).disabled = false;
        document.getElementById(this._gameConfig.elTextSizeId).disabled = false;
        document.getElementById(this._gameConfig.elTurbo).disabled = false;
    }

    this.stopGame = () => {
        if (this._timer) {
            clearInterval(this._timer);
        }
        this.enableUI();
    }

    this.changeAnimationType = (type) => {
        if (['Blank', 'Custom', 'Exercise', 'Juggler', 'Bike', 'Dive'].indexOf(type) > -1) {
            if (this._gameConfig.animationType !== type) {
                this._currentFrame = 0;
                this._gameConfig.animationType = type;
            }

        } else {
            console.log('[Game Error] Unidentified animation type: ' + type);
        }
    }

    this.changeSpeed = (turbo) => {
        this._gameConfig.speed = !!turbo ? 50 : 250;
    }

    this.changeTextSize = (size) => {
        let idx = ['Tiny', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'].indexOf(size);
        if (idx >= 0) {
            document.getElementById(this._gameConfig.elAnimationAreaId).style.fontSize = TEXT_SIZE[idx];
        }
    }
}

// On Window ready
window.onload = () => {
    let game = new Game();

    document.getElementById('start').onclick = () => {
        game.startGame();
    }
    document.getElementById('stop').onclick = () => {
        game.stopGame();
    }
    document.getElementById('animation').onchange = (e) => {
        game.changeAnimationType(e.target.value);
    }
    document.getElementById('fontsize').onchange = (e) => {
        game.changeTextSize(e.target.value);
    }
    document.getElementById('turbo').onchange = (e) => {
        game.changeSpeed(e.target.checked);
    }
}