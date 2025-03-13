import { useState } from 'react';

function Square({ value, onSquareClick }){
  //const [value, setValue] = useState(null);
  //console.log('clicked!');
  return <button className="square" onClick={onSquareClick}>{value}</button>;

  /*
  function handleClick() {
    
    //console.log('clicked!');
    setValue('X'); //By calling this set function from an onClick handler, 
    // you’re telling React to re-render that Square whenever its <button> is clicked. 
    // After the update, the Square’s value will be 'X', so you’ll see the “X” on the game board. 
    // Click on any Square, and “X” should show up:
    
  }
  //return <button onClick={handleClick} className="square">{value}</button>;
  */
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true); //It’s now time to fix a major defect in this tic-tac-toe game: the “O”s cannot be marked on the board.
// 1. The current state value (xIsNext in this case).
// 2. A function to update the state (setXIsNext in this case).

  //<button> is a JSX Element
  const [squares, setSquares] = useState(Array(9).fill(null));
  //Array(9).fill(null) creates an array with nine elements and sets each of them to null. 

  function calculateWinner(squares) { //Don't worry about this, this isn't specific to React
    console.log("asdasd");
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        console.log("Yaaay");
        return squares[a];
      }
    }
    return null;
  }
  
  function handleClick(i) {
    console.log("aaa");
    if (squares[i] === null){
      const nextSquares = squares.slice();
      //nextSquares[i] = "X";
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }

      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }else{
      return;
    }
  }
  
  return(
  <>
  <div className="board-row"> {/* Board-row is already defined in the CSS. Nice job! */}
    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />{/* Notice the new () => syntax. Here, () => handleClick(0) is an arrow function, which is a shorter way to define functions. When the square is clicked, the code after the => “arrow” will run, calling handleClick(0). */}
    <Square value={squares[1]} onSquareClick={() => handleClick(1)} /> {/*Surprisingly, each one handles it's own 'square'*/}
    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
  {/*
  <button className="square">1</button>
  <button className="square">2</button>
  <button className="square">3</button>
  */}
  </div>
  <div className="board-row">
    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
  {/*
  <button className="square">4</button>
  <button className="square">5</button>
  <button className="square">6</button>
  */}
  </div>
  <div className="board-row">
    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
  {/*
  <button className="square">7</button>
  <button className="square">8</button>
  <button className="square">9</button>
  */}
  </div>
  </>
  );
}
