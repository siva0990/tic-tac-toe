<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe - Multiplayer</title>
    
    <script src="multiplayer.js" defer></script>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            background: linear-gradient(135deg, #667eea, #764ba2);
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: #ffffff;
        }

        h1 {
            margin-top: 20px;
            font-size: 2.5em;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .game-board {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            gap: 10px;
            justify-content: center;
            margin: 20px auto;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .cell {
            width: 100px;
            height: 100px;
            background-color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 36px;
            cursor: pointer;
            border: 2px solid #90a4ae;
            border-radius: 5px;
            transition: background-color 0.3s, transform 0.3s;
            color: #000; /* Default text color */
        }

        .cell:hover {
            background-color: #f1f1f1;
            transform: scale(1.05);
        }

        .cell.x {
            color: #ff5e62; /* Red color for X */
            font-weight: bold;
        }

        .cell.o {
            color: #667eea; /* Blue color for O */
            font-weight: bold;
        }

        button, a {
            display: inline-block;
            margin: 10px;
            padding: 10px 20px;
            font-size: 16px;
            text-decoration: none;
            color: white;
            background-color: #ff5e62;
            border-radius: 5px;
            border: none;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s, transform 0.3s;
        }

        button:hover, a:hover {
            background-color: #ff7b7b;
            transform: scale(1.05);
        }

        button:focus, a:focus {
            outline: none;
            box-shadow: 0 0 0 2px #ff7b7b;
        }

        .controls {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
        }

        .turn-indicator {
            font-size: 1.5em;
            margin-top: 10px;
            color: #ffffff;
        }

        /* Add this to your existing CSS */
@keyframes pulse {
    0% {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.5);
    }
    100% {
        text-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 1);
    }
}

.turn-indicator {
    font-size: 1.5em;
    margin-top: 10px;
    color: #ffffff;
    animation: pulse 1s infinite alternate;
}

    </style>
</head>
<body>
    <h1>Tic Tac Toe - Multiplayer</h1>
    <div class="turn-indicator" id="turn-indicator">Current Turn: X</div>
    <div class="game-board" id="multiplayer-board">
        <div class="cell" data-index="0"></div>
        <div class="cell" data-index="1"></div>
        <div class="cell" data-index="2"></div>
        <div class="cell" data-index="3"></div>
        <div class="cell" data-index="4"></div>
        <div class="cell" data-index="5"></div>
        <div class="cell" data-index="6"></div>
        <div class="cell" data-index="7"></div>
        <div class="cell" data-index="8"></div>
    </div>
    <div class="controls">
        <button onclick="resetGame()">Restart</button>
        <a href="index.php">Back to Menu</a>
    </div>
</body>
</html>
