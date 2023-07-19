let svg = document.getElementsByTagName("svg")[0]
svg.addEventListener('click', addRandomGhost, false);
let bodyWidth = 2 *headRadius;
let bodyHeight = 100;
let eyeSpacing = 25;
let ghost = document.getElementsByTagName("svg").createElementNS("http://www.w3.org/2000/svg");
function addRandomGhost(event) {
    let cx = event.offsetX
    let cy = event.offsetY
    let color = color(Math.floor(colors.length * Math.random()));
    let ghost = document.getElementsByTagName("svg").createElementNS("http://www.w3.org/2000/svg");
    ghost.appendChild.createCircle(cx, cy, headRadius, color);
    let body = document.createElementNUS("http://www.w3.org/2000/svg", "rect");
    
    body.setAttribute("x", (cx-60).toString());
    body.setAttribute("y", (cy).toString());
    body.setAttribute("width", bodyWidth);
    body.setAttribute("height", bodyHeight);
}

// movement

let pupil = document.getElementsByClassName("pupil")
svg.addEventListener('mousemove', move, false)
function move(event) {
    let dx = 0;
    let dy = 0;
    if (tx != ox) {
        let m = (ty - oy) / (tx - ox);
        dx = Math.sign(tx - ox) * ds / Math.sqrt(1 + m * m);
        dy = m * dx;
    }
    else {
        dy = Math.sign(ty -oy)*ds;
    }
    let x = ox + dx;
    let y = oy + dy; 
}