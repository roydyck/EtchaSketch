function leaveTrace(e) {
    /*if (e.target.style.backgroundColor === 'blue') {
        e.target.style.backgroundColor = 'red';
    } else {
        e.target.style.backgroundColor = 'blue';
    }*/
    e.target.style.backgroundColor = randomColor();
}

function pressClear() {
    cells.forEach(cell => cell.style.removeProperty('background-color'));
    let rows = gridSize();
    scratchpad.remove();
    initializeGrid(rows);
}

function gridSize() {
    let rows = prompt("How many squares per side do you want?");
    if (rows > 100) {
        rows = 100;
    } else if (rows < 1) {
        rows = 1;
    }

    return rows;
}

function initializeGrid(size = 50) {
    let rows = size;
    let columns = rows;

    const container = document.getElementById('container');
    const scratchpad = document.createElement('div');
    scratchpad.setAttribute('id', 'scratchpad');

    container.appendChild(scratchpad);


    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        scratchpad.appendChild(row);

        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }

    getCells();
}

function getCells() {
    cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover',leaveTrace));
}

function randomColor() {
    let r = randomColorNumber();
    let g = randomColorNumber();
    let b = randomColorNumber();
    return `rgb(${r}, ${g}, ${b})`;
}

function randomColorNumber() {
    return Math.floor(Math.random() * 256);
}

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', pressClear);

let cells;
initializeGrid();

