let svg = document.getElementsByTagName("svg")[0]
svg.addEventListener('click', teleport, false);
let ghost = document.createElement("circle");
function teleport(event) {
    ghost.setAttribute("cx", event.offsetX.toString());
    ghost.setAttribute("cy", event.offsetY.toString());
}