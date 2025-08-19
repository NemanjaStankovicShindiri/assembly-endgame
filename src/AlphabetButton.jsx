import { checkStatus } from "../utils/functions";
import React from "react";
export default React.memo(function AlphabetButton({
  letterObject,
  handleLetterGuess,
  gameEnded,
}) {
  console.log("keyboard key");
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
