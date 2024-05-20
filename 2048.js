var board;
var score = 0;
var rows = 4;
var columns = 4;

window.onload = function() {
    setupGame();
}

function setupGame() {
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

    for(let r = 0; r < rows; ++r) {
        for(let c = 0; c < columns; ++c) {
            let tile = document.createElement("div");
            let id = r * 4 + c;
            tile.id = id.toString();
            tile.innerText = "0";
            tile.classList.add("grid-item");
            document.getElementById("board").append(tile);
        }
    }
            
}

document.addEventListener("keyup");