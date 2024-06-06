var sectionDetectors = document.querySelectorAll(".sectionDetector");

var projectsAnimations = [sectionDetectors.length];

for (let i = 0; i < sectionDetectors.length; i++) {
    projectsAnimations[i] = new IntersectionObserver((entry) => {
        DoSectionAnimations(entry[0]);
    });
}

for (let i = 0; i < sectionDetectors.length; i++) {
    projectsAnimations[i].observe(sectionDetectors[i]);
}


function DoSectionAnimations(element) {
    if (element.isIntersecting) {
        element.target.parentElement.style.opacity = 1;
    }
    else {
        element.target.parentElement.style.opacity = .3;
    }
}


const endAnimations = new IntersectionObserver((entry) => {
    DoEndAnimations(entry[0].isIntersecting);
});

endAnimations.observe(document.querySelector("#endDetector"));
function DoEndAnimations(onScreen) {
    let element = document.getElementById("returnText");
    if (onScreen) {
        element.style.opacity = .5;
    }
    else {
        element.style.opacity = 0;
    }
}

function HoverReturn(element) {
    element.style.opacity = 1;
}

function UnhoverReturn(element) {
    element.style.opacity = .5;
}