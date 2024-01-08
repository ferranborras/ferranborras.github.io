
let shooterHOF;
let msgUser;

// audios
let gameOverSnd;
let winnerSnd;

let tiempoTranscurrido;

class HallOfFame {

    constructor(thesize = 10) {
        this.size = thesize;
        this.list = [];
        this.placeL = [];
        this.scoreL = [];
        this.dateL = [];
    }

    addNewTime(newTime) {
        let i;
        for (i = 0 ; i < this.list.length ; i++)
            if (newTime < this.list[i].time || this.list[i].time == null){
                //console.log('Una sola vez');
                break;
            }
        let instant1 = new Date();
        instant1.setHours(instant1.getHours()+2);
        let instant2 = instant1.toUTCString();
        this.list.splice(i, 0, {time: newTime, date: instant2});
        if (this.list.length > this.size)
            this.list.pop();
        //console.log(newTime);
        if (i < this.size)
            return i;
        else
            return -1;
    }

    loadFromStorage() {
        if (localStorage.sizeHOF !== undefined)
            this.size = JSON.parse(localStorage.sizeHOF);
        if (localStorage.listHOF !== undefined)
            this.list = JSON.parse(localStorage.listHOF);
    }

    saveToStorage() {
        localStorage.sizeHOF = JSON.stringify(this.size);
        localStorage.listHOF = JSON.stringify(this.list);
    }

    resetStorage() {
        localStorage.removeItem("sizeHOF");
        localStorage.removeItem("listHOF");
        this.list = [];
    }

    getSize() {
        return this.size;
    }

    setSize(thesize) {
        if (thesize !== undefined) {
            this.size = thesize;
            while (this.list.length > this.size)
                this.list.pop();
        }
    }

    displayOnStage(x, y, w, h) {
        let hT = Math.floor(0.25 * h);
        let sT = Math.floor(0.25 * 0.6 * h);
        let styleT = {font: '30px Talk Comic', fill: '#3c3c3c'};
        let title = game.add.text(game.world.width/2, 200, 'Ranking of Time Part C', styleT);
        title.anchor.setTo(0.5,0.5);

        let hL = Math.floor(0.75 * 0.1 * h);
        let sL = Math.floor(0.75 * 0.1 * 0.8 * h);
        let wCP = Math.floor(0.06 * w);
        let wCS = Math.floor(0.18 * w);
        let wCD = Math.floor(0.76 * w);
        let styleL = {font:sL+'px Arial', fill:'#3c3c3c',
                      boundsAlignH:'right', boundsAlignV:'bottom'};
        //console.log(this.list.length);

        let timeCalc;
        let secRest;
        let timePrint;

        for (let i = 0 ; i < this.list.length ; i++) {
            if(this.list[i].time != null){
                timePrint = '';
                this.placeL[i] = game.add.text(0, 0, i+1, styleL);
                this.placeL[i].setTextBounds(x-10, y+hT+hL*i, wCP, hL);

                timeCalc = this.list[i].time;
                secRest = timeCalc%60;
                if (timeCalc/60 < 10) {
                    timePrint = '0' + Math.floor(timeCalc/60);
                }
                else {
                    timePrint = Math.floor(timeCalc/60);
                }
                if (secRest < 10)
                    timePrint += ':0' + Math.floor(secRest);
                else
                    timePrint += ':' + Math.floor(secRest);
                if(Math.floor((secRest-Math.floor(secRest))*100)<10){
                    timePrint += ':0' + Math.floor((secRest-Math.floor(secRest))*100);
                }
                else{
                    timePrint += ':' + Math.floor((secRest-Math.floor(secRest))*100);
                }
                
                this.scoreL[i] = game.add.text(0, 0, timePrint, styleL);
                this.scoreL[i].setTextBounds(x+20+wCP, y+hT+hL*i, wCS, hL);

                this.dateL[i] = game.add.text(0, 0, this.list[i].date, styleL);
                this.dateL[i].setTextBounds(x+10+wCP+wCS, y+hT+hL*i, wCD, hL);
            }
        }
    }

    clearRankStage() {
        let sL = Math.floor(0.75 * 0.1 * 0.8 * 400);
        let styleL = {font:sL+'px Arial', fill:'#3c3c3c',
                      boundsAlignH:'right', boundsAlignV:'bottom'};
        for (let i = 0 ; i < this.list.length ; i++) {
            if(this.list[i].time != null){
                this.placeL[i].text = "";

                this.scoreL[i].text = "";

                this.dateL[i].text = "";
            }
        }
    }

}


let endState = {
    preload: preloadEnd,
    create: createEnd,
    update: updateEnd
};

function preloadEnd() {
    game.load.image('volver', 'assets/imgs/BotonReturn.png');
    game.load.image('transicion', 'assets/imgs/Transicion.png');
    game.load.image('fondoS', 'assets/imgs/madera.jpg');
    game.load.image('perga', 'assets/imgs/pergamino.png');
    game.load.audio('gameOver', 'assets/Audios/GameOver.wav');
    game.load.audio('winner', 'assets/Audios/Winner.wav');
    game.load.audio('gameSong', 'assets/Audios/MusicaPartida.mp3');
    game.load.image('cartel', 'assets/imgs/cart.png');
}

function createSoundsEnd() {
    gameOverSnd = game.add.audio('gameOver');
    winnerSnd = game.add.audio('winner');
    gameMusic = game.add.audio('gameSong');
    gameMusic.loop = true;
}

function createEnd() {

    //console.log("CUANTAS VECES");

    calcularTiempo();

    //Hall of Fame
        shooterHOF = new HallOfFame();
        shooterHOF.loadFromStorage();
    if(victory == 1){
        shooterHOF.addNewTime(tiempoTranscurrido);
        shooterHOF.saveToStorage();
    }

    game.input.enabled = true;
    //console.log("tiempoC: "+tiempoHastaParteC);
    //console.log("timeElapsed: "+ timeElapsed);
    //Fondo
    let w = game.world.width;
    let h = game.world.height;
    let fondo = game.add.tileSprite(0, 0, w*10, h*10, 'fondoS');
    fondo.anchor.setTo(0,0);
    fondo.scale.setTo(0.65,0.8);

    let perga = game.add.image(game.world.width/2, game.world.height/2 +10, 'perga');
    perga.anchor.setTo(0.5,0.5);
    perga.scale.setTo(1.1);

    cambio = false;

    lastTime = Math.round(game.time.totalElapsedSeconds());
    createRestartKey();
    createSoundsEnd();
    let posx1 = game.world.width/2;
    let posy1 = game.world.height/2 -280;
    let ExitButton = game.add.button(posx1, posy1+550, 'volver', OutButtonPressed);
    ExitButton.anchor.setTo(0.5,0.5);
    ExitButton.scale.setTo(0.3);
    ExitButton.angle = 13.06;
    money += score;

    let ResetButton = game.add.button(100, 300, 'cartel', ResetPressed);
    ResetButton.anchor.setTo(0.5,0.5);
    ResetButton.scale.setTo(0.06);

    //Tiempo
    let styleTime = {font: '20px Talk Comic', fill: '#e8cb9a'};
    let textTime = game.add.text(30, 610, 'Total time: ' + timeFormat, styleTime);

    //Puntuacion
    let textPunt = game.add.text(30, 660, 'Score: ' + score + ' pts.', styleTime);

    //Texto resetear rank
    let styleReset = {font: '20px Talk Comic', fill: '#3c3c3c'};
    let ResetRank = game.add.text(100, 300, 'Reset \nranking', styleReset);
    ResetRank.anchor.setTo(0.5,0.5);
    ResetRank.angle = -5;
    

    //Resultado
    let resultText;
    let marginLeft;
    let styleInfo = {font: '20px Talk Comic', fill: '#e8cb9a'};
    if (victory == 1) {
        //Transicion Inicio
        transicionIN = game.add.image(0, 0, 'transicion');
        transicionIN.anchor.setTo(0,0);
        setTimeout(function() {TransitionIN(transicionIN);}, 100);
        winnerSnd.play();
        resultText = "YOU WIN!";
        marginLeft = 150;
        let textI = game.add.text(game.world.width/2, posy1 + 30, "Congratulations!! If you are not in the ranking, try to beat the established marks", styleInfo);
        textI.anchor.setTo(0.5,0.5);
    }
    else {
        gameOverSnd.play();
        resultText = "WHAT A SHAME!";
        marginLeft = 250;
        let textI = game.add.text(game.world.width/2, posy1 + 30, "Try to win and beat the marks to enter the ranking!", styleInfo);
        textI.anchor.setTo(0.5,0.5);
    }
    let styleResult = {font: '60px Talk Comic', fill: '#e8cb9a'};
    let textR = game.add.text(posx1-marginLeft, posy1-60, resultText, styleResult);
    let textW = game.add.text(810, 600, "Press 'enter' \nto start over \nat level A", styleInfo);

    shooterHOF.displayOnStage(263, 130, 500, 400);
}

function updateEnd() {
    if(cambio == false){
        if (restartKey.justDown) {
            cambio = true;
            transicion = game.add.image(0, 0, 'transicion');
            transicion.anchor.setTo(1,0);
            Transition(transicion);
            setTimeout(function(){
                winnerSnd.stop();
                gameOverSnd.stop();
                gameMusic.play();
                game.state.start("parteA");
            },600);
        }
        else if (Math.round(game.time.totalElapsedSeconds())-lastTime>20){
            cambio = true;
            transicion = game.add.image(0, 0, 'transicion');
            transicion.anchor.setTo(1,0);
            Transition(transicion);
            setTimeout(function(){game.state.start("init");},600);
        }
    }
}

function OutButtonPressed(){
    animButtons(this)
    if(cambio == false){
        cambio = true;
        transicion = game.add.image(0, 0, 'transicion');
        transicion.anchor.setTo(1,0);
        Transition(transicion);
        setTimeout(function(){game.state.start("init");},600);
    }
}

function createRestartKey() {
    restartKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
}

function ResetPressed(){
    shooterHOF.clearRankStage();
    shooterHOF.resetStorage();
    shooterHOF.loadFromStorage();
    shooterHOF.displayOnStage(263, 130, 500, 400);
}

function calcularTiempo(){
    tiempoTranscurrido = timeElapsed - tiempoHastaParteC;
    tiempoTranscurrido = tiempoTranscurrido.toFixed(2);
}