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

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => cell.addEventListener('mouseover',leaveTrace));

function leaveTrace(e) {
    if (e.target.style.backgroundColor === 'blue') {
        e.target.style.backgroundColor = 'red';
    } else {
        e.target.style.backgroundColor = 'blue';
    }
}