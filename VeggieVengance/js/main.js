const GAME_STAGE_WIDTH = 1024;
const GAME_STAGE_HEIGHT = 720;

//variables globales importantes

let threads; // int
let isKeyboard; //string
let GamePart; //Para saber qué parte del juego se está jugando

let playingInit; // boolean
let playMusic; // boolean
let firstTime; //Primera entrada en init


let money;
let CLimpiar;
let CDisminuir;
let CCongelar;
let CBonusD;
let CBonusV;
let cortacesped1;

let cambio;

let game = new Phaser.Game(GAME_STAGE_WIDTH, GAME_STAGE_HEIGHT, Phaser.CANVAS, 'gamestage');

window.onload = StartGame;

let wfConfig = {
    active: function () {
        StartGame();
    },

    google: {
        families: ['Rammetto One']
    },

    custom: {
        families: ['FerrumExtracondensed', 'DiloWorld', 'Talk Comic'],
        urls: ["https://fontlibrary.org/face/ferrum"]
    }
};


WebFont.load(wfConfig);

function StartGame() {


    //inicialización de variables
    threads = 5;
    isKeyboard = true;
    playingInit = false;
    playMusic = false;
    firstTime = true;

    money = 0;
    CLimpiar = 0;
    CDisminuir = 0;
    CCongelar = 0;
    CBonusD = false;
    CBonusV = false;
    cortacesped1 = true;
    cambio = false;

    game.state.add('init', initState);
    game.state.add('parteA', parteAState);
    game.state.add('parteB', parteBState);
    game.state.add('parteC', parteCState);
    game.state.add('endgame', endState);
    game.state.add('settings', settingsState);
    game.state.add('store', storeState);
    game.state.add('information', informationState);

    game.state.start('init');
}