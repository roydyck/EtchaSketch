const scratchpad = document.querySelector('.scratchpad');

const ROWS = 100;
const columns = ROWS;






for (let i = 0; i < ROWS; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    scratchpad.appendChild(row);

    for (let j = 0; j < columns; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
}