import { checkStatus } from "../utils/functions.js";
import React from "react";
export default React.memo(function AlphabetButton({
  letterObject,
  handleLetterGuess,
  gameEnded,
}) {
  return (
    <button
      className="clickableButton"
      disabled={gameEnded != "no" || letterObject.status != "unchecked"}
      key={letterObject.letter}
      style={{ backgroundColor: checkStatus(letterObject) }}
      onClick={() => {
        handleLetterGuess(letterObject);
      }}
    >
      {letterObject.letter}
    </button>
  );
});
