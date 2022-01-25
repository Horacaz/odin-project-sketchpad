
const $mainContainer = document.querySelector(".main-container");
const $gridAmountButton = document.querySelector(".grid-number");
const $colorInput = document.querySelector(".color");
const $cleanButton = document.querySelector(".clean-grid");
const $rainbowModeButton = document.querySelector(".rainbow-mode");
createGrid(20);



$gridAmountButton.onclick = function () {
    resetGrid();
    const input = document.querySelector(".options .number");
    let gridAmount = input.value;
    createGrid(gridAmount);

    const $grid = document.querySelectorAll(".grid");
    $grid.forEach(element => element.onmouseover = function () {
        element.style.cssText = `background-color:${$colorInput.value};`;
        })
}

function resetGrid(){
    const $grid = document.querySelectorAll(".grid")
    for(i = 0; i < $grid.length; i++){
       document.querySelector(".grid").remove();
        }
}


$cleanButton.onclick = function(){cleanGrid()};

$rainbowModeButton.onclick = function(){rainbowMode()};


function createGrid(gridAmount) {
    $mainContainer.style.cssText = `grid-template-columns: repeat(${gridAmount}, 1fr);
    grid-template-rows: repeat(${gridAmount}, 1fr);`;

    for (i = 0; i < (gridAmount * gridAmount); i++) {
        let grid = document.createElement("div");
        grid.className = "grid";

        $mainContainer.appendChild(grid);

    }
}

function cleanGrid() {
    const $grid = document.querySelectorAll(".grid");
        for (i = 0; i < $grid.length; i++) {
            $grid[i].style.cssText = 'background-color: white';
        }
}
function rainbowMode(){
    const $grid = document.querySelectorAll(".grid");
        $grid.forEach(element => element.onmouseover = function () {
            element.style.cssText = `background-color:#${Math.floor(Math.random() * 16777215).toString(16)};`;
        })
    }
