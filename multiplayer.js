document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('multiplayer-board');
    const cells = board.querySelectorAll('.cell');
    const turnIndicator = document.getElementById('turn-indicator');
    let currentPlayer = 'X';
    let gameBoard = Array(9).fill(null);

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const index = cell.dataset.index;
            if (!gameBoard[index]) {
                gameBoard[index] = currentPlayer;
                cell.textContent = currentPlayer;
                cell.classList.add(currentPlayer === 'X' ? 'x' : 'o');
                if (checkWinner(gameBoard)) {
                    setWinner(currentPlayer);
                } else if (gameBoard.every(cell => cell)) {
                    setWinner('Draw');
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    updateTurnIndicator();
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
        updateTurnIndicator();
    }

    window.resetGame = resetGame;

    function updateTurnIndicator() {
        turnIndicator.textContent = `Current Turn: ${currentPlayer}`;
        turnIndicator.style.animation = 'none'; 
        void turnIndicator.offsetWidth; 
        turnIndicator.style.animation = 'pulse 1s infinite alternate'; // Restart animation
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

    function showColorEffect() {
        const colors = ['#ff5e62', '#ff7b7b', '#ff9d9d', '#ffb8b8', '#ffd2d2'];
        const effectContainer = document.createElement('div');
        effectContainer.className = 'color-effect';
        document.body.appendChild(effectContainer);

        for (let i = 0; i < 100; i++) {
            const paper = document.createElement('div');
            paper.className = 'paper';
            paper.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            paper.style.width = `${Math.random() * 20 + 10}px`;
            paper.style.height = paper.style.width;
            paper.style.left = `${Math.random() * 100}vw`;
            paper.style.top = `${Math.random() * 100}vh`;
            effectContainer.appendChild(paper);
            setTimeout(() => {
                paper.style.transform = `translateY(${Math.random() * -200}px)`;
                paper.style.opacity = '0';
            }, 10);
        }

        setTimeout(() => {
            document.body.removeChild(effectContainer);
        }, 2000);
    }

    function setWinner(winner) {
        localStorage.setItem('winner', winner);
        showColorEffect();
        window.location.href = 'result.html';
    }

    updateTurnIndicator();
});
