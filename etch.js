let gridSize = 20;
const container = document.querySelector('.container');
const btnReset = document.querySelector('.reset');
const btnGridSize = document.querySelector('.gridSize');
let gridArray = [];


function createGrid(gridSize) {
    container.innerHTML = ''
    for (let x = 0; x < gridSize; x++) {
        let row = document.createElement("div");
        container.appendChild(row);
        row.classList.add("row");
        for (let y = 0; y < gridSize; y++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
    }
    gridArray = document.getElementsByClassName("cell");
    Array.from(gridArray).forEach((cell) => {
        cell.addEventListener("mouseover", event => {
            cell.style.backgroundColor = 'grey';
        });
    });
}
btnReset.addEventListener("click", event => {
    createGrid(gridSize);
});

btnGridSize.addEventListener("click", event => {
    gridSize=prompt('What size');
    createGrid(gridSize);
});

createGrid(gridSize);