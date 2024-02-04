const TEXT_TUTORIAL_H = 40;
const TEXT_TUTORIAL_V = 430;
const DIST_BOTONES = 80;
const SIZE_LIFEBAR = 40;

let SettingsButton;
let StoreButton;
let InfoButton;
let ParteAButton;
let ParteBButton;
let ParteCButton;

let nivelAnterior; //Comprobaciones de tiempo y puntos por nivel

let animConfig;
let buttonTween;
let transitionTween;

let initMusic;
let buttonsSound;
let gameMusic;

let monedas;
let textocantidad;

//BooleanosBonus
let BoolBonusDinero;

let transicion;
let transicionIN;

let life;
let imgsBar;
let imgsFBar;

let initState = {
    preload: preloadInit,
    create: createInit
};

function preloadInit() {
    game.load.image('configuracion', 'assets/imgs/ConfiguracionPrueba.png');
    game.load.image('playA', 'assets/imgs/BotonPartA.png');
    game.load.image('playB', 'assets/imgs/BotonPartB.png');
    game.load.image('playC', 'assets/imgs/BotonPartC.png');
    game.load.image('fondo', 'assets/imgs/FondoInicioPrueba.png');
    game.load.image('decoracion', 'assets/imgs/Entrada2.png');
    game.load.image('cartel', 'assets/imgs/cart.png');
    game.load.image('cartel2', 'assets/imgs/cartBot.png');
    game.load.image('store', 'assets/imgs/BotonStore.png');
    game.load.image('info', 'assets/imgs/BotonInformation.png');
    game.load.image('money', 'assets/imgs/Monedas.png');
    game.load.spritesheet('vida2', 'assets/animations/vida2.png',512,512);
    game.load.image('transicion', 'assets/imgs/Transicion.png');
    game.load.image('PVida', 'assets/imgs/PVida.png');
    game.load.image('FVida', 'assets/imgs/FVida.png');
    game.load.image('Title', 'assets/imgs/Title.png');
    game.load.text('anim', 'assets/animations/anim.json');
    game.load.audio('initMusic', 'assets/Audios/MusicaInicio.mp3');
    game.load.audio('buttons', 'assets/Audios/Botones.wav');
    game.load.audio('gameSong', 'assets/Audios/MusicaPartida.mp3');
}

function createSounds() {
    initMusic = game.add.audio('initMusic');
    initMusic.loop = true;
    buttonsSound = game.add.audio('buttons');
    gameMusic = game.add.audio('gameSong');
    gameMusic.loop = true;
}

function createInit() {

    nivelAnterior = "C";

    BoolBonusDinero = false;
    cambio = false;

    //Creación del fondo
    let w = game.world.width;
    let h = game.world.height;
    let fondo = game.add.tileSprite(0, 0, w*10, h*10, 'fondo');
    fondo.anchor.setTo(0,0);
    fondo.scale.setTo(0.225,0.225);

    let title = game.add.image(game.world.width/2-50,50, 'Title');
    title.anchor.setTo(0.5, 0.5);
    title.scale.setTo(0.6);

    //Texto de las instrucciones
    let textT = 'Basic instructions:\nYou can move with the keyboard \nor the mouse \nPress the left mouse button \nor space bar to shoot \nFor more detailed information, \nenter the information section \n Enjoy';
    let styleT = {font: '20px Talk Comic', fill: '#FFFFFF'};
    let styleT2 = {font: '20px Talk Comic', fill: '#00000'};
    let tutorial2 = game.add.text(TEXT_TUTORIAL_H+10, TEXT_TUTORIAL_V-2, textT, styleT2);
    let tutorial = game.add.text(TEXT_TUTORIAL_H+6, TEXT_TUTORIAL_V, textT, styleT);

    //Boton configuración
    let posx1 = game.world.width/2+150;
    let posy1 = game.world.height/2 +150;
    SettingsButton = game.add.button(posx1, posy1, 'configuracion', buttonsConf);
    SettingsButton.anchor.setTo(0.5,0.5);  //Establece el punto pibote de la imagen para que no sea el vértice izquierdo-superior
    SettingsButton.scale.setTo(0.3);
    SettingsButton.angle = 13.06;

    //Boton tienda
    let posx5 = game.world.width/2  +150+DIST_BOTONES/2; //135
    let posy5 = game.world.height/2 +150-DIST_BOTONES;   //80
    StoreButton = game.add.button(posx5, posy5, 'store', buttonsConf);
    StoreButton.anchor.setTo(0.5,0.5);  //Establece el punto pibote de la imagen para que no sea el vértice izquierdo-superior
    StoreButton.scale.setTo(0.3);
    StoreButton.angle = 13.06;

    //Boton info
    let posx6 = game.world.width/2  +150-DIST_BOTONES/2;
    let posy6 = game.world.height/2 +150+DIST_BOTONES;
    InfoButton = game.add.button(posx6, posy6, 'info', buttonsConf);
    InfoButton.anchor.setTo(0.5,0.5);
    InfoButton.scale.setTo(0.3);
    InfoButton.angle = 13.06;

    //Boton play ParteA
    let posx2 = game.world.width/2  +150+DIST_BOTONES/2*4;
    let posy2 = game.world.height/2 +150-DIST_BOTONES*4;  
    ParteAButton = game.add.button(posx2, posy2, 'playA', buttonsConf);
    ParteAButton.anchor.setTo(0.5,0.5);  //Establece el punto pibote de la imagen para que no sea el vértice izquierdo-superior
    ParteAButton.scale.setTo(0.3);
    ParteAButton.angle = 13.06;

    //Boton play ParteB
    let posx3 = game.world.width/2  +150+DIST_BOTONES/2*3;
    let posy3 = game.world.height/2 +150-DIST_BOTONES*3;  
    ParteBButton = game.add.button(posx3, posy3, 'playB', buttonsConf);
    ParteBButton.anchor.setTo(0.5,0.5);  //Establece el punto pibote de la imagen para que no sea el vértice izquierdo-superior
    ParteBButton.scale.setTo(0.3);
    ParteBButton.angle = 13.06;

    //Boton play ParteC
    let posx4 = game.world.width/2  +150+DIST_BOTONES/2*2;
    let posy4 = game.world.height/2 +150-DIST_BOTONES*2;  
    ParteCButton = game.add.button(posx4, posy4, 'playC', buttonsConf);
    ParteCButton.anchor.setTo(0.5,0.5);  //Establece el punto pibote de la imagen para que no sea el vértice izquierdo-superior
    ParteCButton.scale.setTo(0.3);
    ParteCButton.angle = 13.06;

    //decoraciones
    let deco = game.add.image(0,0, 'decoracion');

    let cart = game.add.image(game.world.width-170,-15, 'cartel');
    cart.scale.setTo(0.1);

    let cart2 = game.add.image(270,game.world.height-50, 'cartel2');
    cart2.scale.setTo(0.6,0.35);

    //Creditos
    let poscx = game.world.width/2  -200;
    let poscy = game.world.height/2 + 340;
    let styleX = {font: '15px Arial', fill: '#FFFFFF'};
    let textC = '@Created by "Group 19": Cristian Hernandez Delgado, Ferran Borras Bolinches, Lluc Barruguer Fabregat';
    //let Credits2 = game.add.text(poscx+4, poscy-2, textC, styleT2);
    let Credits = game.add.text(poscx, poscy, textC, styleX);
    //comprobaciones (comentar)
    //let comp1 = game.add.text(20, 400, threads, styleT);
    //let comp2 = game.add.text(20, 420, isKeyboard, styleT);
    //let comp3 = game.add.text(20, 440, volume, styleT);

    //Cantidad monedas
    monedas = game.add.image(900,40,'money');
    monedas.anchor.setTo(0.5,0.5);
    monedas.scale.setTo(0.04);
    textocantidad = game.add.text(930,40, "x " + money,styleT);
    textocantidad.anchor.setTo(0,0.5);

    animConfig = JSON.parse(game.cache.getText('anim'));

    //Transicion Oculta
    transicion = game.add.image(0, 0, 'transicion');
    transicion.anchor.setTo(1,0);
    
    if(!firstTime){
        //Transicion Inicio
        transicionIN = game.add.image(0, 0, 'transicion');
        transicionIN.anchor.setTo(0,0);
        TransitionIN(transicionIN);
    }

    if(firstTime){
        createSounds();
        firstTime = false;
    }
    
    if (!playingInit && playMusic) {
        initMusic.play();
        playingInit = true;
    }
}

function buttonsConf(){
    animButtons(this);
    if(cambio == false){
        cambio = true;
        Transition(transicion);
        game.time.events.add(600, function() {
            if (this == ParteAButton)
                ParteAGame();
            else if (this == ParteBButton)
                ParteBGame();
            else if (this == ParteCButton)
                ParteCGame();
            else if(this == SettingsButton)
                onSettingsButtonPressed();
            else if(this == InfoButton)
                info();
            else
                store();
        },
        this);
    }
}

function animButtons(button) {
    buttonsSound.play();
    buttonTween = game.add.tween(button.scale)
        .to({x: animConfig.buttonClick[0].x,
            y: animConfig.buttonClick[0].y},
            100, Phaser.Easing.Linear.None)
        .to({x: animConfig.buttonClick[1].x,
            y: animConfig.buttonClick[1].y},
            100, Phaser.Easing.Linear.None);
    buttonTween.start();
}

//Funcion que se activa al pulsar el botón de configuración
function onSettingsButtonPressed(){
    game.state.start("settings");
}

//Funcion que se activa al pulsar el botón de play
function ParteAGame() {
    initMusic.stop();
    if(playMusic){
        gameMusic.play();
        gameMusic.loop = true;
    }
    playingInit = false;
    game.state.start("parteA");
}

function ParteBGame() {
    initMusic.stop();
    if(playMusic){
        gameMusic.play();
        gameMusic.loop = true;
    }
    playingInit = false;
    game.state.start("parteB");
}

function ParteCGame() {
    initMusic.stop();
    if(playMusic){
        gameMusic.play();
        gameMusic.loop = true;
    }
    playingInit = false;
    game.state.start("parteC");
}

function store(){
    game.state.start("store");
}

function Transition(trans){
    //console.log('llega');
    transitionTween = game.add.tween(trans.position)
        .to({x: animConfig.Transition[0].x,
            y: animConfig.Transition[0].y},
            600, Phaser.Easing.Linear.None)
    transitionTween.start();
}

function TransitionIN(trans){
    transitionTween = game.add.tween(trans.position)
        .to({x: animConfig.Transition[1].x,
            y: animConfig.Transition[1].y},
            600, Phaser.Easing.Linear.None)
    transitionTween.start();
}

function createLifeBar(){
    imgsBar = [];
    imgsFBar = [];
    let offset1 = 650;
    let offset2 = 650;
    let contframe = 0;

    for(let i = 0; i<SIZE_LIFEBAR; i++){
        let life2 = game.add.sprite(1000, offset1, 'vida2');
        life2.scale.setTo(0.03, 0.03);
        life2.anchor.setTo(0.5, 0.5);
        if(contframe==0){
            life2.animations.add('palpito', [0, 1, 2], 5, true);
        }
        else if(contframe==1){
            life2.animations.add('palpito', [1, 2, 0], 5, true);
        }
        else if(contframe==2){
            life2.animations.add('palpito', [2, 0, 1], 5, true);
        }
        life2.animations.play('palpito');

        offset1 = offset1 - 14;
        life2.alpha = 0;
        imgsFBar[i] = life2;

        if(contframe>1){
            contframe=0;
        }
        else{
            contframe++;
        }
    }
    /*
    for(let i = 0; i<SIZE_LIFEBAR; i++){
        let life2 = game.add.image(1001, offset1, 'FVida');
        life2.scale.setTo(0.1, 0.07);
        life2.anchor.setTo(0.5, 0.5);
        offset1 = offset1 - 10.5;
        life2.alpha = 0;
        imgsFBar[i] = life2;
    }
    for(let i = 0; i<SIZE_LIFEBAR; i++){
        let life1 = game.add.image(1000, offset2, 'PVida');
        life1.scale.setTo(0.1, 0.07);
        life1.anchor.setTo(0.5, 0.5);
        offset2 = offset2 - 10.5;
        life1.alpha = 0;
        imgsBar[i] = life1;
    }
    */
}

function updateLifeBar(lifes){
    for(let i = 0; i<SIZE_LIFEBAR; i++){
        //imgsBar[i].alpha = 0;
        imgsFBar[i].alpha = 0;
    }
    for(let i = 0; i<lifes; i++){
        //imgsBar[i].alpha = 1;
        imgsFBar[i].alpha = 1;
    }
}

function info(){
    game.state.start("information");
}

