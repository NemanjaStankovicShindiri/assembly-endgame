import AlphabetButton from "./AlphabetButton";
import React from "react";

export default React.memo(function Alphabet({
  handleLetterGuess,
  keyboard,
  gameEnded,
}) {
  return (
    <div className="keyboard">
      {keyboard.map((key) => (
        <AlphabetButton
          key={key.letter}
          letterObject={key}
          handleLetterGuess={handleLetterGuess}
          gameEnded={gameEnded}
        />
      ))}
    </div>
  );
});
