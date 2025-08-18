export default function LetterBoxes({ word }) {
  return (
    <div className="letters">
      {word.map((item, id) => (
        <button className={!item.guessed ? "invisible" : ""} key={id}>
          {item.letter}
        </button>
      ))}
    </div>
  );
}
