document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('single-player-board');
    const cells = board.querySelectorAll('.cell');
    let currentPlayer = 'X';
    let gameBoard = Array(9).fill(null);

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const index = cell.dataset.index;
            if (!gameBoard[index] && currentPlayer === 'X') {
                gameBoard[index] = currentPlayer;
                cell.textContent = currentPlayer;
                cell.classList.add(currentPlayer === 'X' ? 'x' : 'o');
                if (checkWinner(gameBoard)) {
                    setWinner(currentPlayer);
                } else if (gameBoard.every(cell => cell)) {
                    setWinner('Draw');
                } else {
                    currentPlayer = 'O';
                    aiMove();
                }
            }
        });
    });

    function resetGame() {
        gameBoard = Array(9).fill(null);
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o');
        });
        currentPlayer = 'X';
    }

    window.resetGame = resetGame;

    function aiMove() {
        const emptyCells = gameBoard.map((cell, index) => cell === null ? index : null).filter(index => index !== null);
        const move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        gameBoard[move] = 'O';
        cells[move].textContent = 'O';
        cells[move].classList.add('o');
        if (checkWinner(gameBoard)) {
            setWinner('O');
        } else if (gameBoard.every(cell => cell)) {
            setWinner('Draw');
        } else {
            currentPlayer = 'X';
        }
    }

    function checkWinner(board) {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return board[a] && board[a] === board[b] && board[a] === board[c];
        });
    }

    function setWinner(winner) {
        localStorage.setItem('winner', winner);
        window.location.href = 'result.php';
    }
});