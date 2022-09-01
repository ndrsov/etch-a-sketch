const sketch = document.querySelector("#sketch");
const resetBtn = document.querySelector("#reset-btn");
const userSize = document.querySelector("#size-selector");
const sizeLabel = document.querySelector("#size-label");
const userColor = document.querySelector("#user-color");
const eraser = document.querySelector("#eraser-btn");
const penBtn = document.querySelector("#pen-btn");
const colorBtn = document.querySelector("#color-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");

let mouseDown = false;
let brushColor = "#000000";
let paintMode = "PEN";

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
penBtn.addEventListener("click", (e) => {
  paintMode = "PEN";
  userColor.setAttribute("disabled", "");
});
colorBtn.addEventListener("click", (e) => {
  paintMode = "COLOR";
  userColor.removeAttribute("disabled");
});
eraser.addEventListener("click", (e) => {
  paintMode = "ERASER";
  userColor.setAttribute("disabled", "");
});
rainbowBtn.addEventListener("click", () => {
  paintMode = "RAINBOW";
  userColor.setAttribute("disabled", "");
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
  } else if (paintMode === "PEN") {
    brushColor = "#000000";
    e.target.style.backgroundColor = brushColor;
  } else if (paintMode === "COLOR") {
    brushColor = userColor.value;
    e.target.style.backgroundColor = brushColor;
  } else if (paintMode === "ERASER") {
    brushColor = "#FFFFFF";
    e.target.style.backgroundColor = brushColor;
  } else if (paintMode === "RAINBOW") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    brushColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
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
