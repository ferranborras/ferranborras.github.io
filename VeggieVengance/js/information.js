
let informationState= {
    preload: preloadInformation,
    create: createInformation
};

function preloadInformation() {
    game.load.image('volver', 'assets/imgs/BotonReturn.png');
    game.load.image('fondoS', 'assets/imgs/madera.jpg');
    game.load.text('anim', 'assets/animations/anim.json');
    game.load.image('transicion', 'assets/imgs/Transicion.png');
    game.load.image('enemigo3', 'assets/imgs/Sandia.png');
    game.load.image('enemigo1', 'assets/imgs/Aguacate.png');
    //game.load.image('', '');
}

function createInformation() {

    cambio = false;

    //Fondo
    let w = game.world.width;
    let h = game.world.height;
    let fondo = game.add.tileSprite(0, 0, w*10, h*10, 'fondoS');
    fondo.anchor.setTo(0,0);
    fondo.scale.setTo(0.65,0.8);

    //Instrucciones
    let styleInst = {font: '20px Talk Comic', fill: '#e8cb9a'};

    game.add.text(40,40, "All 3 parts of the game have 3 levels, and the difficulty increases after each \none. The goal of the game in parts 'A' and 'B' is to kill all the enemies that are \ngoing down the threads avoiding our lives from reaching 0.",styleInst);
    game.add.text(40,130, "The lives will decrease if any enemy reaches the thread end, and it's possible \nto increase the lives amount by collecting health items (hearts).",styleInst);
    game.add.text(40,190, "From part 'B', enemies can switch threads randomly increasing the game \ndifficulty.",styleInst);
    game.add.text(40,250, "The goal in part 'C' is to decrease the final boss' lives to 0 in the 3 levels of \ndifficulty. After each level, the lives amount decreases but increases his \nattack and movement velocity. The enemies of this part won't stop \nspawning until the final boss is defeated.",styleInst);
    game.add.text(40,356, "The goal of the game is to complete it in the shortest possible time. On the \nfinal screen, a hall of fame shows up, which it's possible to enter if the \ntimestamp is less than the ones in there.",styleInst);
    game.add.text(40,438, "In the main menu there is access to the store. All the purchasable power ups \ncan be used only in part 'C'.",styleInst);
    game.add.text(40,500, "All power ups have a small description in the store. You can earn money by \nplaying and killing enemies (score).",styleInst);

    //Decoración
    let enem1 = game.add.image(180,630, 'enemigo3');
    enem1.anchor.setTo(0.5,0.5);
    enem1.scale.setTo(0.35);

    let enem2 = game.add.image(game.world.width -180,630, 'enemigo1');
    enem2.anchor.setTo(0.5,0.5);
    enem2.scale.setTo(0.35);


    //BotonSalida
    let posx1 = game.world.width/2;
    let posy1 = game.world.height/2 +270;
    let ExitButton = game.add.button(posx1, posy1, 'volver', volverInformation);
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

function volverInformation(){
    animButtons(this);
    if(cambio==false){
        cambio = true;
        Transition(transicion);
        game.time.events.add(600, function() { game.state.start("init"); }, this);
    }
}