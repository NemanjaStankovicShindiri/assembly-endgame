import AlphabetButton from "./AlphabetButton";
export default function Alphabet({
  handleLetterGuess,
  keyboard,
  setKeyboard,
  gameEnded,
}) {
  console.log("keyboard loaded");
  return (
    <div className="keyboard">
      {keyboard.map((key) => (
        <AlphabetButton
          key={key.letter}
          letterObject={key}
          setKeyboard={setKeyboard}
          handleLetterGuess={handleLetterGuess}
          gameEnded={gameEnded}
        />
      ))}
    </div>
  );
}
