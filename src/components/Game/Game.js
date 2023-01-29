import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import Banner from '../Banner/Banner';

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  const [finished, setFinished] = React.useState(false);
  const [result, setResult] = React.useState(null);

  console.info({ answer });

  function handleReset() {
    setAnswer(sample(WORDS));
    setGuess('');
    setGuesses([]);
    setFinished(false);
    setResult(null);
  }

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

  const numTries = guesses.filter(guess => guess).length;

  return (
    <>
      <GuessList guesses={guesses} answer={answer}></GuessList>
      <GuessInput disabled={finished} addGuess={addGuess}></GuessInput>
      <Banner visible={finished} tries={numTries} result={result} answer={answer} triggerReset={handleReset} /> 
    </>
  );
}

export default Game;
