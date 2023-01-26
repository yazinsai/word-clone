import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(value) {
    setGuess(value);
    setGuesses([...guesses, {guess: value, id: Math.random()}]);
  }

  return (
    <>
      <GuessList guesses={guesses}></GuessList>
      <GuessInput addGuess={addGuess}></GuessInput>
    </>
  );
}

export default Game;
