
const MAIN_CONTAINER = document.querySelector(".main-container");
const $gridAmountButton = document.querySelector(".grid-number");
let colorInput = document.querySelector(".color");

$gridAmountButton.onclick = function () {
    

    const input = document.querySelector(".options .number");
    let gridAmount = input.value;
    let mainContainer = document.querySelector('.main-container')
    mainContainer.style.cssText = `grid-template-columns: repeat(${gridAmount}, 1fr);
    grid-template-rows: repeat(${gridAmount}, 1fr);`;

    createGrid(gridAmount);
    const $grid = document.querySelectorAll(".grid");
    $grid.forEach(element => element.onmouseover = function () {
        element.style.cssText = `background-color:${colorInput.value};`;
    })

    let $cleanGrid = document.querySelector(".clean-grid")
    $cleanGrid.onclick = function (){
        for (i = 0; i < $grid.length; i++){
            $grid[i].style.cssText = 'background-color: white';
        }
    }

    let $rainbowMode = document.querySelector(".rainbow-mode");
    $rainbowMode.onclick = function () {

        $grid.forEach(element => element.onmouseover = function () {
            element.style.cssText = `background-color:#${Math.floor(Math.random() * 16777215).toString(16)};`;
        })

    }

}
function createGrid(gridAmount) {

    for (i = 0; i < (gridAmount * gridAmount); i++) {
        let grid = document.createElement("div");

        grid.className = "grid";

        MAIN_CONTAINER.appendChild(grid);

    }
}


