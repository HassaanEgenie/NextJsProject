import React from "react";
import Square from "./Square";
console.log();
const Board = ({ squares, onClick }) => (
    
  <div className="board text-center">
      
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
