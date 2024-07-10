let gridSize=4;
let container = document.querySelector('.container');

function createGrid(gridSize){
    for(let x=0;x<gridSize;x++){
        for(let y=0;y<gridSize;y++){
        let column = document.createElement("div");
        column.textContent=x;
        container.appendChild(column);
        column.classList.add("col");
        //column.style.cssText="flex: 1 0 20%;margin: 5px;background-color: grey;color: orange;border: 1px black solid;padding: 5px;"
        }
    }
}
createGrid(gridSize);

// adds class "new" to your new div
//div.classList.add("new");
// removes "new" class from div
//div.classList.remove("new");
// if div doesn't have class "active" then add it, or if it does, then remove it
//div.classList.toggle("active");