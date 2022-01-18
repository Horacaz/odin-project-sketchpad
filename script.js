
const MAIN_CONTAINER = document.querySelector(".main-container");

for (i = 0; i < 25; i++){
let grid = document.createElement("div");

grid.className = "grid";

MAIN_CONTAINER.appendChild(grid);

}

let gridDiv = document.querySelectorAll(".grid");
console.log(gridDiv);
