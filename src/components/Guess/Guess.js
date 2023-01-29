import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return (
    <span className={className}>
      {letter}
    </span>
  )
}

function Guess({ value, answer }) {
  const result = value ? checkGuess(value, answer): undefined;

  return (
    <p className="guess">
      {range(5).map(num => (
        <Cell 
          key={num} 
          letter={result ? result[num].letter: undefined} 
          status={result ? result[num].status: undefined} 
        />
      ))}
    </p>
  )
}

export default Guess;
