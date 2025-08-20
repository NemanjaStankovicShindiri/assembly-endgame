import React from "react";
export default React.memo(function LetterBoxes({ word, gameEnded }) {
  return (
    <div className="letters">
      {word.map((item, id) => (
        <button key={id}>
          <span
            className={
              !item.guessed
                ? gameEnded === "lose"
                  ? "redText"
                  : "invisible"
                : ""
            }
          >
            {item.letter}
          </span>
        </button>
      ))}
    </div>
  );
});
