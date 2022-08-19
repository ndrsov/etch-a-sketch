const sketch = document.querySelector("#sketch");

const gridSize = 16 * 16;

for (let i = 0; i < gridSize; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.addEventListener("click", () => {
    pixel.style.backgroundColor = "black";
  });
  sketch.appendChild(pixel);
}
