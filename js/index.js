const BLACK = "#1b1b1b";
const WHITE = "#dcdcdc"
const PINK = "#af6969";
const CONFETTI_NUM = 45;
const CONFETTI_MAX_DURATION = 2;
const WHEEL_DURATION = 5;

var wheelSpinning = false;
var menuDisplayed = false;
var confettiSprites = [ "star_confetti.png",
                        "diamond_confetti.png",
                        "heart_confetti.png",
                        "like_confetti.png"
];

const mainAnimations = new IntersectionObserver((entries) => {
    DoMainAnimations(entries[0].isIntersecting);
});

const aboutMeAnimations = new IntersectionObserver((entries) => {
    DoAboutMeAnimations(entries[0].isIntersecting);
});

const myProjectsAnimations = new IntersectionObserver((entries) => {
    DoProjectsAnimations(entries[0].isIntersecting);
});

const mySkillsAnimations = new IntersectionObserver((entries) => {
    DoSkillsAnimations(entries[0].isIntersecting);
});

const reachOutAnimations = new IntersectionObserver((entries) => {
    DoReachOutAnimations(entries[0].isIntersecting);
});

mainAnimations.observe(document.querySelector("#detector"));

function DoMainAnimations(onScreen) {
    let mainIndex = document.getElementById("mainIndex");
    let mainCovers = Array.from(document.getElementsByClassName("mainCovers"));
    let navContainer = document.getElementById("navContainer");
    let aboutMeContainer = document.getElementById("aboutMeContainer");
    let scrollTop = document.getElementById("scrollTop");

    if (onScreen) {
        mainCovers.forEach((item) => {
            item.classList.remove("mainCoversEnd");
            item.classList.add("mainCoversStart");
        });
        mainIndex.classList.remove("mainIndexStart");
        mainIndex.classList.add("mainIndexEnd");

        if (window.screen.width/window.screen.height > 4/3) {
            navContainer.classList.remove("navContainerEnd");
            navContainer.classList.add("navContainerStart");
        }

        aboutMeContainer.classList.remove("aboutMeContainerEnd");
        aboutMeContainer.classList.remove("aboutMeContainerHide");
        aboutMeContainer.classList.add("aboutMeContainerStart");

        scrollTop.classList.remove("scrollTopLighten");
    }
    else {
        mainCovers.forEach((item) => {
            item.classList.remove("mainCoversStart");
            item.classList.add("mainCoversEnd");
        });
        mainIndex.classList.remove("mainIndexEnd");
        mainIndex.classList.add("mainIndexStart");

        if (window.screen.width/window.screen.height > 4/3) {
            navContainer.classList.remove("navContainerStart");
            navContainer.classList.add("navContainerEnd");
        }

        aboutMeContainer.classList.remove("aboutMeContainerStart");
        aboutMeContainer.classList.add("aboutMeContainerEnd");

        scrollTop.classList.add("scrollTopLighten");
    }
}

function DisplayNav() {
    let navContainer = document.getElementById("navContainer");
    let navDisplayer = document.getElementById("navDisplayer");
    if (menuDisplayed) {
        navDisplayer.classList.remove("navDisplayerStart");
        navDisplayer.classList.add("navDisplayerEnd");

        navContainer.classList.remove("navContainerStart");
        navContainer.classList.add("navContainerEnd");
        menuDisplayed = false;
    }
    else {
        navDisplayer.classList.remove("navDisplayerEnd");
        navDisplayer.classList.add("navDisplayerStart");

        navContainer.classList.remove("navContainerEnd");
        navContainer.classList.add("navContainerStart");
        menuDisplayed = true;
    }
}

aboutMeAnimations.observe(document.querySelector("#aboutMeDetector"));

function DoAboutMeAnimations(onScreen) {
    let aboutMeMenu = document.getElementById("aboutMeMenu");
    let aboutMeContainer = document.getElementById("aboutMeContainer");
    if (onScreen) {
        aboutMeMenu.classList.add("menuButtonLighten");
        aboutMeContainer.style.opacity = 1;
    }
    else {
        aboutMeMenu.classList.remove("menuButtonLighten");
        aboutMeContainer.style.opacity = .2;
    }
}

myProjectsAnimations.observe(document.querySelector("#projectsDetector"));

function DoProjectsAnimations(onScreen) {
    let projectsContainer = document.getElementById("projectsContainer");
    let myProjectsMenu = document.getElementById("myProjectsMenu");
    if (onScreen) {
        myProjectsMenu.classList.add("menuButtonLighten");
        projectsContainer.style.opacity = 1;
    }
    else {
        myProjectsMenu.classList.remove("menuButtonLighten");
        projectsContainer.style.opacity = .2;
    }
}

mySkillsAnimations.observe(document.querySelector("#skillsDetector"));

function DoSkillsAnimations(onScreen) {
    let skillsContainer = document.getElementById("skillsContainer");
    let mySkillsMenu = document.getElementById("mySkillsMenu");
    if (onScreen) {
        mySkillsMenu.classList.add("menuButtonLighten");
        skillsContainer.style.opacity = 1;
    }
    else {
        mySkillsMenu.classList.remove("menuButtonLighten");
        skillsContainer.style.opacity = .2;
    }
}

reachOutAnimations.observe(document.querySelector("#reachOutDetector"));

function DoReachOutAnimations(onScreen) {
    let reachOutContainer = document.getElementById("reachOutContainer");
    let reachOutMenu = document.getElementById("reachOutMenu");
    let downloadButton = document.getElementById("downloadButton");
    if (onScreen) {
        reachOutMenu.classList.add("menuButtonLighten");
        downloadButton.classList.remove("downloadButtonEnd");
        downloadButton.classList.add("downloadButtonStart");

        reachOutContainer.style.opacity = 1;
    }
    else {
        reachOutMenu.classList.remove("menuButtonLighten");
        downloadButton.classList.remove("downloadButtonStart");
        downloadButton.classList.add("downloadButtonEnd");

        reachOutContainer.style.opacity = .2;
    }
}

function HoverWheel() {
    if (!wheelSpinning && window.screen.width/window.screen.height > 4/3) {
        let profilePic = document.getElementById("aboutMePPic");
        profilePic.children[0].style.opacity = 0;
        profilePic.style.width = "5%";
        profilePic.style.height = "5%";
        profilePic.style.boxShadow = "0 0 1.5vw 2px rgb(0, 0, 0), 0 0 0 1vw rgb(175, 105, 105), 0 0 0 1.3vw rgb(27, 27, 27)";
    }
}

function UnhoverWheel() {
    if (!wheelSpinning && window.screen.width/window.screen.height > 4/3) {
        let profilePic = document.getElementById("aboutMePPic");
        profilePic.children[0].style.opacity = 1;
        profilePic.style.width = "100%";
        profilePic.style.height = "100%";
        profilePic.style.boxShadow = "0 0 1.5vw 2px rgb(0, 0, 0), 0 0 0 1vw rgb(175, 105, 105)";
    }
}

function SpinWheel() {
    if (!wheelSpinning && window.screen.width/window.screen.height > 4/3) {
        wheelSpinning = true;
        let wheel = document.getElementById("wheel");
        let profilePic = document.getElementById("aboutMePPic");
        wheel.style.transition = "transform "+WHEEL_DURATION+"s cubic-bezier(.3, 0, .5, 1)";
        let angle = (Math.floor(Math.random()*4)*2*60)+360*5+Math.random()*60-30;
        wheel.style.transform = "rotateZ("+ angle +"deg)";
        profilePic.children[0].style.opacity = 0;
        profilePic.style.width = "5%";
        profilePic.style.height = "5%";
        profilePic.style.boxShadow = "0 0 1.5vw 2px rgb(0, 0, 0), 0 0 0 1vw rgb(175, 105, 105), 0 0 0 1.3vw rgb(27, 27, 27)";
        CreateConfetti();
    }
}

function CreateConfetti() {
    let confettiContainer = document.getElementById("confettiContainer");
    let confettiGravity;
    let confettiLeft;
    let confettiRight;
    let att;
    for (let i = 0; i < CONFETTI_NUM; i++) {
        confettiGravity = document.createElement("div");
        att = document.createAttribute("class");
        att.value = "confetti";
        confettiGravity.setAttributeNode(att);

        confettiLeft = document.createElement("img");
        att = document.createAttribute("class");
        att.value = "confettiLeft";
        confettiLeft.setAttributeNode(att);
        att = document.createAttribute("src");
        att.value = GetConfettiSprite();
        confettiLeft.setAttributeNode(att);
        confettiGravity.appendChild(confettiLeft);

        confettiContainer.appendChild(confettiGravity);

        confettiGravity = document.createElement("div");
        att = document.createAttribute("class");
        att.value = "confetti";
        confettiGravity.setAttributeNode(att);

        confettiRight = document.createElement("img");
        att = document.createAttribute("class");
        att.value = "confettiRight";
        confettiRight.setAttributeNode(att);
        att = document.createAttribute("src");
        att.value = GetConfettiSprite();
        confettiRight.setAttributeNode(att);
        confettiGravity.appendChild(confettiRight);

        confettiContainer.appendChild(confettiGravity);
    }
    setTimeout(() => {
        LaunchConfetti();
    }, WHEEL_DURATION*1000);
}

function GetConfettiSprite() {
    return "imgs/"+confettiSprites[Math.floor(Math.random()*confettiSprites.length)];
}

function LaunchConfetti(){
    let wheel = document.getElementById("wheel");
    let profilePic = document.getElementById("aboutMePPic");
    let confettiContainer = document.getElementById("confettiContainer");

    for (let i = 0; i < confettiContainer.children.length; i++) {
        if (confettiContainer.children[i].classList.length <= 1) {

            let confettiDuration = (Math.random() * (CONFETTI_MAX_DURATION - 1.5) + 1.5)*1000;

            confettiContainer.children[i].style.transition = "transform "+confettiDuration/2000+"s";
            confettiContainer.children[i].style.transitionTimingFunction = "cubic-bezier(0.33333, 0.66667, 0.66667, 1)";
            confettiContainer.children[i].style.transform = "translate(0, "+((Math.random() * (100 - 50) + 50)*-1)+"vh)";
            setTimeout(() => {
                confettiContainer.children[i].style.transition = "transform "+confettiDuration/2000+"s";
                confettiContainer.children[i].style.transitionTimingFunction = "cubic-bezier(0.33333, 0, 0.66667, 0.33333)";
                confettiContainer.children[i].style.transform = "translate(0, 100%)";
            }, confettiDuration/2);

            confettiContainer.children[i].children[0].style.transition = "all "+confettiDuration/1000+"s linear";
            if (confettiContainer.children[i].children[0].classList[0] == "confettiLeft")
                confettiContainer.children[i].children[0].style.transform = "translate("+(Math.random() * (120 - 20) + 20)+"vw, 0) rotateZ("+((Math.random() * (520 - 270) + 270)*-1)+"deg)";
            else
                confettiContainer.children[i].children[0].style.transform = "translate("+((Math.random() * (120 - 20) + 20)*-1)+"vw, 0) rotateZ("+(Math.random() * (520 - 270) + 270)+"deg)";

        }
    }
    setTimeout(() => {
        wheelSpinning = false;
        wheel.style.transition = "transform 0s";
        wheel.style.transform = "rotateZ(0deg)";
        profilePic.children[0].style.opacity = 1;
        profilePic.style.width = "100%";
        profilePic.style.height = "100%";
        profilePic.style.boxShadow = "0 0 1.5vw 2px rgb(0, 0, 0), 0 0 0 1vw rgb(175, 105, 105)";
        for (let i = 0; i < CONFETTI_NUM*2; i++)
            confettiContainer.removeChild(confettiContainer.children[0]);
    }, CONFETTI_MAX_DURATION*1000);
}

function DownloadCV() {
    let button = document.getElementById("downloadButton");
    let plusOne = document.createElement("div");
    let att = document.createAttribute("class");
    att.value = "plusOne";
    plusOne.setAttributeNode(att);
    plusOne.innerHTML = "+1";
    button.appendChild(plusOne);


    button.style.border = "2px solid #4be746";
    button.style.backgroundPosition = "50% 200%";
    setTimeout(() => {
        button.style.transition = "opacity 0.2s, scale 0.1s, translate 0.2s, box-shadow 0.1s, border 0.2s, background-image 0.2s, background-position 0s";
        button.style.backgroundPosition = "50% -100%";
        button.style.backgroundImage = "url('imgs/download_check.png')";
    }, 200);
    setTimeout(() => {
        button.style.transition = "opacity 0.2s, scale 0.1s, translate 0.2s, box-shadow 0.1s, border 0.2s, background-image 0.2s, background-position 0.2s";
        button.style.backgroundPosition = "50% 50%";
    }, 400);

    setTimeout(() => {
        button.style.border = "2px solid #af6969";
        button.style.backgroundPosition = "50% -100%";
    }, 1800);
    setTimeout(() => {
        button.style.transition = "opacity 0.2s, scale 0.1s, translate 0.2s, box-shadow 0.1s, border 0.2s, background-image 0.2s, background-position 0s";
        button.style.backgroundPosition = "50% 200%";
        button.style.backgroundImage = "url('imgs/download.png')";
    }, 2000);
    setTimeout(() => {
        button.style.transition = "opacity 0.2s, scale 0.1s, translate 0.2s, box-shadow 0.1s, border 0.2s, background-image 0.2s, background-position 0.2s";
        button.style.backgroundPosition = "50% 50%";

        button.removeChild(button.children[0]);
    }, 2200);
}