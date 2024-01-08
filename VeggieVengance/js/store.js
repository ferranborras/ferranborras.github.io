let imgcorta;
let Botonlimpiar;
let BotonDisminuir;
let BotonCongelar;
let Botonbonusd;
let Botonbonusv;

let contadorLimpiar;
let contadorDisminuir;
let contadorCongelar;
let contadorbonusd;
let contadorbonusv;

let preciobonusd;
let preciobonusv;

//precios
const PLimpiar = 2000;
const PDisminuir = 2000;
const PCongelar = 2000;
const PBonusDinero = 2000;
const PBonusVidas = 2000;

let storeState= {
    preload: preloadStore,
    create: createStore
};

function preloadStore() {
    game.load.image('volver', 'assets/imgs/BotonReturn.png');
    game.load.image('fondoS', 'assets/imgs/madera.jpg');
    game.load.image('congelar', 'assets/imgs/Congelar.png');
    game.load.image('limpiar', 'assets/imgs/Limpiar.png');
    game.load.image('disminuir', 'assets/imgs/Down.png');
    game.load.image('masVida', 'assets/imgs/MasVida.png');
    game.load.image('bonusDinero', 'assets/imgs/MasMonedas.png');
    game.load.image('fondoBoton', 'assets/imgs/fondoBoton.png');
    game.load.image('flechaizq', 'assets/imgs/FlechaIzqPrueba.png');
    game.load.image('flechader', 'assets/imgs/FlechaDerPrueba.png');
    game.load.image('cortacesped1', 'assets/imgs/CortacespedAmarillo.png');
    game.load.image('cortacesped2', 'assets/imgs/CortacespedRojo.png');
    game.load.image('money', 'assets/imgs/Monedas.png');
    game.load.image('transicion', 'assets/imgs/Transicion.png');
    game.load.text('anim', 'assets/animations/anim.json');
}

function createStore() {

    cambio = false;

    animConfigSettings = JSON.parse(game.cache.getText('anim'));

    //Fondo
    let w = game.world.width;
    let h = game.world.height;
    let fondo = game.add.tileSprite(0, 0, w*10, h*10, 'fondoS');
    fondo.anchor.setTo(0,0);
    fondo.scale.setTo(0.65,0.8);

    let styleT = {font: '200px Talk Comic', fill: '#e8cb9a'};
    let styleW = {font: '200px Talk Comic', fill: 'white'};
    let styleB = {font: '200px Talk Comic', fill: 'black'};
    let desc = game.add.text(60, 50, "All avaliable power ups are exclusive from part C", styleT);
    desc.anchor.setTo(0,0.5);
    desc.scale.setTo(0.1);

//-----------------------------------------------------------------
    //Habilidad limpiar todo el escenario

    //Imagen
    let x2 = 100;
    let y2 = 150;
    let limpiar = game.add.image(x2,y2,'limpiar');
    limpiar.alpha = 0.5;
    limpiar.anchor.setTo(0.5,0.5);
    limpiar.scale.setTo(0.8);

    //Botón de la habilidad
    let x3 = 100;
    let y3 = 220;
    Botonlimpiar = game.add.button(x3, y3, 'fondoBoton', ComprarHabilidad);
    Botonlimpiar.anchor.setTo(0.5,0.5);
    Botonlimpiar.scale.setTo(0.05);

    //Precio
    let precioLimpiar = game.add.text(x3,y3, PLimpiar ,styleW);
    precioLimpiar.anchor.setTo(0.5,0.5);
    precioLimpiar.scale.setTo(0.1);

    //Descripción
    let descripcionLimpiar = game.add.text(160,y2 +20, "This power up deletes all \n basic enemies on screen \n right after use \nPress 'A' to active",styleT);
    descripcionLimpiar.anchor.setTo(0,0.5);
    descripcionLimpiar.scale.setTo(0.1);

    //Contador
    contadorLimpiar = game.add.text(x2,y2 +10, CLimpiar,styleB);
    contadorLimpiar.anchor.setTo(0.5,0.5);
    contadorLimpiar.scale.setTo(0.4);


//--------------------------------------------------------------------------
//-----------------------------------------------------------------
    //Habilidad disminuir velocidad enemigos

    //Imagen
    let x4 = 600;
    let y4 = 150;
    let disminuir = game.add.image(x4,y4,'disminuir');
    disminuir.alpha = 0.5;
    disminuir.anchor.setTo(0.5,0.5);
    disminuir.scale.setTo(0.8);

    //Botón de la habilidad
    let x5 = 600;
    let y5 = 220;
    BotonDisminuir = game.add.button(x5, y5, 'fondoBoton', ComprarHabilidad);
    BotonDisminuir.anchor.setTo(0.5,0.5);
    BotonDisminuir.scale.setTo(0.05);

    //Precio
    let precioDisminuir = game.add.text(x5,y5, PDisminuir,styleW);
    precioDisminuir.anchor.setTo(0.5,0.5);
    precioDisminuir.scale.setTo(0.1);

    //Descripción
    let descripcionDisminuir = game.add.text(660,y4 +20, "This power up decreases \n new basic enemies speed \n during 5 seconds \nPress 'S' to active",styleT);
    descripcionDisminuir.anchor.setTo(0,0.5);
    descripcionDisminuir.scale.setTo(0.1);

    //Contador
    contadorDisminuir = game.add.text(x4,y4 +10, CDisminuir,styleB);
    contadorDisminuir.anchor.setTo(0.5,0.5);
    contadorDisminuir.scale.setTo(0.4);

//--------------------------------------------------------------------------
//-----------------------------------------------------------------
    //Habilidad congelar boss

    //Imagen
    let x6 = 600;
    let y6 = 300;
    let congelar = game.add.image(x6,y6,'congelar');
    congelar.alpha = 0.5;
    congelar.anchor.setTo(0.5,0.5);
    congelar.scale.setTo(0.8);

    //Botón de la habilidad
    let x7 = 600;
    let y7 = 370;
    BotonCongelar = game.add.button(x7, y7, 'fondoBoton', ComprarHabilidad);
    BotonCongelar.anchor.setTo(0.5,0.5);
    BotonCongelar.scale.setTo(0.05);

    //Precio
    let precioCongelar = game.add.text(x7,y7, PCongelar,styleW);
    precioCongelar.anchor.setTo(0.5,0.5);
    precioCongelar.scale.setTo(0.1);

    //Descripción
    let descripcionCongelar = game.add.text(660,y6 +20, "Freeze the final boss \n during 2 seconds \nPress 'D' to active",styleT);
    descripcionCongelar.anchor.setTo(0,0.5);
    descripcionCongelar.scale.setTo(0.1);

    //Contador
    contadorCongelar = game.add.text(x6,y6 +10, CCongelar,styleB);
    contadorCongelar.anchor.setTo(0.5,0.5);
    contadorCongelar.scale.setTo(0.4);


//--------------------------------------------------------------------------
//-----------------------------------------------------------------
    //Bonus de dinero (puntos)

    //Imagen
    let x8 = 100;
    let y8 = 300;
    let bonusd = game.add.image(x8,y8,'bonusDinero');
    //bonusd.alpha = 0.5;
    bonusd.anchor.setTo(0.5,0.5);
    bonusd.scale.setTo(0.8);

    //Botón de la habilidad
    let x9 = 100;
    let y9 = 370;
    Botonbonusd = game.add.button(x9, y9, 'fondoBoton', ComprarHabilidad);
    Botonbonusd.anchor.setTo(0.5,0.5);
    Botonbonusd.scale.setTo(0.05);

    //Precio
    if(CBonusD){
        preciobonusd = game.add.text(x9,y9, "Sold",styleW);
    }
    else{
        preciobonusd = game.add.text(x9,y9, PBonusDinero,styleW);
    }
    preciobonusd.anchor.setTo(0.5,0.5);
    preciobonusd.scale.setTo(0.1);

    //Descripción
    let descripcionbonusd = game.add.text(160,y8 +20, "Multiply x5 all obtained \n points during the next \n game",styleT);
    descripcionbonusd.anchor.setTo(0,0.5);
    descripcionbonusd.scale.setTo(0.1);

//--------------------------------------------------------------------------
//-----------------------------------------------------------------
    //Bonus de vida

    //Imagen
    let x10 = 100;
    let y10 = 450;
    let bonusv = game.add.image(x10,y10,'masVida');
    //bonusv.alpha = 0.5;
    bonusv.anchor.setTo(0.5,0.5);
    bonusv.scale.setTo(0.8);

    //Botón de la habilidad
    let x11 = 100;
    let y11 = 520;
    Botonbonusv = game.add.button(x11, y11, 'fondoBoton', ComprarHabilidad);
    Botonbonusv.anchor.setTo(0.5,0.5);
    Botonbonusv.scale.setTo(0.05);

    //Precio
    if(CBonusV){
        preciobonusv = game.add.text(x11,y11, "Sold",styleW);
    }
    else{
        preciobonusv = game.add.text(x11,y11, PBonusVidas,styleW);
    }
    preciobonusv.anchor.setTo(0.5,0.5);
    preciobonusv.scale.setTo(0.1);

    //Descripción
    let descripcionbonusv = game.add.text(160,y10 +20, "Get +10 more lives at \n the start of the next \n game",styleT);
    descripcionbonusv.anchor.setTo(0,0.5);
    descripcionbonusv.scale.setTo(0.1);

//--------------------------------------------------------------------------
//-----------------------------------------------------------------
    //Elegir cortacesped

    //cortacesped
    let x12 = 775;
    let y12 = 470;
    imgcorta = game.add.image(x12, y12,'cortacesped1');
    cortacesped1 = true;
    imgcorta.anchor.setTo(0.5,0.5);
    imgcorta.scale.setTo(0.8);

    //cambio izquierda
    let x13 = 600;
    let y13 = 470;
    let flechaIzq = game.add.button(x13, y13, 'flechaizq', cambioCortacesped);
    flechaIzq.anchor.setTo(0.5,0.5);
    flechaIzq.scale.setTo(0.1);

    //cambio derecha
    let x14 = 950;
    let y14 = 470;
    let flechaDer = game.add.button(x14, y14, 'flechader', cambioCortacesped);
    flechaDer.anchor.setTo(0.5,0.5);
    flechaDer.scale.setTo(0.1);

//--------------------------------------------------------------------------

    //Cantidad monedas
    monedas = game.add.image(50,640,'money');
    monedas.anchor.setTo(0.5,0.5);
    monedas.scale.setTo(0.04);
    textocantidad = game.add.text(80,640, "x " + money,styleW);
    textocantidad.anchor.setTo(0,0.5);
    textocantidad.scale.setTo(0.1);

    //BotonSalida
    let posx1 = game.world.width/2;
    let posy1 = game.world.height/2 +250;
    let ExitButton = game.add.button(posx1, posy1, 'volver', volverStore);
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

function ComprarHabilidad(){
    animStore(this);
    let styleT = {font: '40px Talk Comic', fill: 'red'};
    if(this == Botonlimpiar){
        if(PLimpiar<=money){
            money = money - PLimpiar;
            CLimpiar++;
            contadorLimpiar.text = CLimpiar;
            textocantidad.text = "x " + money;
        }
        else{
            let msjerror = game.add.text(100,game.world.height/2, "You don't have enough money",styleT);
            setTimeout(function(){msjerror.kill();}, 1000);
            //console.log("entra");
        }
    }
    else if(this == BotonDisminuir){
        if(PDisminuir<=money){
            money = money - PDisminuir;
            CDisminuir++;
            contadorDisminuir.text = CDisminuir;
            textocantidad.text = "x " + money;
        }
        else{
            let msjerror = game.add.text(100,game.world.height/2, "You don't have enough money",styleT);
            setTimeout(function(){msjerror.kill();}, 1000);
            //console.log("entra");
        }
    }
    else if(this == BotonCongelar){
        if(PCongelar<=money){
            money = money - PCongelar;
            CCongelar++;
            contadorCongelar.text = CCongelar;
            textocantidad.text = "x " + money;
        }
        else{
            let msjerror = game.add.text(100,game.world.height/2, "You don't have enough money",styleT);
            setTimeout(function(){msjerror.kill();}, 1000);
            //console.log("entra");
        }

    }
    else if(this == Botonbonusd){
        if(PBonusDinero<=money && CBonusD==false){
            money = money - PBonusDinero;
            CBonusD = true;
            preciobonusd.text = "Sold";
            textocantidad.text = "x " + money;
        }
        else if(CBonusD){
            let msjerror = game.add.text(100,game.world.height/2, 'You already bought this power up',styleT);
            setTimeout(function(){msjerror.kill();}, 1000);
        }
        else{
            let msjerror = game.add.text(100,game.world.height/2, "You don't have enough money",styleT);
            setTimeout(function(){msjerror.kill();}, 1000);
            //console.log("entra");
        }
    }
    else{
        if(PBonusVidas<=money && CBonusV == false){
            money = money - PBonusVidas;
            CBonusV = true;
            preciobonusv.text = "Sold";
            textocantidad.text = "x " + money;
        }
        else if(CBonusV){
            let msjerror = game.add.text(100,game.world.height/2, 'You already bought this power up',styleT);
            setTimeout(function(){msjerror.kill();}, 1000);
        }
        else{
            let msjerror = game.add.text(100,game.world.height/2, "You don't have enough money",styleT);
            setTimeout(function(){msjerror.kill();}, 1000);
            //console.log("entra");
        }
    }
}

function cambioCortacesped(){
    animArrows(this);
    if (cortacesped1){
        imgcorta.loadTexture('cortacesped2');
        cortacesped1 = false;
        //console.log('entro');
    }
    else{
        imgcorta.loadTexture('cortacesped1');
        cortacesped1 = true;
    }
}

function volverStore(){
    animButtons(this);
    if(cambio==false){
        cambio = true;
        Transition(transicion);
        game.time.events.add(600, function() { game.state.start("init"); }, this);
    }
}


function animStore(button) {
    buttonsSound.play();
    animConfig = JSON.parse(game.cache.getText('anim'));
    buttonTween = game.add.tween(button.scale)
        .to({x: animConfig.StoreClick[0].x,
            y: animConfig.StoreClick[0].y},
            100, Phaser.Easing.Linear.None)
        .to({x: animConfig.StoreClick[1].x,
            y: animConfig.StoreClick[1].y},
            100, Phaser.Easing.Linear.None);
    buttonTween.start();
}