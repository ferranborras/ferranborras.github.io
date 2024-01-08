const XY_RELATION_BOSS = 0.12;

//Constantes de ataque Boss
const velocityBossDefenseY = 150;
const HORDE_VELOCITY_X = [80, 120, 150];
const COPIES_VELOCITY_X = [200, 300, 350];

const VIDAS_BOSS = [8, 6, 4]; // 8, 6, 4

const ENEMY_MOVEMENT_VELOCITY = [3000, 2500, 2000]; //Cuanto menor es el número, mayor es la velocidad

//let salido;

let boss;
let BossOffset;
let FinalBossLifes;
let BossLifes;
let TimeOut1;
let TimeOut2;
let TimeOut3;
let TimeOut4;
let controlesInvertidos;
let mensaje;

//Imagenes de las habilidades
let imglimpiar;
let imgdisminuir;
let imgcongelar;
let imgbonusd;
let imgbonusv;

let imgPressA;
let imgPressS;
let imgPressD;

// audios
let damageSnd;
let bossAppearSnd;
let bossVanishSnd;
let bossShootSnd;
let bossCopiesSnd;
let bossDamageSnd;

//Velocidades del enemigo inciales
let StartEnemyVelocityX;
let StartEnemyVelocityY;

let inmovible;
let Smoke;

let tiempoHastaParteC;


//Enemigo final

class FinalBoss{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.image = game.add.sprite(this.x, this.y, 'Fresa');
        this.image.anchor.setTo(1.2, 0);
        this.image.scale.setTo(0.19, 0.19);
        game.physics.arcade.enable(this.image);
        //console.log("Me has pasado:"+ this.x + this.y);
        this.image.animations.add('rest', [0], 10, true);
        this.image.animations.add('attack', [1,2], 10, true);
        this.image.animations.add('daño', [3], 10, true);
           // this.image.animations.play('damage');
        this.createDefenses();
        this.createCopies();
    }

    getImage(){
        return this.image;
    }

    createDefenses() {
        this.Defenses = game.add.group();
        this.Defenses.enableBody = true;
        this.Defenses.createMultiple(500, 'guisante');
        this.Defenses.callAll('events.onOutOfBounds.add','events.onOutOfBounds', this.changeDefense);
        this.Defenses.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
        this.Defenses.callAll('scale.setTo', 'scale', 0.5);
        this.Defenses.setAll('checkWorldBounds', true);
        //console.log("Defensas creadas");
    }

    createCopies(){
        this.Copies = game.add.group();
        this.Copies.enableBody = true;
        this.Copies.createMultiple(500, 'copies');
        this.Copies.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
        this.Copies.callAll('scale.setTo', 'scale', 0.1);
    }

    changeDefense(item){
        if(item.position.y>GAME_STAGE_HEIGHT){
            item.kill();
        }
        else{
            item.body.velocity.x = -item.body.velocity.x;
        }
    }

    moveTo(posicion){
        this.image.animations.play('rest');
        let posX = Math.round(sceneWidth/threads)*posicion+offsetThreads;
        this.image.position.x = posX+Math.tan(30 * Math.PI / 180)*SCARECROW_Y;
        this.image.position.y = posX*XY_RELATION_GROUND;
        let humo = Smoke.getFirstExists(false);
        if (humo) {
            let x = this.image.position.x
            let y = this.image.position.y
            humo.reset(x, y);
            humo.animations.add('Out', [0, 1, 2, 3, 4, 5, 6, 7, 8]);
            humo.animations.play('Out', 30, false, true);
        }
        this.x = this.image.position.x;
        this.y = this.image.position.y;
        bossAppearSnd.play();
        setTimeout(function(){boss.show();}, 100);
        TimeOut1 = setTimeout(function(){BossAttack();}, ENEMY_MOVEMENT_VELOCITY[level-1]);
    }

    show(){
        this.image.alpha = 1;
    }

    Desaparecer(){
        let humo = Smoke.getFirstExists(false);
        if (humo) {
            let x = this.image.position.x
            let y = this.image.position.y
            humo.reset(x, y);
            humo.animations.add('Out', [0, 1, 2, 3, 4, 5, 6, 7, 8]);
            humo.animations.play('Out', 30, false, true);
        }
        bossVanishSnd.play();
        this.image.alpha = 0;
        TimeOut2 = setTimeout(function(){boss.moveTo(Math.floor(Math.random()*(threads+1)));}, ENEMY_MOVEMENT_VELOCITY[level-1]);
    }

    //Ataques

    shootDefense() {
        for(let i = -200; i<=200; i= i+100){
            let defense = this.Defenses.getFirstExists(false);
            if (defense) {
                defense.reset(this.x, this.y);
                defense.body.velocity.y = velocityBossDefenseY;
                defense.body.velocity.x = i;
                bossShootSnd.play();
            }
        }
        //console.log("ShootDefense");
    }

    shootHorde(){
        for(let i = 0; i<=threads; i++){
            let defense = this.Defenses.getFirstExists(false);
            if (defense) {
                let x = Math.round(sceneWidth/threads)*i + (game.world.width - EnemyOffset); //Posicion x
                let y = x*XY_RELATION_GROUND - 80;
                defense.reset(x, y);
                defense.body.velocity.y = HORDE_VELOCITY_X[level-1]*LEVEL_ENEMY_VELOCITY_RELATION;
                defense.body.velocity.x = -HORDE_VELOCITY_X[level-1];
            }
            bossShootSnd.play();
        }
        //console.log("ShootHorde");
    }

    shootCopies(){ //crea copias de él que se lanzan a toda velocidad hacia el jugador por todos los carriles menos 1, son indestructibles
        let lineaBuena = Math.floor(Math.random()*(threads+1));
        for(let i = 0; i<=threads; i++){
            let copy = this.Copies.getFirstExists(false);
            if (copy && i!=lineaBuena) {
                let x = Math.round(sceneWidth/threads)*i + (game.world.width - EnemyOffset); //Posicion x
                let y = x*XY_RELATION_GROUND - 80;
                copy.reset(x, y);
                bossCopiesSnd.play();
                copy.body.velocity.y = HORDE_VELOCITY_X[level-1]*LEVEL_ENEMY_VELOCITY_RELATION;
                copy.body.velocity.x = -HORDE_VELOCITY_X[level-1];
            }
        }
        //console.log("ShootCopies");
    }
    invertControls(){
        controlesInvertidos = true;
        let styleHUD = {fontSize: '30px', fill: 'yellow'};
        mensaje = game.add.text(300,75,'The enemy reversed the controls!!', styleHUD);
        mensaje.alpha = 0.5;
        setTimeout(function(){controlesInvertidos = false; mensaje.text = ' ';}, 2000);
    }

}


let parteCState = {
    preload: preloadParteC,
    create: createParteC,
    update: updateParteC
};

function preloadParteC() {
    switch (threads) {
        case 2:
            game.load.image('bgimageN1', 'assets/imgs/3Carriles2.png');
            game.load.image('bgimageN2', 'assets/imgs/3Carriles3.png');
            game.load.image('bgimageN3', 'assets/imgs/3Carriles4.png');
            break;
        case 3:
            game.load.image('bgimageN1', 'assets/imgs/4Carriles2.png');
            game.load.image('bgimageN2', 'assets/imgs/4Carriles3.png');
            game.load.image('bgimageN3', 'assets/imgs/4Carriles4.png');
            break;
        case 4:
            game.load.image('bgimageN1', 'assets/imgs/5Carriles2.png');
            game.load.image('bgimageN2', 'assets/imgs/5Carriles3.png');
            game.load.image('bgimageN3', 'assets/imgs/5Carriles4.png');
            break;
        case 5:
            game.load.image('bgimageN1', 'assets/imgs/6Carriles2.png');
            game.load.image('bgimageN2', 'assets/imgs/6Carriles3.png');
            game.load.image('bgimageN3', 'assets/imgs/6Carriles4.png');
            break;
        case 6:
            game.load.image('bgimageN1', 'assets/imgs/7Carriles2.png');
            game.load.image('bgimageN2', 'assets/imgs/7Carriles3.png');
            game.load.image('bgimageN3', 'assets/imgs/7Carriles4.png');
            break;
        case 7:
            game.load.image('bgimageN1', 'assets/imgs/8Carriles2.png');
            game.load.image('bgimageN2', 'assets/imgs/8Carriles3.png');
            game.load.image('bgimageN3', 'assets/imgs/8Carriles4.png');
            break;
        case 8:
            game.load.image('bgimageN1', 'assets/imgs/9Carriles2.png');
            game.load.image('bgimageN2', 'assets/imgs/9Carriles3.png');
            game.load.image('bgimageN3', 'assets/imgs/9Carriles4.png');
            break;
    }
    game.load.image('guisante', 'assets/imgs/Guisante.png');
    game.load.image('scarecrow', 'assets/imgs/scarecrow.png');
    game.load.image('blanco', 'assets/imgs/Blanco.png');
    game.load.spritesheet('vida', 'assets/animations/vida.png',512,512);
    game.load.spritesheet('TakeLife', 'assets/animations/TakeLife.png',512,512);
    game.load.spritesheet('enemigo1', 'assets/animations/enemigos/aguacate.png',304,379);
    game.load.spritesheet('enemigo2', 'assets/animations/enemigos/platano.png',372,517);
    game.load.spritesheet('enemigo3', 'assets/animations/enemigos/sandia.png',418,382);
    game.load.spritesheet('enemigo4', 'assets/animations/enemigos/zanahoria.png',352,501);
    game.load.spritesheet('blood', 'assets/animations/enemigos/blood.png',304,304);
    game.load.spritesheet('bloodFresa', 'assets/animations/enemigos/bloodBoss.png',304,304);
    game.load.spritesheet('humo', 'assets/animations/enemigos/Humo.png',467,467);
    game.load.spritesheet('Fresa', 'assets/animations/enemigos/Fresa.png',250,367);
    game.load.spritesheet('espanta', 'assets/animations/scarecrow.png',585,824);
    if(cortacesped1){
        game.load.image('cortacesped1', 'assets/imgs/CortacespedAmarillo.png');
    }
    else{
        game.load.image('cortacesped1', 'assets/imgs/CortacespedRojo.png');
    }
    game.load.image('boss', 'assets/imgs/Fresa1.png');
    game.load.image('bossCongelado', 'assets/imgs/FresaCongelada1.png');
    game.load.image('copies', 'assets/imgs/FresaSinCara1.png');
    game.load.image('congelar', 'assets/imgs/Congelar.png');
    game.load.image('limpiar', 'assets/imgs/Limpiar.png');
    game.load.image('disminuir', 'assets/imgs/Down.png');
    game.load.image('masVida', 'assets/imgs/MasVida.png');
    game.load.image('bonusDinero', 'assets/imgs/MasMonedas.png');
    game.load.image('pressA', 'assets/imgs/PressA.png');
    game.load.image('pressS', 'assets/imgs/PressS.png');
    game.load.image('pressD', 'assets/imgs/PressD.png');
    game.load.image('transicion', 'assets/imgs/Transicion.png');

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
    game.load.audio('damage', 'assets/Audios/DisparoBoss.wav');
    game.load.audio('bossAppear', 'assets/Audios/AparicionBoss.wav');
    game.load.audio('bossVanish', 'assets/Audios/DesaparicionBoss.wav');
    game.load.audio('bossShoot', 'assets/Audios/Damage.wav');
    game.load.audio('bossCopies', 'assets/Audios/ShootCopies.wav');
    game.load.audio('bossDamage', 'assets/Audios/DamageBoss.wav');
}

function createSoundsC() {
    if (enemiesSnd.length == 0) {
        let enemySnd;
        for (let i = 1; i <= 13; i++) {
            enemySnd = game.add.audio('enemy' + i);
            enemySnd.volume = 0.2; //0.2
            enemiesSnd.push(enemySnd);
        }
    }
    /*
    for(let i = 0; i<SoundsLawnmower; i++){
        shootLawnmowerSnd[i] = game.add.audio('lawnmower');
    }
    */
    killEnemySnd = game.add.audio('killEnemy');
    enemyDownSnd = game.add.audio('enemyDown');
    enemyDownSnd.volume = 2;
    rightSnd = game.add.audio('right');
    rightSnd.volume = 5;
    leftSnd = game.add.audio('left');
    healthSnd = game.add.audio('health');
    damageSnd = game.add.audio('damage');
    damageSnd.volume = 2;
    bossAppearSnd = game.add.audio('bossAppear');
    bossAppearSnd.volume = 1.7;
    bossVanishSnd = game.add.audio('bossVanish');
    bossVanishSnd.volume = 1.7;
    bossShootSnd = game.add.audio('bossShoot');
    bossShootSnd.volume = 0.5;
    bossCopiesSnd = game.add.audio('bossCopies');
    bossDamageSnd = game.add.audio('bossDamage');
}

function createParteC() {

    //salido = false;
    animConfig = JSON.parse(game.cache.getText('anim'));

    //shootLawnmowerSnd = [];
    CountBulletSounds = -1;
    createSoundsC();

    scPosition = Math.round(threads/2);
    inputEnabled = true;
    level=1;
    FinalBossLifes = VIDAS_BOSS[level-1];
    controlesInvertidos = false;
    colisionadores = [coli0, coli1, coli2, coli3, coli4, coli5, coli6, coli7, coli8, coli9]; // metemos los colisionadores en el array
    GamePart = "C"; //IMPORTANTE CAMBIAR PARA CADA PARTE
    inmovible = false;
    if(nivelAnterior != "B"){
        score = 0;
        timeElapsed = 0;
        lastTime = game.time.totalElapsedSeconds();
        life = 5;
    }
    nivelAnterior="C";
    enemigosCreados = 0;
    enemigosEliminados = 0;
    activado = true;
    victory = -1;

    LEVEL_ENEMY_VELOCITY_X=[70, 75, 80]; //[50, 70, 90];


    if (threads <= 3) {
        sceneWidth = SCENE_WIDTH-180;
        offsetThreads = OFFSET_THREADS;
        EnemyOffset = 615;
        offsetCollisions = OFFSET_THREADS;
        BossOffset = 405;
        offsetHeight = 20;
    }
    else {
        sceneWidth = SCENE_WIDTH;
        offsetThreads = 0;
        EnemyOffset = SCENE_WIDTH;
        offsetCollisions = 0;
        BossOffset = 0;
        offsetHeight = 0;
    }

    let w = game.world.width;
    let h = game.world.height;

    xyRelationBranch = (Math.tan(13 * Math.PI / 180)*sceneWidth/threads+SCARECROW_Y/(NUM_BRANCHES[level-1]+2))/
                        (sceneWidth/threads-Math.tan(30 * Math.PI / 180)*SCARECROW_Y/(NUM_BRANCHES[level-1]+2));

    bgImage = game.add.tileSprite(0, 0, w*10, h*10, 'bgimageN1');
    bgImage.anchor.setTo(0, 0);
    bgImage.scale.setTo(0.96, 0.955);

    //setInterval( function() {boss.shootDefense()}, 1000); //Intención de que aparezca y dispare, también hay que implementar más acciones
    //setInterval( function() {boss.shootHorde()}, 1000); //Se utiliza el grupo de defenses
    //setInterval( function() {boss.shootCopies()}, 2000);

    createKeyControls();
    collisions();
    createBullets(BULLETS_GROUP_SIZE);
    createEnemiesC(ENEMIES_GROUP_SIZE);
    createHealthItems(HEALTH_GROUP_SIZE);
    createScarecrow();
    createHUDC();
    CreateBranchingPoints();
    CreateSkills();

    velocityModuleRelation = (EnemyVelocityX*Math.sqrt((1+LEVEL_ENEMY_VELOCITY_RELATION*LEVEL_ENEMY_VELOCITY_RELATION)/
                                                        (1+xyRelationBranch*xyRelationBranch)));

    //Crear EnemigoFinal

    let bossX = Math.round(sceneWidth/threads)*(Math.floor(threads/2))+offsetThreads; //Math.floor(threads/2)
    boss = new FinalBoss(bossX+Math.tan(30 * Math.PI / 180)*SCARECROW_Y, bossX*XY_RELATION_GROUND);
    //setTimeout(function(){BossAttack();}, 1000);
    BossAttack();

    createSmoke(ENEMIES_GROUP_SIZE);

    createLifeBar();
    updateLifeBar(life);

    bloodScreen = game.add.tileSprite(0, 0, w*10, h*10, 'bloodScreen');
    bloodScreen.anchor.setTo(0, 0);
    bloodScreen.scale.setTo(1.6, 1.75);
    bloodScreen.alpha = 0;



    updateTime();

    tiempoHastaParteC = timeElapsed;
    //console.log(timeElapsed);

    //Transicion Inicio
    transicionIN = game.add.image(0, 0, 'transicion');
    transicionIN.anchor.setTo(0,0);
    setTimeout(function() {TransitionIN(transicionIN);}, 100);
}

function CreateSkills(){

    let styleB = {font: '200px Talk Comic', fill: 'black'};

    if(CLimpiar>0){
        imglimpiar = game.add.image(50,100,'limpiar');
        imglimpiar.alpha = 0.5;
        imglimpiar.anchor.setTo(0.5,0.5);
        imglimpiar.scale.setTo(0.8);

        imgPressA = game.add.image(50,145,'pressA');
        imgPressA.anchor.setTo(0.5,0.5);
        imgPressA.scale.setTo(0.16);

        contadorLimpiar = game.add.text(50,100 +10, CLimpiar,styleB);
        contadorLimpiar.anchor.setTo(0.5,0.5);
        contadorLimpiar.scale.setTo(0.4);
    }
    if(CDisminuir>0){
        imgdisminuir = game.add.image(50,200,'disminuir');
        imgdisminuir.alpha = 0.5;
        imgdisminuir.anchor.setTo(0.5,0.5);
        imgdisminuir.scale.setTo(0.8);

        imgPressS = game.add.image(50,245,'pressS');
        imgPressS.anchor.setTo(0.5,0.5);
        imgPressS.scale.setTo(0.16);

        contadorDisminuir = game.add.text(50,200 +10, CDisminuir,styleB);
        contadorDisminuir.anchor.setTo(0.5,0.5);
        contadorDisminuir.scale.setTo(0.4);
    }
    if(CCongelar>0){
        imgcongelar = game.add.image(50,300,'congelar');
        imgcongelar.alpha = 0.5;
        imgcongelar.anchor.setTo(0.5,0.5);
        imgcongelar.scale.setTo(0.8);

        imgPressD = game.add.image(50,345,'pressD');
        imgPressD.anchor.setTo(0.5,0.5);
        imgPressD.scale.setTo(0.16);

        contadorCongelar = game.add.text(50,300 +10, CCongelar,styleB);
        contadorCongelar.anchor.setTo(0.5,0.5);
        contadorCongelar.scale.setTo(0.4);
    }
    if(CBonusD){
        CBonusD = false;
        imgbonusd = game.add.image(game.world.width-80,550,'bonusDinero');
        imgbonusd.anchor.setTo(0.5,0.5);
        imgbonusd.scale.setTo(0.6);
        BoolBonusDinero = true;
    }
    if(CBonusV){
        life = life +10;
        lifeText.text = 'Lives: '+life+'/40';
        CBonusV = false;
        imgbonusv = game.add.image(game.world.width-80,620,'masVida');
        imgbonusv.anchor.setTo(0.5,0.5);
        imgbonusv.scale.setTo(0.6);
    }
}

function createHUDC() {
    let lifeX = 5;
    let scoreX = game.world.width / 2;
    let levelX = game.world.width - 5;
    let allY = game.world.height - 25;
    let styleHUD = {fontSize: '18px', fill: '#FFFFFF'};
    lifeText = game.add.text(lifeX,allY,'Lives: '+life+'/40', styleHUD);
    scoreText = game.add.text(scoreX,allY,'Score: '+score,styleHUD);
    scoreText.anchor.setTo(0.5, 0);
    levelText = game.add.text(levelX,allY,'Level: '+level,styleHUD);
    levelText.anchor.setTo(1, 0);
    partText = game.add.text(levelX,allY-20,'Part: '+GamePart,styleHUD);
    partText.anchor.setTo(1, 0);
    timeText = game.add.text(lifeX,allY-20,'Time: '+timeElapsed,styleHUD);
    BossLifes = game.add.text(20,20,'Final Boss Lives: '+FinalBossLifes,styleHUD); //Vidas del jefe final


    //Texto para cambiar el nivel
    let changeX = 500;
    let changeY = game.world.height /2;
    let styleChange = {fontSize: '68px', fill: '#FFFFFF'};
    ChangeLevelText = game.add.text(changeX, changeY,'', styleChange);
    ChangeLevelText.anchor.setTo(0.5, 0.5);
}

function updateParteC() {
    game.physics.arcade.overlap(colisionadores,enemies1,FinEnemigoC,null,this);
    game.physics.arcade.overlap(colisionadores,enemies2,FinEnemigoC,null,this);
    game.physics.arcade.overlap(colisionadores,enemies3,FinEnemigoC,null,this);
    game.physics.arcade.overlap(colisionadores,enemies4,FinEnemigoC,null,this);
    game.physics.arcade.overlap(colisionadores,healthItems,FinVida,null,this);
    game.physics.arcade.overlap(bullets,enemies1,KillEnemyB,null,this);
    game.physics.arcade.overlap(bullets,enemies2,KillEnemyB,null,this);
    game.physics.arcade.overlap(bullets,enemies3,KillEnemyB,null,this);
    game.physics.arcade.overlap(bullets,enemies4,KillEnemyB,null,this);
    game.physics.arcade.overlap(scarecrow,healthItems,RecogerVida,null,this);

    game.physics.arcade.overlap(branchesCollider, enemies1, takeBranch, null, this);
    game.physics.arcade.overlap(branchesCollider, enemies2, takeBranch, null, this);
    game.physics.arcade.overlap(branchesCollider, enemies3, takeBranch, null, this);
    game.physics.arcade.overlap(branchesCollider, enemies4, takeBranch, null, this);
    game.physics.arcade.overlap(lastBranchesCollider, enemies1, onLastThread, null, this);
    game.physics.arcade.overlap(lastBranchesCollider, enemies2, onLastThread, null, this);
    game.physics.arcade.overlap(lastBranchesCollider, enemies3, onLastThread, null, this);
    game.physics.arcade.overlap(lastBranchesCollider, enemies4, onLastThread, null, this);

    //Colisiones unicas de la parte C
    game.physics.arcade.overlap(bullets,boss.Defenses,killDefenses,null,this);
    game.physics.arcade.overlap(scarecrow,boss.Defenses,DmgDefense,null,this);
    game.physics.arcade.overlap(colisionadores,boss.Copies,killCopies,null,this);
    game.physics.arcade.overlap(scarecrow,boss.Copies,DmgCopies,null,this);
    //game.physics.arcade.overlap(bullets,boss.Copies,bulletsKill,null,this);
    game.physics.arcade.overlap(boss.image, bullets,BossDmg,null,this);

    if(controlesInvertidos==false){
        manageScarecrowMovements();
    }

    if(controlesInvertidos){
        manageScarecrowMovementsInvert();
    }

    manageScarecrowShots();
    updateTime();
    actualizarNivelC();
    useSkills();
}

function FinEnemigoC(coli, enemy){
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
        /*
        for(let i = 0; i<SoundsLawnmower; i++){
            shootLawnmowerSnd[i].stop();
        }
        */

        while (shootLawnmowerSnd.length > 0) {
            let sndMower = shootLawnmowerSnd.shift();
            sndMower.stop();
        }

        clearTimeout(TimeOut1);
        clearTimeout(TimeOut2);
        clearTimeout(TimeOut3);
        clearTimeout(TimeOut4);
        victory = 0;
        gameMusic.stop();
        game.state.start("endgame");
    }
   enemigosEliminados++;
}

function BossDmg(boss1, bullet){
    if(boss1.alpha==1){
        boss.image.animations.play('daño');
        let sangreFresa = bloodFresa.getFirstExists(false);
        if (sangreFresa) {
            let x = boss1.x;
            let y = boss1.y;
            sangreFresa.reset(x, y);
            sangreFresa.animations.add('dieBoss', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            sangreFresa.animations.play('dieBoss', 30, false, true);
        }
        bossDamageSnd.play();
        bullet.kill();
        FinalBossLifes--;
        BossLifes.text = 'Final Boss Lives: '+FinalBossLifes;
        if(inmovible ==false){
            clearTimeout(TimeOut1);
            clearTimeout(TimeOut2);
            clearTimeout(TimeOut3);
            clearTimeout(TimeOut4);
            boss.Desaparecer();
        }
        /*
        for(let i = 0; i<SoundsLawnmower; i++){
            if(shootLawnmowerSnd[i].isPlaying){
                shootLawnmowerSnd[i].stop();
                break;
            }
        }
        */

        if (shootLawnmowerSnd.length > 0) {
            let sndMower = shootLawnmowerSnd.shift();
            sndMower.stop();
        }
    }
}

function BossAttack(){
    boss.image.animations.play('attack');
    let aleatorio = Math.round(Phaser.Math.between(0,3));
    switch (aleatorio) {
        case 0:
            boss.shootDefense();
            break;
        case 1:
            boss.shootHorde();
            break;
        case 2:
            boss.shootCopies();
            break;
        case 3:
            boss.invertControls();
            break;
    }
    TimeOut3 = setTimeout(function(){boss.Desaparecer();}, ENEMY_MOVEMENT_VELOCITY[level-1]);
    //console.log("Lanzo ataque");
}

function bulletsKill(bullet, copy){
    bullet.kill();
}

function killDefenses(bullet, defense){
    bullet.kill();
    defense.kill();
    killEnemySnd.play();
    /*
    for(let i = 0; i<SoundsLawnmower; i++){
        if(shootLawnmowerSnd[i].isPlaying){
            shootLawnmowerSnd[i].stop();
            break;
        }
    }
    */
    if (shootLawnmowerSnd.length > 0) {
        let sndMower = shootLawnmowerSnd.shift();
        sndMower.stop();
    }
}

function DmgDefense(scarecrow, defense){
    bloodTween = game.add.tween(bloodScreen)
        .to({alpha: animConfig.hitMark[1].alpha}, 50, Phaser.Easing.Linear.None)
        .to({alpha: animConfig.hitMark[0].alpha}, 200, Phaser.Easing.Linear.None);
    bloodTween.start();
    damageSnd.play();
    defense.kill();
    life--;
    updateLifeBar(life);
    lifeText.text = 'Lives: '+life+'/40';
    if (life == 0) {
        /*
        for(let i = 0; i<SoundsLawnmower; i++){
            shootLawnmowerSnd[i].stop();
        }
        */

        while (shootLawnmowerSnd.length > 0) {
            let sndMower = shootLawnmowerSnd.shift();
            sndMower.stop();
        }

        clearTimeout(TimeOut1);
        clearTimeout(TimeOut2);
        clearTimeout(TimeOut3);
        clearTimeout(TimeOut4);
        victory = 0;
        gameMusic.stop();
        game.state.start("endgame");
    }
}

function killCopies(colisionador, copy){
    copy.kill();
}

function DmgCopies(scarecrow, copy){
    bloodTween = game.add.tween(bloodScreen)
        .to({alpha: animConfig.hitMark[1].alpha}, 50, Phaser.Easing.Linear.None)
        .to({alpha: animConfig.hitMark[0].alpha}, 200, Phaser.Easing.Linear.None);
    bloodTween.start();
    damageSnd.play();
    copy.kill();
    life--;
    updateLifeBar(life);
    lifeText.text = 'Lives: '+life+'/40';
    if (life == 0) {
        /*
        for(let i = 0; i<SoundsLawnmower; i++){
            shootLawnmowerSnd[i].stop();
        }
        */

        while (shootLawnmowerSnd.length > 0) {
            let sndMower = shootLawnmowerSnd.shift();
            sndMower.stop();
        }

        clearTimeout(TimeOut1);
        clearTimeout(TimeOut2);
        clearTimeout(TimeOut3);
        clearTimeout(TimeOut4);
        victory = 0;
        gameMusic.stop();
        game.state.start("endgame");
    }
}

function actualizarNivelC(){
    if(FinalBossLifes<=0 && level < NUM_LEVELS && life > 0 && activado == true){ //Para pasar al siguiente nivel
        /*
        for(let i = 0; i<SoundsLawnmower; i++){
            shootLawnmowerSnd[i].stop();
        }
        */
        //salido = false;
        while (shootLawnmowerSnd.length > 0) {
            let sndMower = shootLawnmowerSnd.shift();
            sndMower.stop();
        }

        while (enemiesCollider.length > 0 || enemiesList.length > 0) {
            enemiesCollider.pop();
            enemiesList.pop();
        }
            
        for (let i = 0; i < CANT_ENEMIGOS[level-1]; i++)
            enemiesCollider.push(true);

        let bPoint;
        while (branchesCollider.length > 0) {
            bPoint = branchesCollider[branchesCollider.length-1];
            branchesCollider.pop();
            bPoint.kill();
            if (lastBranchesCollider.length > 0) {
                bPoint = lastBranchesCollider[lastBranchesCollider.length-1];
                lastBranchesCollider.pop();
                bPoint.kill();
            }
        }
        
        //PONER EN GRANDE: NIVEL COMPLETADO
        ChangeLevelText.text = 'LEVEL ' + level + ' COMPLETED';
        bullets.forEach(clearStage, this);
        healthItems.forEach(clearStage, this);
        enemies1.forEach(clearStage, this);
        enemies2.forEach(clearStage, this);
        enemies3.forEach(clearStage, this);
        enemies4.forEach(clearStage, this);
        boss.Defenses.forEach(clearStage, this);
        boss.Copies.forEach(clearStage, this);
        game.input.enabled = false;
        game.time.events.add(2000, continueGameC, this);
        activado = false;
        clearTimeout(TimeOut1);
        clearTimeout(TimeOut2);
        clearTimeout(TimeOut3);
        clearTimeout(TimeOut4);
    }
    else if(FinalBossLifes<=0 && life > 0 && activado == true){//Para pasar a la siguiente parte porque no hay más niveles en esta parte
        /*
        for(let i = 0; i<SoundsLawnmower; i++){
            shootLawnmowerSnd[i].stop();
        }
        */

        while (shootLawnmowerSnd.length > 0) {
            let sndMower = shootLawnmowerSnd.shift();
            sndMower.stop();
        }

        clearTimeout(TimeOut1);
        clearTimeout(TimeOut2);
        clearTimeout(TimeOut3);
        clearTimeout(TimeOut4);
        victory = 1;

        activado = false;

        //Transicion Oculta
        transicion = game.add.image(0, 0, 'transicion');
        transicion.anchor.setTo(1,0);
        Transition(transicion);
        setTimeout(function(){gameMusic.stop(); game.state.start("endgame");},600);
    }
}

function continueGameC() {
    game.input.enabled = true;
    ChangeLevelText.text = '';
    level++;
    levelText.text = 'Level: ' + level;
    CambioImagenCarril();
    EnemyProbability = LEVEL_ENEMY_PROBABILITY[level-1];
    EnemyVelocityX = LEVEL_ENEMY_VELOCITY_X[level-1];
    EnemyVelocityY = LEVEL_ENEMY_VELOCITY_X[level-1]*LEVEL_ENEMY_VELOCITY_RELATION;
    enemigosCreados = 0;
    enemigosEliminados = 0;
    FinalBossLifes = VIDAS_BOSS[level-1];
    BossLifes.text = 'Final Boss Lives: '+FinalBossLifes;
    activado = true;

    xyRelationBranch = (Math.tan(13 * Math.PI / 180)*sceneWidth/threads+SCARECROW_Y/(NUM_BRANCHES[level-1]+2))/
                        (sceneWidth/threads-Math.tan(30 * Math.PI / 180)*SCARECROW_Y/(NUM_BRANCHES[level-1]+2));

    velocityModuleRelation = (EnemyVelocityX*Math.sqrt((1+LEVEL_ENEMY_VELOCITY_RELATION*LEVEL_ENEMY_VELOCITY_RELATION)/
                            (1+xyRelationBranch*xyRelationBranch)));
    CreateBranchingPoints();
    setTimeout(function(){boss.moveTo(Math.floor(Math.random()*(threads+1)));}, 2000);
}

function createEnemiesC(number) {
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
    StartEnemyVelocityX = LEVEL_ENEMY_VELOCITY_X[level-1];
    StartEnemyVelocityY = LEVEL_ENEMY_VELOCITY_X[level-1]*LEVEL_ENEMY_VELOCITY_RELATION;
    game.time.events.loop(TIMER, activateEnemyC, this);

}

function activateEnemyC() {

    if (Math.random() <EnemyProbability && FinalBossLifes>0) {//&& !salido
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
            enemy.body.velocity.x = -StartEnemyVelocityX;
            enemy.body.velocity.y = StartEnemyVelocityY;
            enemiesList.push(enemy);
            enemiesCollider.push(true);
            enemigosCreados++;
        }
        //salido = true;
    }
}

function manageScarecrowMovementsInvert() { //Controles invertidos
    scarecrow.body.velocity.x = 0;
    scarecrow.body.velocity.y = 0;
    if (inputEnabled) {
        if (isKeyboard) {
            if ((cursors.left.justDown || cursors.up.justDown) && scPosition < threads) {
                scPosition++;
                inputEnabled = false;
                scarecrow.animations.play('moveRight');
            }
            else if ((cursors.right.justDown || cursors.down.justDown) && scPosition > 0) {
                scPosition--;
                inputEnabled = false;
                scarecrow.animations.play('moveLeft');
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
                
                scPosition = threads - scPosition;
                //console.log("scPosition: " + scPosition);
                inputEnabled = false;
                if (prevPosition < scPosition){
                    rightSnd.play();
                    scarecrow.animations.play('moveLeft');
                }
                else if (prevPosition > scPosition){
                    leftSnd.play();
                    scarecrow.animations.play('moveRight');
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
    }
}

function useSkills(){
        if(CLimpiar>0 && game.input.keyboard.addKey(Phaser.Keyboard.A).justDown){

            //Eliminar enemigos
            bullets.forEach(clearStage, this);
            enemies1.forEach(clearStage, this);
            enemies2.forEach(clearStage, this);
            enemies3.forEach(clearStage, this);
            enemies4.forEach(clearStage, this);
            boss.Defenses.forEach(clearStage, this);
            boss.Copies.forEach(clearStage, this);

            while(enemiesList.length>0){
                let delenem = enemiesList.pop();
                KillJustEnemyB(delenem);
            }

            CLimpiar--;
            if(CLimpiar<=0){
                imglimpiar.kill();
                contadorLimpiar.kill();
                imgPressA.kill();
            }
            else{
                contadorLimpiar.text = CLimpiar;
            }
        }
        if(CDisminuir>0 && game.input.keyboard.addKey(Phaser.Keyboard.S).justDown){

            //Ralentizar nuevos enemigos
            LEVEL_ENEMY_VELOCITY_X=[5, 7, 9];
            StartEnemyVelocityX = LEVEL_ENEMY_VELOCITY_X[level-1];
            StartEnemyVelocityY = LEVEL_ENEMY_VELOCITY_X[level-1]*LEVEL_ENEMY_VELOCITY_RELATION;

            setTimeout(function(){
                LEVEL_ENEMY_VELOCITY_X=[80, 85, 90];
                StartEnemyVelocityX = LEVEL_ENEMY_VELOCITY_X[level-1];
                StartEnemyVelocityY = LEVEL_ENEMY_VELOCITY_X[level-1]*LEVEL_ENEMY_VELOCITY_RELATION;
            },5000);

            CDisminuir--;
            if(CDisminuir<=0){
                imgdisminuir.kill();
                contadorDisminuir.kill();
                imgPressS.kill();
            }
            else{
                contadorDisminuir.text = CDisminuir;
            }
        }
        if(CCongelar>0 && game.input.keyboard.addKey(Phaser.Keyboard.D).justDown){

            //Congelar al boss
            boss.image.loadTexture('bossCongelado');
            inmovible = true;
            clearTimeout(TimeOut1);
            clearTimeout(TimeOut2);
            clearTimeout(TimeOut3);
            boss.moveTo(Math.floor(Math.random()*(threads+1)));
            clearTimeout(TimeOut1);
            TimeOut4 = setTimeout(function(){inmovible = false; boss.Desaparecer(); boss.image.loadTexture('boss');}, 2000);

            CCongelar--;
            if(CCongelar<=0){
                imgcongelar.kill();
                contadorCongelar.kill();
                imgPressD.kill();
            }
            else{
                contadorCongelar.text = CCongelar;
            }
        }
}

function createSmoke(number){
     //Humo
     Smoke = game.add.group();
     Smoke.createMultiple(number, 'humo');
     Smoke.callAll('anchor.setTo', 'anchor', 0.9, 0.1);
     Smoke.callAll('scale.setTo', 'scale', 0.2);

     //Sangre Fresa
    bloodFresa = game.add.group();
    bloodFresa.createMultiple(number, 'bloodFresa');
    bloodFresa.callAll('anchor.setTo', 'anchor', 0.9, 0.1);
    bloodFresa.callAll('scale.setTo', 'scale', 0.35);
}

function KillJustEnemyB(enemy){
    let sangre = blood.getFirstExists(false);
        if (sangre) {
            let x = enemy.x;
            let y = enemy.y;
            sangre.reset(x, y);
            sangre.animations.add('dieFruit', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            sangre.animations.play('dieFruit', 30, false, true);
        }
    enemy.kill();
    killEnemySnd.play();
    if(BoolBonusDinero){
        score= score +50;
    }
    else{
        score= score +10;
    }
    scoreText.text = 'Score: '+score;
    enemigosEliminados++;
}