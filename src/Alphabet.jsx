import AlphabetButton from "./AlphabetButton";
export default function Alphabet({ handleLetterGuess, keyboard, setKeyboard }) {
  return (
    <div className="keyboard">
      {keyboard.map((key) => (
        <AlphabetButton
          key={key.letter}
          letterObject={key}
          setKeyboard={setKeyboard}
          handleLetterGuess={handleLetterGuess}
        />
      ))}
    </div>
  );
}
