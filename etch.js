let gridSize=16;
let container = document.querySelector('.container');

function createGrid(gridSize){
    for(let i=0;i<gridSize;i++){
        let column = document.createElement("div");
        column.textContent="Added";
        container.appendChild(column);
    }
}
createGrid(gridSize);