const containerDiv = document.querySelector(".container");

// function promptGrid() {

// }

function getBoxSize() {
  let boxSize = Number(prompt("Enter box size within 16 - 100"));
  while (boxSize > 100 || boxSize < 16 || isNaN(boxSize)) {
    boxSize = Number(prompt("The value should be within 16 - 100"));
  }
  return boxSize;
}

let squareSize = 16;

function createGrid(size) {
  containerDiv.innerHTML = "";

  const column = Math.floor(window.innerWidth / size);
  const row = Math.floor(window.innerHeight / size);
  const screenSize = column * row;

  for (let i = 0; i <= screenSize; i++) {
    const squares = document.createElement("div");
    squares.classList.add("square");

    // update the text visual
    squares.style.cssText = `width: ${size}px; height: ${size}px`;
    console.log(squares.length);
    squares.addEventListener("mouseover", function () {
      squares.classList.add("colored");
    });
    containerDiv.appendChild(squares);
  }
}

const btnNewGrid = document.createElement("button");
btnNewGrid.textContent = "Insert new grid";
btnNewGrid.style.cssText = `background-color: royalblue; color: white; margin-bottom : 16px; padding : 10px; border: none; border-radius: 8px; cursor: pointer`;

btnNewGrid.addEventListener("click", function () {
  squareSize = getBoxSize();
  return createGrid(squareSize);
});

containerDiv.insertAdjacentElement("beforebegin", btnNewGrid);

createGrid(squareSize);

function randomColor() {}
