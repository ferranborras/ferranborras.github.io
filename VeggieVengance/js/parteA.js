
//El valor de las constantes peude definirse fuera, el de las variables no
const HUD_HEIGHT = 20;
const SCARECROW_Y = 555;
const SCENE_WIDTH = 708.4;
const OFFSET_THREADS = 90;
const SCARECROW_VELOCITY = 1500;
const XY_RELATION_GROUND = 0.2358;
const XY_RELATION_THREADS = 1.732;
//const SoundsLawnmower = 2000;

const variacionPX = 27;//23
const variacionPY = 50;//50

let scarecrow;
let cursors;
let bgImage;
let bloodScreen;
let scPosition;
let inputEnabled;
let offsetHeight;

let CountBulletSounds;

let afterShoot;
let afterMove;

// audios
let enemiesSnd = [];
let shootLawnmowerSnd = [];
let killEnemySnd;
let enemyDownSnd;
let rightSnd;
let leftSnd;
let healthSnd;

let sceneWidth;
let offsetThreads;
let level;
var score;
const NUM_LEVELS = 3;
const TIMER = 0.1*Phaser.Timer.SECOND;

let lifeText;
let scoreText;
let levelText;
let partText;
let ChangeLevelText;
var victory; // 0 false, 1 true, -1 unespecified

let activado; //Para que solo pueda entrar a la función de subir nivel 1 vez por nivel

let listaEnemigos;

let bloodTween;

//Shoot
let fireButton;
let bullets;
const BULLET_OFFSET_Y = 10;
const BULLETS_GROUP_SIZE = 30;
const BULLETS_VELOCITY_Y = 870;
const BULLETS_VELOCITY_X = 500;

//Enemies
let enemies1;
let enemies2;
let enemies3;
let enemies4;
let blood;
let EnemyProbability;
let EnemyVelocityX;
let EnemyVelocityY;
let LEVEL_ENEMY_VELOCITY_X;
const ENEMIES_GROUP_SIZE = 20;
const LEVEL_ENEMY_PROBABILITY =[0.2, 0.4, 0.6];
const LEVEL_ENEMY_VELOCITY_RELATION = 1.74; //velocidad en Y solo es LEVEL_ENEMY_VELOCITY_X_PARTE_A * LEVEL_ENEMY_VELOCITY_RELATION
let EnemyOffset;
const CANT_ENEMIGOS = [20, 30, 40];
let enemigosCreados; //Contamos cuántos enemigos hemos creado para que no se creen más de los que debe de haber por cada nivel
let enemigosEliminados; //Contamos la cantidad de enemigos que hemos eliminado o han chocado con la parte inferior para saber cuando pasar de nivel

//Healthy item
const HEALTH_PROBABILITY =[0.5, 0.3, 0.1];
const HEALTH_GROUP_SIZE = 10;
let healthItems;
let takeHealth;


//Colisionadores inferiores
let colisionadores; // array
let coli0, coli1, coli2, coli3, coli4, coli5, coli6, coli7, coli8, coli9; //colisionadores opcionales
let offsetCollisions;

let timeElapsed;//Tiempo total desde que se ha abierto el juego
let timeAux;
let lastTime; //Tiempo que se ha tardado en acceder a la pantalla de juego
let timeText;
var timeFormat;

//comprobaciones
let square;

let parteAState = {
    preload: preloadParteA,
    create: createParteA,
    update: updateParteA
};

function preloadParteA() {
    switch (threads) {
        case 2:
            game.load.image('bgimage', 'assets/imgs/3Carriles.png');
            break;
        case 3:
            game.load.image('bgimage', 'assets/imgs/4Carriles.png');
            break;
        case 4:
            game.load.image('bgimage', 'assets/imgs/5Carriles.png');
            break;
        case 5:
            game.load.image('bgimage', 'assets/imgs/6Carriles.png');
            break;
        case 6:
            game.load.image('bgimage', 'assets/imgs/7Carriles.png');
            break;
        case 7:
            game.load.image('bgimage', 'assets/imgs/8Carriles.png');
            break;
        case 8:
            game.load.image('bgimage', 'assets/imgs/9Carriles.png');
            break;
    }
    game.load.image('scarecrow', 'assets/imgs/scarecrow.png');
    game.load.image('blanco', 'assets/imgs/Blanco.png');
    game.load.spritesheet('vida', 'assets/animations/vida.png',512,512);
    game.load.spritesheet('TakeLife', 'assets/animations/TakeLife.png',512,512);
    game.load.spritesheet('enemigo1', 'assets/animations/enemigos/aguacate.png',304,379);
    game.load.spritesheet('enemigo2', 'assets/animations/enemigos/platano.png',372,517);
    game.load.spritesheet('enemigo3', 'assets/animations/enemigos/sandia.png',418,382);
    game.load.spritesheet('enemigo4', 'assets/animations/enemigos/zanahoria.png',352,501);
    game.load.spritesheet('blood', 'assets/animations/enemigos/blood.png',304,304);
    game.load.spritesheet('espanta', 'assets/animations/scarecrow.png',585,824);
    if(cortacesped1){
        game.load.image('cortacesped1', 'assets/imgs/CortacespedAmarillo.png');
    }
    else{
        game.load.image('cortacesped1', 'assets/imgs/CortacespedRojo.png');
    }
    game.load.image('transicion', 'assets/imgs/Transicion.png');
    game.load.image('PVida', 'assets/imgs/PVida.png');

    //comprobaciones
    game.load.image('white_sq', 'assets/imgs/Solid_white.png');

    game.load.image('bloodScreen', 'assets/imgs/bloodScreen.png');


    // audios
    game.load.audio('enemy1', 'assets/Audios/aparicionEnemigos/Enemigo1.wav');
    game.load.audio('enemy2', 'assets/Audios/aparicionEnemigos/Enemigo2.wav');
    game.load.audio('enemy3', 'assets/Audios/aparicionEnemigos/Enemigo3.wav');
    game.load.audio('enemy4', 'assets/Audios/aparicionEnemigos/Enemigo4.wav');
    game.load.audio('enemy5', 'assets/Audios/aparicionEnemigos/Enemigo5.wav');
    game.load.audio('enemy6', 'assets/Audios/aparicionEnemigos/Enemigo6.wav');
    game.load.audio('enemy7', 'assets/Audios/aparicionEnemigos/Enemigo7.wav');
    game.load.audio('enemy8', 'assets/Audios/aparicionEnemigos/Enemigo8.wav');
    game.load.audio('enemy9', 'assets/Audios/aparicionEnemigos/Enemigo9.wav');
    game.load.audio('enemy10', 'assets/Audios/aparicionEnemigos/Enemigo10.wav');
    game.load.audio('enemy11', 'assets/Audios/aparicionEnemigos/Enemigo11.wav');
    game.load.audio('enemy12', 'assets/Audios/aparicionEnemigos/Enemigo12.wav');
    game.load.audio('enemy13', 'assets/Audios/aparicionEnemigos/Enemigo13.wav');

    game.load.audio('lawnmower', 'assets/Audios/DisparoCortacesped.wav');
    game.load.audio('killEnemy', 'assets/Audios/CortarEnemigo.wav');
    game.load.audio('enemyDown', 'assets/Audios/EnemigoLlega.wav');
    game.load.audio('right', 'assets/Audios/MovimientoPersonajeDerecha.wav');
    game.load.audio('left', 'assets/Audios/MovimientoPersonajeIzquierda.wav');
    game.load.audio('health', 'assets/Audios/Vida.wav');

    game.load.text('anim', 'assets/animations/anim.json');
}

function createSoundsA() {
    let enemySnd;
    afterShoot = false;
    afterMove = false;
    for (let i = 1; i <= 13; i++) {
        enemySnd = game.add.audio('enemy' + i);
        enemySnd.volume = 0.2;
        enemiesSnd.push(enemySnd);
    }
    //for(let i = 0; i<SoundsLawnmower; i++){
    //    shootLawnmowerSnd[i] = game.add.audio('lawnmower');
    //}
    killEnemySnd = game.add.audio('killEnemy');
    enemyDownSnd = game.add.audio('enemyDown');
    enemyDownSnd.volume = 2;
    rightSnd = game.add.audio('right');
    rightSnd.volume = 5;
    leftSnd = game.add.audio('left');
    healthSnd = game.add.audio('health');
}

function createParteA() {
    animConfig = JSON.parse(game.cache.getText('anim'));
    listaEnemigos = [];
    //shootLawnmowerSnd = [];
    CountBulletSounds = -1;
    scPosition = Math.round(threads/2);
    inputEnabled = true;
    level=1;
    life = 5;
    score = 0;
    colisionadores = [coli0, coli1, coli2, coli3, coli4, coli5, coli6, coli7, coli8, coli9]; // metemos los colisionadores en el array
    GamePart = "A"; //IMPORTANTE CAMBIAR PARA CADA PARTE
    nivelAnterior = "A";
    timeElapsed = 0;
    enemigosCreados = 0;
    enemigosEliminados = 0;
    activado = true;
    lastTime = game.time.totalElapsedSeconds();
    victory = -1;

    LEVEL_ENEMY_VELOCITY_X = [50, 55, 60];

    if (threads <= 3) {
        sceneWidth = SCENE_WIDTH-180;
        offsetThreads = OFFSET_THREADS;
        EnemyOffset = 615;
        offsetCollisions = OFFSET_THREADS;
        offsetHeight = 20;
    }
    else {
        sceneWidth = SCENE_WIDTH;
        offsetThreads = 0;
        EnemyOffset = SCENE_WIDTH;
        offsetCollisions = 0;
        offsetHeight = 0;
    }
    let w = game.world.width;
    let h = game.world.height;

    bgImage = game.add.tileSprite(0, 0, w*10, h*10, 'bgimage');
    bgImage.anchor.setTo(0, 0);
    bgImage.scale.setTo(0.96, 0.955);

    //for (let i = 0; i <= threads; i++) {
    //    square = game.add.sprite(0,
    //                             game.world.height, 'white_sq');
    //    square.anchor.setTo(0, 1);
    //    square.scale.setTo(1/240*(offsetThreads+sceneWidth/threads*i), 
    //                       1/240*((threads-i)*sceneWidth/threads*XY_RELATION_GROUND+offsetHeight));
    //}
    //square.scale.setTo(1/240*tamaño, 1/240*tamaño);

    createSoundsA();
    createKeyControls();
    createBullets(BULLETS_GROUP_SIZE);
    createEnemies(ENEMIES_GROUP_SIZE);
    collisions();
    createHealthItems(HEALTH_GROUP_SIZE);
    createScarecrow();
    createHUD();

    createLifeBar();
    updateLifeBar(life);

    bloodScreen = game.add.tileSprite(0, 0, w*10, h*10, 'bloodScreen');
    bloodScreen.anchor.setTo(0, 0);
    bloodScreen.scale.setTo(1.6, 1.75);
    bloodScreen.alpha = 0;

    //Transicion Inicio
    transicionIN = game.add.image(0, 0, 'transicion');
    transicionIN.anchor.setTo(0,0);
    setTimeout(function() {TransitionIN(transicionIN);}, 100);

}

function createHUD() {
    let lifeX = 5;
    let scoreX = game.world.width / 2;
    let levelX = game.world.width - 5;
    let allY = game.world.height - 25;
    let styleHUD = {fontSize: '18px', fill: '#FFFFFF'};
    lifeText = game.add.text(lifeX,allY,'Lives: '+life+'/40', styleHUD); //Texto de la vida
    scoreText = game.add.text(scoreX,allY,'Score: '+score,styleHUD); //Texto de la puntuación
    scoreText.anchor.setTo(0.5, 0);
    levelText = game.add.text(levelX,allY,'Level: '+level,styleHUD); //Texto del nivel
    levelText.anchor.setTo(1, 0);
    partText = game.add.text(levelX,allY-20,'Part: '+GamePart,styleHUD); //Texto de la parte del juego
    partText.anchor.setTo(1, 0);
    timeText = game.add.text(lifeX,allY-20,'Time: '+timeElapsed,styleHUD); //Texto del tiempo de juego

    //Texto para cambiar el nivel
    let changeX = 500;
    let changeY = game.world.height /2;
    let styleChange = {fontSize: '68px', fill: '#FFFFFF'};
    ChangeLevelText = game.add.text(changeX, changeY,'', styleChange);
    ChangeLevelText.anchor.setTo(0.5, 0.5);
}

//Objetos de vida
function createHealthItems(number){
    healthItems = game.add.group();
    healthItems.enableBody = true;
    healthItems.createMultiple(number, 'vida');
    healthItems.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
    healthItems.callAll('scale.setTo', 'scale', 0.03);

    takeHealth = game.add.group();
    takeHealth.createMultiple(number, 'TakeLife');
    takeHealth.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
    takeHealth.callAll('scale.setTo', 'scale', 0.1);
}3

function collisions(){
    //let distBranches = SCARECROW_Y/(threads+2);
    for(let i = 0; i<= threads; i++){
        let x = Math.round(sceneWidth/threads)*i+offsetCollisions+variacionPX;
        let y = x*XY_RELATION_GROUND+SCARECROW_Y-variacionPY;
        //colisionadores[i] = game.add.sprite(x+(distBranches)/XY_RELATION_THREADS, y-distBranches, 'blanco');
        colisionadores[i] = game.add.sprite(x, y, 'blanco');
        colisionadores[i].anchor.setTo(0.5, 0.5);
        colisionadores[i].scale.setTo(0.1, 0.05);
        game.physics.arcade.enable(colisionadores[i]);
        //colisionadores[i].enableBody = true;
    }
}

//Creacion de enemigos
function createEnemies(number) {
    //Enemigo1
    enemies1 = game.add.group();
    enemies1.enableBody = true;
    enemies1.createMultiple(number, 'enemigo1');
    enemies1.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
    enemies1.callAll('scale.setTo', 'scale', 0.1);

    //Enemigo2
    enemies2 = game.add.group();
    enemies2.enableBody = true;
    enemies2.createMultiple(number, 'enemigo2');
    enemies2.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
    enemies2.callAll('scale.setTo', 'scale', 0.1);

    //Enemigo3
    enemies3 = game.add.group();
    enemies3.enableBody = true;
    enemies3.createMultiple(number, 'enemigo3');
    enemies3.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
    enemies3.callAll('scale.setTo', 'scale', 0.1);

    //Enemigo4
    enemies4 = game.add.group();
    enemies4.enableBody = true;
    enemies4.createMultiple(number, 'enemigo4');
    enemies4.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
    enemies4.callAll('scale.setTo', 'scale', 0.1);

    //Sangre
    blood = game.add.group();
    blood.enableBody = true;
    blood.createMultiple(number, 'blood');
    blood.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
    blood.callAll('scale.setTo', 'scale', 0.35);


    EnemyProbability = LEVEL_ENEMY_PROBABILITY[level-1];
    EnemyVelocityX = LEVEL_ENEMY_VELOCITY_X[level-1];
    EnemyVelocityY = LEVEL_ENEMY_VELOCITY_X[level-1]*LEVEL_ENEMY_VELOCITY_RELATION;
    game.time.events.loop(TIMER, activateEnemy, this);

}

function activateEnemy() {
    if (Math.random() <EnemyProbability && enemigosCreados<CANT_ENEMIGOS[level-1]) {
        let tipoEnemigo = Math.floor(Math.random()*4);
        let enemy;
        switch (tipoEnemigo) {
            case 0:
                enemy = enemies1.getFirstExists(false);
                break;
            case 1:
                enemy = enemies2.getFirstExists(false);
                break;
            case 2:
                enemy = enemies3.getFirstExists(false);
                break;
            case 3:
                enemy = enemies4.getFirstExists(false);
                break;
        }
        if (enemy) {
            let posicion = Math.round(Phaser.Math.between(0,threads)); // Decidimos por que hilo saldrá el enemigo
            let x = Math.round(sceneWidth/threads)*posicion + (game.world.width - EnemyOffset); //Posicion x
            let y = x*XY_RELATION_GROUND - 80;
            enemy.reset(x, y);
            enemy.animations.add('dance', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
            enemy.animations.play('dance');
            enemiesSnd[Math.floor(Math.random() * 13)].play();
            enemy.body.velocity.x = -EnemyVelocityX;
            enemy.body.velocity.y = EnemyVelocityY;
            listaEnemigos.push(enemy);
            enemigosCreados++;
        }
    }
}

function createBullets(number) { // Hay que hacer que los disparos desaparezcan en el punto especifico
    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.createMultiple(number, 'cortacesped1');
    bullets.callAll('events.onOutOfBounds.add','events.onOutOfBounds', resetBullet);
    bullets.callAll('anchor.setTo', 'anchor', 0.7, 0.5);
    bullets.callAll('scale.setTo', 'scale', 0.3);
    bullets.setAll('checkWorldBounds', true);
}

//Eliminar objetos de escena
function resetMember(item) {
    item.kill();
}

function resetBullet(item) {
    item.kill();
    if (shootLawnmowerSnd.length > 0) {
        let sndMower = shootLawnmowerSnd.shift();
        sndMower.stop();
    }
    /*
    for(let i = 0; i<SoundsLawnmower; i++){
        if(shootLawnmowerSnd[i].isPlaying){
            shootLawnmowerSnd[i].stop();
            break;
        }
    }
    */
}

function createKeyControls() {
    cursors = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

function updateParteA() {
    game.physics.arcade.overlap(colisionadores,enemies1,FinEnemigo,null,this);
    game.physics.arcade.overlap(colisionadores,enemies2,FinEnemigo,null,this);
    game.physics.arcade.overlap(colisionadores,enemies3,FinEnemigo,null,this);
    game.physics.arcade.overlap(colisionadores,enemies4,FinEnemigo,null,this);
    game.physics.arcade.overlap(colisionadores,healthItems,FinVida,null,this);
    game.physics.arcade.overlap(bullets,enemies1,KillEnemy,null,this);
    game.physics.arcade.overlap(bullets,enemies2,KillEnemy,null,this);
    game.physics.arcade.overlap(bullets,enemies3,KillEnemy,null,this);
    game.physics.arcade.overlap(bullets,enemies4,KillEnemy,null,this);
    game.physics.arcade.overlap(scarecrow,healthItems,RecogerVida,null,this);
    manageScarecrowMovements();
    manageScarecrowShots();
    updateTime();
    actualizarNivel();
}

function actualizarNivel(){
    if(enemigosEliminados>=CANT_ENEMIGOS[level-1] && level < NUM_LEVELS && life > 0 && activado == true){ //Para pasar al siguiente nivel
        while (shootLawnmowerSnd.length > 0) {
            let sndMower = shootLawnmowerSnd.shift();
            sndMower.stop();
            //shootLawnmowerSnd[i].stop();
        }
        //PONER EN GRANDE: NIVEL COMPLETADO
        ChangeLevelText.text = 'LEVEL ' + level + ' COMPLETED';
        bullets.forEach(clearStage, this);
        healthItems.forEach(clearStage, this);
        game.input.enabled = false;
        game.time.events.add(2000, continueGame, this);
        activado = false;
    }
    else if(enemigosEliminados>=CANT_ENEMIGOS[level-1] && life > 0 && activado == true){//Para pasar a la siguiente parte porque no hay más niveles en esta parte
        //for(let i = 0; i<SoundsLawnmower; i++){
        //    shootLawnmowerSnd[i].stop();
        //}

        while (shootLawnmowerSnd.length > 0) {
            let sndMower = shootLawnmowerSnd.shift();
            sndMower.stop();
        }

        //Ir a la pantalla de la parte B
        ChangeLevelText.text = 'Part ' + GamePart + ' COMPLETED';
        bullets.forEach(clearStage, this);
        healthItems.forEach(clearStage, this);
        game.input.enabled = false;
        game.time.events.add(2000, nextPart, this);
        activado = false;
    }
}

function continueGame() {
    game.input.enabled = true;
    ChangeLevelText.text = '';
    level++;
    levelText.text = 'Level: ' + level;
    EnemyProbability = LEVEL_ENEMY_PROBABILITY[level-1];
    EnemyVelocityX = LEVEL_ENEMY_VELOCITY_X[level-1];
    EnemyVelocityY = LEVEL_ENEMY_VELOCITY_X[level-1]*LEVEL_ENEMY_VELOCITY_RELATION;
    enemigosCreados = 0;
    enemigosEliminados = 0;
    activado = true;
}

function nextPart(){
    //Transicion Oculta
    transicion = game.add.image(0, 0, 'transicion');
    transicion.anchor.setTo(1,0);
    Transition(transicion);
    setTimeout(function(){game.input.enabled = true; game.state.start('parteB');},600);
}

function clearStage(item) {
    item.kill();
}

function updateTime(){
    timeElapsed = game.time.totalElapsedSeconds() - lastTime;
    timeAux = timeElapsed.toFixed(2);
    if (timeAux >= 60) {
        let elapsedSec = timeAux%60;
        elapsedSec = elapsedSec.toFixed(2);
        if (elapsedSec < 10)
            timeFormat = Math.floor(timeAux/60) + ':0' + Math.floor(elapsedSec) + ':' + Math.floor((elapsedSec-Math.floor(elapsedSec))*100);
        else
            timeFormat = Math.floor(timeAux/60) + ':' + Math.floor(elapsedSec) + ':' + Math.floor((elapsedSec-Math.floor(elapsedSec))*100);
    }
    else {
        timeFormat = timeAux;
        let decimalTime = Math.floor((timeFormat-Math.floor(timeFormat))*100);
        if (decimalTime < 10)
            timeFormat = Math.floor(timeFormat) + ':0' + decimalTime;
        else
            timeFormat = Math.floor(timeFormat) + ':' + decimalTime;
    }
    timeText.text = 'Time: ' + timeFormat;
}

function FinVida(coli, health){
    health.kill();
}

function RecogerVida(scarecrow, health){
    let Gethealth = takeHealth.getFirstExists(false);
    if(Gethealth){
        let x = health.x;
        let y = health.y;
        Gethealth.reset(x, y);
        Gethealth.animations.add('GetHealth', [0, 1, 2]);
        Gethealth.animations.play('GetHealth', 15, false, true);
    }
    health.kill();
    healthSnd.play();
    if(life<40){
        life++;
        updateLifeBar(life);
        lifeText.text = 'Lives: '+life+'/40';
    }
}

function KillEnemy(bullet, enemy){
    let sangre = blood.getFirstExists(false);
        if (sangre) {
            let x = enemy.x;
            let y = enemy.y;
            sangre.reset(x, y);
            sangre.animations.add('dieFruit', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            sangre.animations.play('dieFruit', 30, false, true);
        }
    if(Math.random()<HEALTH_PROBABILITY[level-1]){ //Probabilidad de spawnear objeto de vida
        let health = healthItems.getFirstExists(false);
        if (health) {
            let x = enemy.x;
            let y = enemy.y;
            health.reset(x, y);
            health.body.velocity.x = enemy.body.velocity.x;
            health.body.velocity.y = enemy.body.velocity.y;
            health.animations.add('palpito', [0, 1, 2], 5, true);
            health.animations.play('palpito');
        }
    }
    bullet.kill();
    enemy.kill();
    //for(let i = 0; i<SoundsLawnmower; i++){
    //    if(shootLawnmowerSnd[i].isPlaying){
    //        shootLawnmowerSnd[i].stop();
    //        break;
    //    }
    //}

    if (shootLawnmowerSnd.length > 0) {
        let sndMower = shootLawnmowerSnd.shift();
        sndMower.stop();
    }

    killEnemySnd.play();
    score= score +10;
    scoreText.text = 'Score: '+score;
    enemigosEliminados++;
}

function FinEnemigo(coli, enemy){
    bloodTween = game.add.tween(bloodScreen)
        .to({alpha: animConfig.hitMark[1].alpha}, 50, Phaser.Easing.Linear.None)
        .to({alpha: animConfig.hitMark[0].alpha}, 200, Phaser.Easing.Linear.None);
    bloodTween.start();

    enemy.kill();
    enemyDownSnd.play();
    life--;
    updateLifeBar(life);
    lifeText.text = 'Lives: '+life+'/40';
    if (life == 0) {
        game.input.enabled = false;
        //for(let i = 0; i<SoundsLawnmower; i++){
        //    shootLawnmowerSnd[i].stop();
        //}

        while (shootLawnmowerSnd.length > 0) {
            let sndMower = shootLawnmowerSnd.shift();
            sndMower.stop();
        }

        victory = 0;
        gameMusic.stop();
        game.state.start("endgame");
    }
    enemigosEliminados++;
}

function manageScarecrowMovements() {
    scarecrow.body.velocity.x = 0;
    scarecrow.body.velocity.y = 0;
    if (inputEnabled) {
        if (isKeyboard) {
            if ((cursors.left.justDown || cursors.up.justDown) && scPosition > 0) {
                scPosition--;
                inputEnabled = false;
                leftSnd.play();
                scarecrow.animations.play('moveLeft');
            }
            else if ((cursors.right.justDown || cursors.down.justDown) && scPosition < threads) {
                scPosition++;
                inputEnabled = false;
                rightSnd.play();
                scarecrow.animations.play('moveRight');
            }
        }
        else {
            if (game.input.speed.x != 0 || game.input.speed.y != 0) {
                let prevPosition = scPosition;
                let distX = Math.tan(30 * Math.PI / 180)*(game.world.height-game.input.position.y);
                
                let groundX = game.input.position.x-distX-(offsetThreads-Math.tan(30 * Math.PI / 180) * (sceneWidth * XY_RELATION_GROUND + offsetHeight));
                scPosition = Math.round(groundX * threads / (sceneWidth + Math.tan(30 * Math.PI / 180) * (sceneWidth * XY_RELATION_GROUND + offsetHeight)));
                //console.log("real sc: " + groundX * threads / (sceneWidth + Math.tan(30 * Math.PI / 180) * (sceneWidth * XY_RELATION_GROUND + offsetHeight)));

                if (scPosition < 0)
                    scPosition = 0;
                else if (scPosition > threads)
                    scPosition = threads;
                //console.log("scPosition: " + scPosition);
                inputEnabled = false;
                if (prevPosition < scPosition){
                    scarecrow.animations.play('moveRight');
                    rightSnd.play();
                }
                else if (prevPosition > scPosition){
                    leftSnd.play();
                    scarecrow.animations.play('moveLeft');
                }
            }
        }
    }

    if (scarecrow.x + SCARECROW_VELOCITY/55 <
        Math.round(sceneWidth/threads)*scPosition+offsetThreads){
        scarecrow.body.velocity.x = SCARECROW_VELOCITY;
        scarecrow.body.velocity.y = SCARECROW_VELOCITY*XY_RELATION_GROUND;
    }
    else if (scarecrow.x - SCARECROW_VELOCITY/55 >
        Math.round(sceneWidth/threads)*scPosition+offsetThreads){
        scarecrow.body.velocity.x = -SCARECROW_VELOCITY;
        scarecrow.body.velocity.y = -SCARECROW_VELOCITY*XY_RELATION_GROUND;
    }
    else {
        scarecrow.x = Math.round(sceneWidth/threads)*scPosition+offsetThreads+variacionPX;
        scarecrow.y = scarecrow.x*XY_RELATION_GROUND+SCARECROW_Y-variacionPY;
        inputEnabled = true;
        if (!afterMove){
            afterMove = true;
            setTimeout(function() {
            afterMove = false; 
            scarecrow.animations.play('scare'); }, 150);
        }
    }
}

function createScarecrow() {
    let x = (Math.round(sceneWidth/threads)+offsetThreads)*Math.round(threads/2);
    let y = game.world.height;
    scarecrow = game.add.sprite(x, y, 'espanta');
    scarecrow.anchor.setTo(0.55, 1);
    scarecrow.scale.setTo(0.1, 0.1);
    game.physics.arcade.enable(scarecrow);
    scarecrow.animations.add('scare', [0,1,2,3], 8, true);
    scarecrow.animations.add('scareShoot', [4,5,6,0], 13, false);
    scarecrow.animations.add('moveLeft', [7,8,9], 10, true);
    scarecrow.animations.add('moveRight', [10,11,12], 10, true);
    scarecrow.animations.play('scare');
}

//Controlar los disparos
function manageScarecrowShots() {
    if(victory==-1){
        if (fireButton.justDown && isKeyboard)
        fireBullets();
        else if (game.input.mousePointer.leftButton.justPressed(30) && !isKeyboard)
            fireBullets();
    }
}

//Posicionar proyectil
function fireBullets() {
    scarecrow.animations.play('scareShoot');
    let bx = Math.round(sceneWidth/threads)*scPosition+offsetCollisions;
    let by = bx*XY_RELATION_GROUND+SCARECROW_Y;
    let vy = -BULLETS_VELOCITY_Y;
    let vx = BULLETS_VELOCITY_X;
    let bulletSnd = shootBullet(bx, by, vx, vy);
    if (!afterShoot){
        afterShoot = true;
        setTimeout(function() {
        afterShoot = false; 
        scarecrow.animations.play('scare'); }, 250);
    }

}

//Crearlo y darle velocidad
function shootBullet(x, y, vx, vy) {
    CountBulletSounds ++;
    let bullet = bullets.getFirstExists(false);
    if (bullet) {
        bullet.reset(x+variacionPX, y-variacionPY);
        bullet.body.velocity.y = vy;
        bullet.body.velocity.x = vx;
        //shootLawnmowerSnd[CountBulletSounds].play();
        let sndMower = game.add.audio('lawnmower');
        sndMower.play();
        shootLawnmowerSnd.push(sndMower);
    }
    return bullet;
}