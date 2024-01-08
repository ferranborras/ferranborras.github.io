//Las variables que utilizamos aqui son principalmente de la parte A

const ChangeThreadsProbability = [0.2, 0.4, 0.6];

let velocityModuleRelation;
let threadsList = [];
let lastBranchesCollider = [];
let branchesCollider = [];
let enemiesList = [];
let enemiesCollider = [];
let xyRelationBranch;
const NUM_BRANCHES = [2, 3, 4];

const CANT_ENEMIGOS_B = [50, 60, 70];

//let square;

let parteBState = {
    preload: preloadParteB,
    create: createParteB,
    update: updateParteB
};

function preloadParteB() {
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
    game.load.image('blanco', 'assets/imgs/Blanco.png');
    game.load.image('scarecrow', 'assets/imgs/scarecrow.png');
    game.load.spritesheet('vida', 'assets/animations/vida.png',512,512);
    game.load.spritesheet('TakeLife', 'assets/animations/TakeLife.png',512,512);
    game.load.image('white_sq', 'assets/imgs/Solid_white.png');
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
}

function createSoundsB() {
    if (enemiesSnd.length == 0) {
        let enemySnd;
        for (let i = 1; i <= 13; i++) {
            enemySnd = game.add.audio('enemy' + i);
            enemySnd.volume = 0.2;
            enemiesSnd.push(enemySnd);
        }
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

function createParteB() {
    //HUD_HEIGHT = GAME_STAGE_HEIGHT/36;
    //SCARECROW_Y = GAME_STAGE_HEIGHT*37/48;
    //SCENE_WIDTH = GAME_STAGE_WIDTH*1771/2560;
    //OFFSET_THREADS = GAME_STAGE_WIDTH*45/512;

    animConfig = JSON.parse(game.cache.getText('anim'));

    //shootLawnmowerSnd = [];
    CountBulletSounds = -1;

    prueba = GAME_STAGE_HEIGHT*37/48;
    scPosition = Math.round(threads/2);
    inputEnabled = true;
    level=1;
    colisionadores = [coli0, coli1, coli2, coli3, coli4, coli5, coli6, coli7, coli8, coli9]; // metemos los colisionadores en el array
    GamePart = "B"; //IMPORTANTE CAMBIAR PARA CADA PARTE
    if(nivelAnterior != "A"){
        score = 0;
        life = 5;
        timeElapsed = 0;
        lastTime = game.time.totalElapsedSeconds();
    }
    nivelAnterior="B";
    enemigosCreados = 0;
    enemigosEliminados = 0;
    activado = true;
    victory = -1;
    
    
    LEVEL_ENEMY_VELOCITY_X=[65, 70, 75];

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
    xyRelationBranch = (Math.tan(13 * Math.PI / 180)*sceneWidth/threads+SCARECROW_Y/(NUM_BRANCHES[level-1]+2))/
                        (sceneWidth/threads-Math.tan(30 * Math.PI / 180)*SCARECROW_Y/(NUM_BRANCHES[level-1]+2));
    
    bgImage = game.add.tileSprite(0, 0, w*10, h*10, 'bgimageN1');
    bgImage.anchor.setTo(0, 0);
    bgImage.scale.setTo(0.96, 0.955);

    createKeyControls();
    createSoundsB();
    createBullets(BULLETS_GROUP_SIZE);
    createEnemiesB(ENEMIES_GROUP_SIZE);
    collisions();
    createHealthItems(HEALTH_GROUP_SIZE);
    createScarecrow();
    createHUD();
    CreateBranchingPoints();

    velocityModuleRelation = (EnemyVelocityX*Math.sqrt((1+LEVEL_ENEMY_VELOCITY_RELATION*LEVEL_ENEMY_VELOCITY_RELATION)/
                                                        (1+xyRelationBranch*xyRelationBranch)));

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

    //console.log(velocityModuleRelation);
    //console.log(Math.sqrt(EnemyVelocityX*EnemyVelocityX*(1+LEVEL_ENEMY_VELOCITY_RELATION)/
                        //(velocityModuleRelation*velocityModuleRelation*(1+xyRelationBranch*xyRelationBranch))));

    //square = game.add.sprite(offsetThreads+Math.tan(30 * Math.PI / 180)*SCARECROW_Y/(NUM_BRANCHES[level-1]+2)*2,
    //                            HUD_HEIGHT+SCARECROW_Y-SCARECROW_Y/(NUM_BRANCHES[level-1]+2)*2, 'white_sq');
    //square.anchor.setTo(0, 0);
    //square.scale.setTo(1/240*(sceneWidth/threads-Math.tan(30 * Math.PI / 180)*SCARECROW_Y/(NUM_BRANCHES[level-1]+2)), 
    //                    1/240*(Math.tan(13 * Math.PI / 180)*sceneWidth/threads+SCARECROW_Y/(NUM_BRANCHES[level-1]+2)));
    //square.scale.setTo(1/240*tamaño, 1/240*tamaño);

    //let auxX = (sceneWidth/threads-Math.tan(30 * Math.PI / 180)*SCARECROW_Y/(NUM_BRANCHES[level-1]+2));
    //let auxY = (Math.tan(13 * Math.PI / 180)*sceneWidth/threads+SCARECROW_Y/NUM_BRANCHES[level-1]+2);
}


//Creacion de enemigos
function createEnemiesB(number) {
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
    game.time.events.loop(TIMER, activateEnemyB, this);
}

function activateEnemyB() {
    if (Math.random() <EnemyProbability && enemigosCreados<CANT_ENEMIGOS_B[level-1]) {
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
            enemiesList.push(enemy);
            enemiesCollider.push(true);
            enemigosCreados++;
            /*if (Math.random() < ChangeThreadsProbability[level-1]){
                game.time.events.add(Math.random()*10000, ChangeThread(enemy, posicion), this);
            }*/

        }
    }
}
/*
    colisionadores[i] = game.add.sprite(x, y, 'blanco');
    colisionadores[i].anchor.setTo(0.5, 0.5);
    colisionadores[i].scale.setTo(0.05, 0.05);
    game.physics.arcade.enable(colisionadores[i]);
    */
function CreateBranchingPoints() {
    let branchingPoint;
    let lastBranchingPoint;
    let x; //Posicion x
    let y;
    let xLast;
    let yLast;
    let distBranches = SCARECROW_Y/(NUM_BRANCHES[level-1]+2);
    for (let i = 0; i < threads; i++) {
        x = sceneWidth/threads*i+offsetCollisions;
        y = x*XY_RELATION_GROUND+SCARECROW_Y;
        for (let j = 1; j < NUM_BRANCHES[level-1]+2; j++) {
            branchingPoint = game.add.sprite(x+distBranches*j/XY_RELATION_THREADS, y-distBranches*j, 'blanco'); //no se porque no quiere ir
            branchingPoint.anchor.setTo(0.6, 0.6);
            branchingPoint.scale.setTo(0.025, 0.025);
            game.physics.arcade.enable(branchingPoint);
            branchesCollider.push(branchingPoint);
            if (i == threads-1) {
                xLast = sceneWidth/threads*(i+1)+offsetCollisions;
                yLast = xLast*XY_RELATION_GROUND+SCARECROW_Y;
                lastBranchingPoint = game.add.sprite(xLast+distBranches*j/XY_RELATION_THREADS, yLast-distBranches*j, 'blanco'); //no se porque no quiere ir
                lastBranchingPoint.anchor.setTo(0.6, 0.6);
                lastBranchingPoint.scale.setTo(0.025, 0.025);
                game.physics.arcade.enable(lastBranchingPoint);
                lastBranchesCollider.push(lastBranchingPoint);
            }
        }
    }
}

/*
function ChangeThread(enemy, posEnemy){
    let posVel = enemy.body.position.x;
    if(posEnemy==0){
        while(enemy.body.position.x != posVel + (sceneWidth/threads))
        {
            enemy.body.velocity.x = +EnemyVelocityX;
            enemy.body.velocity.y = 0;
        }
        posEnemy =1;
    }
    else if(posEnemy== threads){
        while(enemy.body.position.x != posVel - (sceneWidth/threads))
        {
            enemy.body.velocity.x = -EnemyVelocityX;
            enemy.body.velocity.y = 0;
        }
    }
    else{
        let aleatorio = Math.random();
        if(aleatorio<0.5){
            while(enemy.body.position.x != posVel + (sceneWidth/threads))
            {
                enemy.body.velocity.x = +EnemyVelocityX;
                enemy.body.velocity.y = 0;
            }
        }
        else{
            while(enemy.body.position.x != posVel + (sceneWidth/threads))
            {
                enemy.body.velocity.x = +EnemyVelocityX;
                enemy.body.velocity.y = 0;
            }
        }
    }
    enemy.body.velocity.x = -EnemyVelocityX;
    enemy.body.velocity.y = EnemyVelocityY;
}
*/

function updateParteB() {
    game.physics.arcade.overlap(colisionadores,enemies1,FinEnemigo,null,this);
    game.physics.arcade.overlap(colisionadores,enemies2,FinEnemigo,null,this);
    game.physics.arcade.overlap(colisionadores,enemies3,FinEnemigo,null,this);
    game.physics.arcade.overlap(colisionadores,enemies4,FinEnemigo,null,this);
    game.physics.arcade.overlap(colisionadores,healthItems,FinVida,null,this);
    game.physics.arcade.overlap(bullets,enemies1,KillEnemyB,null,this);
    game.physics.arcade.overlap(bullets,enemies2,KillEnemyB,null,this);
    game.physics.arcade.overlap(bullets,enemies3,KillEnemyB,null,this);
    game.physics.arcade.overlap(bullets,enemies4,KillEnemyB,null,this);
    game.physics.arcade.overlap(scarecrow,healthItems,RecogerVida,null,this);

    game.physics.arcade.overlap(branchesCollider, enemies1,  takeBranch, null, this);
    game.physics.arcade.overlap(branchesCollider, enemies2, takeBranch, null, this);
    game.physics.arcade.overlap(branchesCollider, enemies3, takeBranch, null, this);
    game.physics.arcade.overlap(branchesCollider, enemies4, takeBranch, null, this);
    game.physics.arcade.overlap(lastBranchesCollider, enemies1, onLastThread, null, this);
    game.physics.arcade.overlap(lastBranchesCollider, enemies2, onLastThread, null, this);
    game.physics.arcade.overlap(lastBranchesCollider, enemies3, onLastThread, null, this);
    game.physics.arcade.overlap(lastBranchesCollider, enemies4, onLastThread, null, this);
    manageScarecrowMovements();
    manageScarecrowShots();
    updateTime();
    actualizarNivelB();
}

function actualizarNivelB(){
    if(enemigosEliminados>=CANT_ENEMIGOS_B[level-1] && level < NUM_LEVELS && life > 0 && activado == true){ //Para pasar al siguiente nivel
        //for(let i = 0; i<SoundsLawnmower; i++){
        //    shootLawnmowerSnd[i].stop();
        //}

        while (shootLawnmowerSnd.length > 0) {
            let sndMower = shootLawnmowerSnd.shift();
            sndMower.stop();
        }

        
        while (enemiesCollider.length > 0 || enemiesList.length > 0) {
            enemiesCollider.pop();
            enemiesList.pop();
        }
            
        for (let i = 0; i < CANT_ENEMIGOS_B[level-1]; i++)
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
        game.input.enabled = false;
        game.time.events.add(2000, continueGameB, this);
        activado = false;
    }
    else if(enemigosEliminados>=CANT_ENEMIGOS_B[level-1] && life > 0 && activado == true){//Para pasar a la siguiente parte porque no hay más niveles en esta parte
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
        game.time.events.add(2000, nextPartB, this);
        activado = false;
    }
}

function KillEnemyB(bullet, enemy){
    let sangre = blood.getFirstExists(false);
        if (sangre) {
            let x = enemy.x;
            let y = enemy.y;
            sangre.reset(x, y);
            sangre.animations.add('dieFruit', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            sangre.animations.play('dieFruit', 30, false, true);
        }
    if(Math.random()<HEALTH_PROBABILITY[level-1] && enemy.body.velocity.x<0){ //Probabilidad de spawnear objeto de vida
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

function nextPartB(){
    //Transicion Oculta
    transicion = game.add.image(0, 0, 'transicion');
    transicion.anchor.setTo(1,0);
    Transition(transicion);
    setTimeout(function(){game.input.enabled = true; game.state.start('parteC');},600); //Necesitamos que cada nivel nos cabe llevando a otro diferente
}

function continueGameB() {
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
    activado = true;

    xyRelationBranch = (Math.tan(13 * Math.PI / 180)*sceneWidth/threads+SCARECROW_Y/(NUM_BRANCHES[level-1]+2))/
                        (sceneWidth/threads-Math.tan(30 * Math.PI / 180)*SCARECROW_Y/(NUM_BRANCHES[level-1]+2));

    velocityModuleRelation = (EnemyVelocityX*Math.sqrt((1+LEVEL_ENEMY_VELOCITY_RELATION*LEVEL_ENEMY_VELOCITY_RELATION)/
                            (1+xyRelationBranch*xyRelationBranch)));
    
    CreateBranchingPoints();
}

function takeBranch(coli, enemy) {
    //console.log("enemy: " + enemiesList.indexOf(enemy) + " | collider: " + enemiesCollider[enemiesList.indexOf(enemy)]);
    if (enemiesCollider[enemiesList.indexOf(enemy)]) {
        if (Math.random() < 0.5) {
            enemy.body.velocity.x = velocityModuleRelation;
            enemy.body.velocity.y = velocityModuleRelation*xyRelationBranch;
            
            //console.log("vel: "+EnemyVelocityX*velocityModuleRelation);
        }
        else {
            enemy.body.velocity.x = -EnemyVelocityX;
            enemy.body.velocity.y = EnemyVelocityY;
        }
        enemiesCollider[enemiesList.indexOf(enemy)] = false;
        setTimeout(function () { 
            enemiesCollider[enemiesList.indexOf(enemy)] = true;
            //console.log("habilitado");
            }, 2500-LEVEL_ENEMY_VELOCITY_X[level-1]*25);
    }
}

function onLastThread(coli, enemy) {
    enemy.body.velocity.x = -EnemyVelocityX;
    enemy.body.velocity.y = EnemyVelocityY;
    //console.log("activo");
}

function CambioImagenCarril(){
    if(level==2){
        bgImage.loadTexture('bgimageN2');
    }
    else if(level ==3){
        bgImage.loadTexture('bgimageN3');
    }
}