const sketch = document.querySelector("#sketch");
const resetBtn = document.querySelector("#reset-btn");
const userSize = document.querySelector("#size-selector");

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

resetBtn.addEventListener("click", reset);
userSize.addEventListener("change", () => {
  let gridSize = parseInt(userSize.value);
  setupGrid(gridSize);
  reset();
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

function reset() {
  const gridUnits = sketch.childNodes;
  for (const gridUnit of gridUnits) {
    gridUnit.style.backgroundColor = "white";
  }
}

window.onload = () => {
  setupGrid(32);
};
