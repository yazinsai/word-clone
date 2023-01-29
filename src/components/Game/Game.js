import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  const [finished, setFinished] = React.useState(false);
  const [result, setResult] = React.useState(null);

  function addGuess(value) {
    const nextGuesses = [...guesses, value];
    setGuess(value);
    setGuesses(nextGuesses);

    if (value === answer) {
      setFinished(true);
      setResult('happy');
    } else if (nextGuesses.length === 6) {
      setFinished(true);
      setResult('sad');
    }
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer}></GuessList>
      <GuessInput disabled={finished} addGuess={addGuess}></GuessInput>
      <Banner visible={finished} result={result} answer={answer} /> 
    </>
  );
}

export default Game;
