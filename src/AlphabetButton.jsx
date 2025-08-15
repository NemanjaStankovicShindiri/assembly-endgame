import { checkStatus } from "../utils/functions";
import React from "react";
export default React.memo(function AlphabetButton({
  letterObject,
  handleLetterGuess,
}) {
  return (
    <button
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
