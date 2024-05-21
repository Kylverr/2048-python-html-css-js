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
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile);
        }
    }
            
}

document.addEventListener("keyup", (e) => {
    if (e.code == "ArrowUp") {
        slideUp();
    }
    else if (e.code == "ArrowLeft") {
        slideLeft();
    }
    else if (e.code == "ArrowRight") {
        slideRight();
    }
    else if (e.code == "ArrowDown") {
        slideDown();
    }
    
});

function slideLeft() {
    for(let r = 0; r < rows; ++r) {
        let curRow = board[r];
        curRow = slide(curRow);
        board[r] = curRow;

        for (let c = 0; c < columns; ++c) {
            let id = r * 4 + c;
            console.log(id);
            let tile = document.getElementById(id.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

function slideRight() {
    for(let r = 0; r < rows; ++r) {
        let curRow = board[r];
        curRow.reverse();
        curRow = slide(curRow);
        curRow.reverse();
        board[r] = curRow;

        for (let c = 0; c < columns; ++c) {
            let id = r * 4 + c;
            console.log(id);
            let tile = document.getElementById(id.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

function slideUp() {
    for (let c = 0; c < columns; ++c) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row = slide(row);

        for (let r = 0; r < rows; ++r) {
            board[r][c] = row[r];
            let id = r * 4 + c;
            console.log(id);
            let tile = document.getElementById(id.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

function slideDown() {
    for (let c = 0; c < columns; ++c) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row.reverse();
        row = slide(row);
        row.reverse();

        for (let r = 0; r < rows; ++r) {
            board[r][c] = row[r];
            let id = r * 4 + c;
            console.log(id);
            let tile = document.getElementById(id.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

function removeZeros(row) {
    return row.filter(num => num != 0);
}

function slide(row) {
    row = removeZeros(row); // remove zeros

    for (let i = 0; i < row.length - 1; ++i) {
        if (row[i] == row[i + 1]) {
            row[i] *= 2;
            row[i + 1] = 0;
            score += row[i];
        }
    }

    row = removeZeros(row);

    // add zeros back
    for (let i = row.length; i < columns; ++i) {
        row[i] = 0;
    }

    return row;
}

function updateTile(tile, num) {
    tile.innerText = "";
    tile.classList = "";
    tile.classList.add("tile");
    if (num > 0) {
        tile.innerText = num;
        if (num <= 4096) {
            tile.classList.add("x" + num.toString());
        }
        else {
            tile.classList.add("x8192");
        }
    }
}