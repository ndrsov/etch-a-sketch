const sketch = document.querySelector("#sketch");
const resetBtn = document.querySelector("#reset-btn");
const userSize = document.querySelector("#size-selector");
const sizeLabel = document.querySelector("#size-label");
const userColor = document.querySelector("#user-color");

let mouseDown = false;
let brushColor = "#000000";
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

resetBtn.addEventListener("click", reset);
userSize.addEventListener("change", () => {
  let gridSize = parseInt(userSize.value);
  setupGrid(gridSize);
  sizeLabel.textContent = `${userSize.value} x ${userSize.value}`;
  reset();
});

userColor.addEventListener("input", (e) => {
  brushColor = e.target.value;
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
    e.target.style.backgroundColor = brushColor;
  }
}

function reset() {
  const gridUnits = sketch.childNodes;
  for (const gridUnit of gridUnits) {
    gridUnit.style.backgroundColor = "white";
  }
}

window.onload = () => {
  setupGrid(16);
};
