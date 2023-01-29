import React from "react";

function Banner({ visible, result, answer, tries, triggerReset }) {
  if (!visible) return null;
  
  return (
    <div className={`banner ${result}`}>
      {result === 'happy' && (
        <p>
          <strong>Congratulations!</strong> Got it in&nbsp;
          <strong>{tries} guesses</strong>.
          — <a href="#" onClick={triggerReset}>Play again?</a>
        </p>
      )}
      {result === 'sad' && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
          — <a href="#" onClick={triggerReset}>Play again?</a>
        </p>
      )}
    </div>
  )
}

export default Banner;
