let gridSize = 16;
let container = document.querySelector('.container');
let gridArray = [];
function createGrid(gridSize) {
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            let column = document.createElement("div");
            //column.textContent = y;
            container.appendChild(column);
            column.classList.add("col");
        }
    }
    gridArray = document.getElementsByClassName("col");
    Array.from(gridArray).forEach((cell) => {
        cell.addEventListener("mouseover", event => {
            cell.style.backgroundColor = 'grey';
        });
    });
}
createGrid(gridSize);