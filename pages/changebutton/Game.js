import React, { useState } from "react";
import { calculateWinner } from "./helper";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";
 


  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  

  return (
    <>
      <div className="container">
          <div className="row text-center">
              <div className="col-sm-12">
                <h3>{winner ? "Winner: " + winner : "Active Player: " + xO}</h3>
                <h1> Tic Tac Toe </h1>
              </div>
          </div>
          <div className="row text-center">
              <div className="col-sm-6">
                  <h2>Player 1=X</h2>
              </div>
              <div className="col-sm-6">
                  <h2>Player 2=O</h2>
              </div>
          </div>
          <div className="row ">
              <div className="col-sm-12 board_col">
                 <Board squares={history[stepNumber]} onClick={handleClick} />
              </div>
          </div>
      </div>
      
     
     
    </>
  );
};

export default Game;
