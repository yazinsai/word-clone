import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);

  // playing, won, lost
  const [gameStatus, setGameStatus] = React.useState('playing');

  console.info({ answer });

  function handleReset() {
    setAnswer(sample(WORDS));
    setGuess('');
    setGuesses([]);
    setGameStatus('playing');
  }

  function addGuess(value) {
    const nextGuesses = [...guesses, value];
    setGuess(value);
    setGuesses(nextGuesses);

    if (value === answer) {
      setGameStatus('won')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  const bannerStatus = gameStatus === 'won' ? 'happy' :
    gameStatus === 'lost' ? 'sad' : '';

  return (
    <>
      <GuessList guesses={guesses} answer={answer}></GuessList>
      <GuessInput disabled={gameStatus !== 'playing'} addGuess={addGuess}></GuessInput>
      <Banner status={bannerStatus}>
        {gameStatus === 'won' && (
          <p>
            <strong>Congratulations!</strong> Got it in
            {' '}
            <strong>{guesses.length} guesses</strong>.
            <a href="#" onClick={handleReset}>Play again</a>
          </p>
        )}
        {gameStatus === 'lost' && (
          <p>
            <strong>Sorry!</strong> The answer was
            {' '}
            <strong>{answer}</strong>.
            <a href="#" onClick={handleReset}>Try again</a>
          </p>
        )}
      </Banner>
    </>
  );
}

export default Game;
