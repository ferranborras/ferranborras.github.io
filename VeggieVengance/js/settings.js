//Variables globales NO importantes (Estas variables ofrecen nuevos valores a las variables reales)
let ConfThreads; // int que contiene la cantidad
let ConfisKeyboard; // una cadena que contiene 'mouse' o ' keyboard'
let contador;
let musica;
let cntrl;

let arrowTween;
let animConfigSettings;

let EnemTween;


let settingsState= {
    preload: preloadSettings,
    create: createSettings
};

function preloadSettings() {
    game.load.image('volver', 'assets/imgs/BotonReturn.png');
    game.load.image('fondoS', 'assets/imgs/madera.jpg');
    game.load.image('musicon', 'assets/imgs/MusicOn.png');
    game.load.image('musicoff', 'assets/imgs/MusicOff.png');
    game.load.image('flechaizq', 'assets/imgs/FlechaIzqPrueba.png');
    game.load.image('flechader', 'assets/imgs/FlechaDerPrueba.png');
    game.load.image('mouse', 'assets/imgs/BotonMouse.png');
    game.load.image('keyboard', 'assets/imgs/BotonKeyboard.png');
    game.load.text('anim', 'assets/animations/anim.json');
    game.load.image('transicion', 'assets/imgs/Transicion.png');
    game.load.image('tuerca', 'assets/imgs/tuerca.png');
    game.load.image('enemigo1', 'assets/imgs/Aguacate.png');
    game.load.image('enemigo2', 'assets/imgs/Platano.png');
    game.load.image('enemigo3', 'assets/imgs/Sandia.png');
    game.load.image('enemigo4', 'assets/imgs/Zanahoria.png');
    //game.load.image('', '');
}

function createSettings() {

    cambio = false;

    animConfigSettings = JSON.parse(game.cache.getText('anim'));

    //Fondo
    let w = game.world.width;
    let h = game.world.height;
    let fondo = game.add.tileSprite(0, 0, w*10, h*10, 'fondoS');
    fondo.anchor.setTo(0,0);
    fondo.scale.setTo(0.65,0.8);


    let style1 = {font: '40px DiloWorld', fill: '#e8cb9a'};
    let style2 = {font: '60px DiloWorld', fill: '#e8cb9a'};

    let tuerca = game.add.image(game.world.width/2-100, 70,"tuerca");
    tuerca.scale.setTo(0.2);
    tuerca.anchor.setTo(0.5,0.5);

    let tittleS = game.add.text(game.world.width/2, 70,"Settings", style2);
    tittleS.anchor.setTo(0.5, 0.5);

    //texto
    let choose1 = game.add.text(game.world.width/2, 200,"Choose the number of \nthreads to play with:", style1);
    choose1.anchor.setTo(0.5, 0.5);

    let enem1 = game.add.image(200, -200,"enemigo1");
    enem1.scale.setTo(0.3);
    enem1.anchor.setTo(0.5, 0.5);
    setTimeout(function(){FallEnemies(enem1);},600);

    let enem2 = game.add.image(400, -200,"enemigo2");
    enem2.scale.setTo(0.3);
    enem2.anchor.setTo(0.5, 0.5);
    setTimeout(function(){FallEnemies(enem2);},1800);

    let enem3 = game.add.image(600, -200,"enemigo3");
    enem3.scale.setTo(0.3);
    enem3.anchor.setTo(0.5, 0.5);
    FallEnemies(enem3);

    let enem4 = game.add.image(800, -200,"enemigo4");
    enem4.scale.setTo(0.3);
    enem4.anchor.setTo(0.5, 0.5);
    setTimeout(function(){FallEnemies(enem4);},1200);

//-----------------------------------------------------------------
    //Cambio threads

    //contador de threads
    ConfThreads = threads;
    let x1 = game.world.width/2;
    let y1 = game.world.height/2 -50;
    contador = game.add.text(x1, y1, ConfThreads +1, style1);
    contador.anchor.setTo(0.5,0.5);

    //flecha izquierda
    let x2 = game.world.width/2 -70;
    let y2 = game.world.height/2 -50;
    let flechaIzq = game.add.button(x2, y2, 'flechaizq', restarLinea);
    flechaIzq.anchor.setTo(0.5,0.5);
    flechaIzq.scale.setTo(0.1);

    //flecha izquierda
    let x3 = game.world.width/2 +70;
    let y3 = game.world.height/2 -50;
    let flechaDer = game.add.button(x3, y3, 'flechader', sumarLinea);
    flechaDer.anchor.setTo(0.5,0.5);
    flechaDer.scale.setTo(0.1);

//--------------------------------------------------------------------------


    // musica
    let x4 = game.world.width/2-200;
    let y4 = game.world.height/2+70;
    if(playMusic) {
        musica = game.add.button(x4, y4, 'musicon', CambioMusica);
    }
    else {
        musica = game.add.button(x4, y4, 'musicoff', CambioMusica);
    }
    musica.anchor.setTo(0.5,0.5);
    musica.scale.setTo(0.3);
    musica.angle = 13.06;
    

    // isKeyboard
    ConfisKeyboard = isKeyboard;
    let x5 = game.world.width/2+200;
    let y5 = game.world.height/2 +70;
    if(ConfisKeyboard){
        cntrl = game.add.button(x5, y5, 'keyboard', CambioisKeyboard);
    }
    else{
        cntrl = game.add.button(x5, y5, 'mouse', CambioisKeyboard);
    }
    cntrl.anchor.setTo(0.5,0.5);
    cntrl.scale.setTo(0.3);
    cntrl.angle = 13.06;


    //BotonSalida
    let posx1 = game.world.width/2;
    let posy1 = game.world.height/2 +250;
    let ExitButton = game.add.button(posx1, posy1, 'volver', onExitButtonPressed);
    ExitButton.anchor.setTo(0.5,0.5);  //Establece el punto pibote de la imagen en el medio para que no sea el vértice izquierdo-superior
    ExitButton.scale.setTo(0.3);
    ExitButton.angle = 13.06;

    //Transicion Oculta
    transicion = game.add.image(0, 0, 'transicion');
    transicion.anchor.setTo(1,0);

    //Transicion Inicio
    transicionIN = game.add.image(0, 0, 'transicion');
    transicionIN.anchor.setTo(0,0);
    TransitionIN(transicionIN);

}

function restarLinea(){
    if(ConfThreads>2){
        animArrows(this);
        ConfThreads--;
        contador.text = ConfThreads +1;
    }
}

function sumarLinea(){
    if(ConfThreads<8){
        animArrows(this);
        ConfThreads++;
        contador.text = ConfThreads +1;
    }
}

function animArrows(button) {
    buttonsSound.play();
    arrowTween = game.add.tween(button.scale)
        .to({x: animConfigSettings.arrowsClick[0].x,
            y: animConfigSettings.arrowsClick[0].y},
            100, Phaser.Easing.Linear.None)
        .to({x: animConfigSettings.arrowsClick[1].x,
            y: animConfigSettings.arrowsClick[1].y},
            100, Phaser.Easing.Linear.None);
    arrowTween.start();
}

function CambioMusica(){
    animButtons(this);
    if(playMusic){
        this.loadTexture('musicoff');
        //playingInit = true;
        //console.log("dentro");
        initMusic.pause();
    }
    else {
        this.loadTexture('musicon');
        //playingInit = false;
        initMusic.resume();
    }
    playMusic = !playMusic;
}

function CambioisKeyboard(){ // cuando se haga bien hay que actualizar la variable confisKeyboard
    //https://newdocs.phaser.io/docs/3.55.2/Phaser.Sound.Events
    animButtons(this);
    if(ConfisKeyboard){
        this.loadTexture('mouse');
        ConfisKeyboard = false;
    }
    else{
        this.loadTexture('keyboard');
        ConfisKeyboard = true;
    }
}

function onExitButtonPressed(){
    animButtons(this);
    if(cambio == false){
        cambio = true;
        Transition(transicion);
        threads = ConfThreads;
        isKeyboard = ConfisKeyboard;
        game.time.events.add(600, function() { game.state.start("init"); }, this);
    }
}

function FallEnemies(enem){
    EnemTween = game.add.tween(enem)
        .to({x: enem.position.x,
            y: animConfigSettings.FallEnemy[0].y,
            rotation: 10},
            3000, Phaser.Easing.Linear.None)
        .to({x: enem.position.x,
            y: animConfigSettings.FallEnemy[0].y,
            alpha: animConfigSettings.FallEnemy[0].alpha},
            100, Phaser.Easing.Linear.None)
        .to({x: enem.position.x,
            y: animConfigSettings.FallEnemy[1].y},
            1000, Phaser.Easing.Linear.None)
        .to({x: enem.position.x,
            y: animConfigSettings.FallEnemy[1].y,
            alpha: animConfigSettings.FallEnemy[1].alpha},
            100, Phaser.Easing.Linear.None)
    EnemTween.start();
    EnemTween.loop();
}