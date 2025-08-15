import AlphabetButton from "./AlphabetButton";
export default function Alphabet({ handleLetterGuess, keyboard, setKeyboard }) {
  return (
    <>
      {keyboard.map((key) => (
        <AlphabetButton
          key={key.letter}
          letterObject={key}
          setKeyboard={setKeyboard}
          handleLetterGuess={handleLetterGuess}
        />
      ))}
    </>
  );
}
