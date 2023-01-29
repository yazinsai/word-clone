import React from "react";

function GuessInput({ disabled, addGuess }) {
  const [value, setValue] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({guess: value});
    addGuess(value);
    setValue('');
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" minLength={5} maxLength={5} value={value} onChange={e => setValue(e.target.value.toUpperCase())} disabled={disabled} />
      </form>
    </>
  );
}

export default GuessInput;
