import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ value, answer }) {
  const charColors = value ? checkGuess(value, answer).map(char => char.status): [];

  return (
    <p className="guess">
      {range(5).map(num => (
        <span className={`cell ${charColors[num]}`} key={num}>
          {value ? value[num]: undefined}
        </span>
      ))}
    </p>
  )
}

export default Guess;
