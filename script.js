
const MAIN_CONTAINER = document.querySelector(".main-container");
const $gridAmountButton = document.querySelector(".grid-number");

$gridAmountButton.onclick = function () {
    const input = document.querySelector(".options .number");
    let gridAmount = input.value;
    let mainContainer = document.querySelector('.main-container')
    mainContainer.style.cssText = `grid-template-columns: repeat(${gridAmount}, 1fr);
grid-template-rows: repeat(${gridAmount}, 1fr)`;

    for (i = 0; i < (gridAmount * gridAmount); i++) {
        let grid = document.createElement("div");

        grid.className = "grid";

        MAIN_CONTAINER.appendChild(grid);

    }

    const $grid = document.querySelectorAll(".grid");
    $grid.forEach(element => element.onmouseover = function () {
        element.classList = "black";
    })

}

