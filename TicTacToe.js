import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  // Initialize state for the board and turn
  const [board, setBoard] = useState(Array(9).fill(null)); // 9 cells, initially null
  const [xIsNext, setXIsNext] = useState(true); // X starts first
  const [winner, setWinner] = useState(null);

  // Check for a winner
  const checkWinner = (squares) => {
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

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Return X or O
      }
    }
    return null;
  };

  // Handle click event when a player clicks a square
  const handleClick = (index) => {
    const squares = [...board];
    if (squares[index] || winner) return; // If square is already filled or there's a winner, do nothing

    squares[index] = xIsNext ? 'X' : 'O'; // Set the square to 'X' or 'O'
    setBoard(squares);
    setXIsNext(!xIsNext); // Toggle turn

    const win = checkWinner(squares);
    if (win) setWinner(win); // Set the winner if there's one
  };

  // Reset the game
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  // Render each square of the board
  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  return (
    <div className="tic-tac-toe">
      <h1>Tic-Tac-Toe</h1>
      <div className="status">
        {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`}
      </div>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button className="reset-button" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;