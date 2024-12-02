const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouseX = 0;
var mouseY = 0;

const words = [
  ["JAVASCRIPT", "MYSQL", "C++"],
  ["PYTHON", "C#", "HTML5", "CSS"],
];

const fontSize = 50;
ctx.font = `${fontSize}px Impact`;
ctx.textBaseline = "top";

const textHeight = fontSize + 5;
const columnOffset = -60;
const maxDistance = 500;

function drawWordWithMouseDistortion(word, x, y) {
    ctx.save();

    let wordX = x+ctx.measureText(word).width/2;
    let wordY = y+fontSize/2;

    const distance = Distance(mouseX, mouseY, wordX, wordY);
    const intensity = DistanceBrightness(distance);

    const deltaX = mouseX - wordX;
    const deltaY = mouseY - wordY;
    const angleX = deltaY / maxDistance;
    const angleY = deltaX / maxDistance;

    const scale = 1 + intensity * 0.3;

    ctx.translate(wordX, wordY);
    ctx.transform(1, angleX * intensity, angleY * intensity, 1, 0, 0);

    ctx.fillStyle = "rgba(255, 255, 255, " + (intensity*.3) + ")";
    ctx.translate(-wordX + deltaX*intensity*.2, -wordY + deltaY*intensity*.2);
    ctx.fillText(word, x, y);

    ctx.restore();
}

function fillCanvas() {
    let y = 0;
    let row = 0;
    let x = 0;
    let col = 0;
    let textWidth;

    while (y < canvas.height) {
        x = columnOffset * (row%4);
        col = 0;

        while (x < canvas.width) {
            const word = words[row % 2][col];
            textWidth = ctx.measureText(word).width + 7;
            drawWordWithMouseDistortion(word, x, y);
            x += textWidth;
            col = (col + 1) % words[row%2].length;
        }

        row++;
        y = row*textHeight;
    }
}

function GetColor(distance) {
    let result = "rgba(255, 255, 255, " + (DistanceBrightness(distance) *.3) + ")";
    console.log(result);
    return result;
}

function DistanceBrightness(distance) {
    if (distance <= 0)
        return 1;
    if (distance >= maxDistance)
        return 0;
    //const base = 10;

    const normalized = Math.log(maxDistance / distance) / Math.log(maxDistance);
    console.log("Distance: " + normalized);
    return normalized;
}

function Distance(x1, y1, x2, y2) {
    console.log("x1: "+x1 +", y1: "+y1+ ", x2: "+x2 +", y2: "+y2 + ", Dist: "+Math.hypot(x2 - x1, y2 - y1));
    return Math.hypot(x2 - x1, y2 - y1);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fillCanvas();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

window.addEventListener("scroll", function() {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const scrollPosition = window.scrollY;
    const maxOpacityDistance = 1000;
    const mainOpacity = Math.max(1 - scrollPosition / maxOpacityDistance, 0);
    const footerOpacity = Math.max(1 - (document.documentElement.scrollHeight - (scrollPosition+window.innerHeight)) / maxOpacityDistance, 0);
    main.style.opacity = mainOpacity;
    footer.style.opacity = footerOpacity;
});