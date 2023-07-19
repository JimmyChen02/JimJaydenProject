let svg = document.getElementsByTagName("svg")

let ghosts = [];
let colors = ["red", "green", "blue", "yellow", "cyan", "magenta", "black", "purple", "orange"];
let eyeRadius = 20;
let pupilRadius = 10;
let headRadius = 60;
let bodyWidth = 2 * headRadius;
let bodyHeight = 100;
let eyeSpacing = 25; //from center of head
let canvas = document.getElementsByClassName("box")[0];
canvas.addEventListener('click', addRandomGhost, false);
function addRandomGhost(event) {
    let cx = event.offsetX;
    let cy = event.offsetY;
    let color = colors[Math.floor(colors.length * Math.random())];
    let ghost = document.createElementNS("http://www.w3.org/2000/svg", "g");
    ghost.setAttribute("x", cx - headRadius);
    ghost.setAttribute("y", cy - headRadius);
    ghost.appendChild(createCircle(cx, cy, headRadius, color));
    // ghost.appendChild(createCircle(cx, cy, headRadius, color));
    // let body = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    ghost.setAttribute("x", (cx-60).toString());
    ghost.setAttribute("y", (cy).toString());
    ghost.setAttribute("width", bodyWidth);
    ghost.setAttribute("height", bodyHeight);
    canvas.appendChild(ghost);
    // body.setAttribute("x", (cx-60).toString());
    // body.setAttribute("y", (cy).toString());
    // body.setAttribute("width", bodyWidth);
    // body.setAttribute("height", bodyHeight);
    ghost.setAttribute
}
function createCircle(x, y, radius, color) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", color);
    return circle
}


