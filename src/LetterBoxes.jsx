export default function LetterBoxes({ word }) {
  return (
    <h1>
      {word.map((item, id) => (
        <button className={!item.guessed ? "invisible" : ""} key={id}>
          {item.letter}
        </button>
      ))}
    </h1>
  );
}
