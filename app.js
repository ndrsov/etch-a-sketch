const sketch = document.querySelector("#sketch");
const generateBtn = document.querySelector("#generateBtn");

const gridSize = 16 * 16;

generateBtn.addEventListener("click", createPixelGrid);

function createPixelGrid() {
  for (let i = 0; i < gridSize; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    sketch.appendChild(pixel);
  }
}
