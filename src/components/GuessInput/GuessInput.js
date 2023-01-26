import React from "react";

function GuessInput({ setGuess }) {
  const [value, setValue] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({guess: value});
    setGuess(value);
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" value={value} onChange={e => setValue(e.target.value)} />
      </form>
    </>
  );
}

export default GuessInput;
