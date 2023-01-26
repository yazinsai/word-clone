import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function Row({value, id}) {
  console.log('id', id)
  return (
    <p className="guess" key={id}>
      {value.split('').map((letter, index) => (
        <span className="cell" key={index}>{letter}</span>
      ))}
    </p>
  )
}

function GuessList({ guesses }) {
  return (
    <>
      <div className="guess-results">
        {guesses.map(({ guess, id }) => (
          <Row value={guess} id={id} />
        ))}
        
        {range(NUM_OF_GUESSES_ALLOWED - guesses.length).map((_, index) => (
          <Row value="     " id={index} />
        ))}
      </div>
    </>
  );
}

export default GuessList;
