import React from "react";

function Banner({ visible, result, answer, tries }) {
  if (!visible) return null;
  
  return (
    <div className={`banner ${result}`}>
      {result === 'happy' && (
        <p>
          <strong>Congratulations!</strong> Got it in&nbsp;
          <strong>{tries} guesses</strong>.
        </p>
      )}
      {result === 'sad' && (
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      )}
    </div>
  )
}

export default Banner;
