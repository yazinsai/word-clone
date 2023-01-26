import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

import Guess from "../Guess";

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(num => (
        <Guess value={guesses[num]} key={num} />
      ))}
    </div>
  );
}

export default GuessList;
