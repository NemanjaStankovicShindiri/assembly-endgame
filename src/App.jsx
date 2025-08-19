import "./App.css";
import Header from "/src/Header";
import Languages from "/src/Languages";
import LetterBoxes from "/src/LetterBoxes";
import Alphabet from "/src/Alphabet";
import EndButton from "./EndButton";
import React from "react";
import { getAndObjectifyWord, getFarewellText } from "../utils/word";
import {
  initializeLanguages,
  initializeKeyboard,
  deleteLanguage,
} from "/utils/functions";

export default function App() {
  const [message, setMessage] = React.useState("");
  const [gameEnded, setGameEnded] = React.useState("no");
  const [languages, setLanguages] = React.useState(initializeLanguages());
  const [keyboard, setKeyboard] = React.useState(initializeKeyboard());
  const [word, setWord] = React.useState(getAndObjectifyWord());
  React.useEffect(() => {
    languages.every((l) => l.dead === true) && setGameEnded("lose");
    word.every((item) => item.guessed === true) && setGameEnded("win");
  }, [languages, word]);

  function handleLetterGuess(letter) {
    setWord((prev) =>
      prev.map((item) =>
        item.letter == letter.letter ? { ...item, guessed: true } : item
      )
    );
    setKeyboard((prev) =>
      prev.map((item) => {
        if (item.letter == letter.letter) {
          const containsLetter = word.some((l) => l.letter == letter.letter);
          if (containsLetter) {
            return { ...item, status: "correct" };
          } else {
            const languageId = deleteLanguage(languages, setLanguages);
            if (languageId != -1)
              setMessage(getFarewellText(languages[languageId].value));
            return { ...item, status: "incorrect" };
          }
        } else return item;
      })
    );
  }
  function resetGame() {
    setMessage("");
    setGameEnded("no");
    setLanguages(initializeLanguages());
    setKeyboard(initializeKeyboard());
    setWord(getAndObjectifyWord());
  }
  console.log("app loaded");
  return (
    <>
      <Header gameEnded={gameEnded} message={message} />
      <Languages languages={languages} />
      <LetterBoxes word={word} gameEnded={gameEnded} />
      <Alphabet
        handleLetterGuess={handleLetterGuess}
        keyboard={keyboard}
        setKeyboard={setKeyboard}
        gameEnded={gameEnded}
      />
      <EndButton onClick={resetGame} gameEnded={gameEnded}></EndButton>
    </>
  );
}
