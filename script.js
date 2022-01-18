
const MAIN_CONTAINER = document.querySelector(".main-container");

for (i = 0; i < 256; i++) {
    let grid = document.createElement("div");

    grid.className = "grid";

    MAIN_CONTAINER.appendChild(grid);

}


const $grid = document.querySelectorAll(".grid");
$grid.forEach(grid => grid.onmouseover = function () {
    grid.classList="black";
})
