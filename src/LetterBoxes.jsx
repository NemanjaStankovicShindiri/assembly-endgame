import React from "react";
export default React.memo(function LetterBoxes({ word, gameEnded }) {
  return (
    <div className="letters">
      {word.map((item, id) => (
        <button
          className={
            !item.guessed
              ? gameEnded === "lose"
                ? "redText"
                : "invisible"
              : ""
          }
          key={id}
        >
          {item.letter}
        </button>
      ))}
    </div>
  );
});
