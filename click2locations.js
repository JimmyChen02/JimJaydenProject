let svg = document.getElementsByTagName("svg")

let ghosts = [];
let colors = ["red", "green", "blue", "yellow", "cyan", "magenta", "black", "purple", "orange"];
let eyeRadius = 20;
let pupilRadius = 10;
let headRadius = 60;
let bodyWidth = 2 * headRadius;
let bodyHeight = 100;
let eyeSpacing = 25; //from center of head
let canvas = document.getElementById("canvas");
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
    // ghost.setAttribute("x", (cx-60).toString());
    // ghost.setAttribute("y", (cy).toString());
    // ghost.setAttribute("width", bodyWidth);
    // ghost.setAttribute("height", bodyHeight);
    
    // body.setAttribute("x", (cx-60).toString());
    // body.setAttribute("y", (cy).toString());
    // body.setAttribute("width", bodyWidth);
    // body.setAttribute("height", bodyHeight);
    // canvas.appendChild(ghost);
    ghost.appendChild(createRectangle(cx-headRadius, cy, 2*headRadius, 2*headRadius, color));
    canvas.appendChild(ghost);
    //ball legs
    ghost.appendChild(createCircle(cx-bodyWidth/3, cy+bodyHeight+15, headRadius/3, color));
    ghost.appendChild(createCircle(cx-bodyWidth/3+40, cy+bodyHeight+15, headRadius/3, color));
    ghost.appendChild(createCircle(cx-bodyWidth/3+80, cy+bodyHeight+15, headRadius/3, color));
    //eyes
    ghost.appendChild(createCircle(cx-eyeSpacing, cy, headRadius/4, "white"));
    ghost.appendChild(createCircle(cx+eyeSpacing, cy, headRadius/4, "white"));
    //pupils
    ghost.appendChild(createCircle(cx-eyeSpacing, cy, headRadius/9, "black"));
    ghost.appendChild(createCircle(cx+eyeSpacing, cy, headRadius/9, "black"));
}
function createCircle(x, y, radius, color) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", color);
    return circle
}

function createRectangle(x1, y1, w, h, color){
    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x1);
    rect.setAttribute("y", y1);
    // rect.setAttribute("cx+headRadius", x2);
    rect.setAttribute("width", w);
    rect.setAttribute("height", h);

    rect.setAttribute("fill", color);
    return rect;

}
let pupil = document.getElementsByClassName("pupil")
canvas.addEventListener('mousemove', move, false)
function move(event) {
    var x = event.clientX;
    var y = event.clientY;
    canvas.style.left = x + "px";
    canvas.style.top = y + "px";
}
