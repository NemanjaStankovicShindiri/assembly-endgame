export default function LetterBoxes({ word, gameEnded }) {
  console.log("letters loaded");
  return (
    <div className="letters">
      {word.map((item, id) => (
        <button
          className={
            !item.guessed ? (gameEnded == "lose" ? "redText" : "invisible") : ""
          }
          key={id}
        >
          {item.letter}
        </button>
      ))}
    </div>
  );
}
