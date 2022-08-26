const sketch = document.querySelector("#sketch");
const resetBtn = document.querySelector("#reset-btn");

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

resetBtn.addEventListener("click", () => {
  const gridUnits = sketch.childNodes;
  for (const gridUnit of gridUnits) {
    gridUnit.style.backgroundColor = "white";
  }
});

function setupGrid(size) {
  sketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketch.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("mouseover", paint);
    pixel.addEventListener("mousedown", paint);
    sketch.appendChild(pixel);
  }
}

function paint(e) {
  if (e.type === "mouseover" && !mouseDown) {
    return;
  } else {
    e.target.style.backgroundColor = "black";
  }
}

window.onload = () => {
  setupGrid(32);
};
