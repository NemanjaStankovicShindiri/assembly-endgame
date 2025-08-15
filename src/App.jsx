import "./App.css";
import Header from "/src/Header";
import Languages from "/src/Languages";
import LetterBoxes from "/src/LetterBoxes";
import Alphabet from "/src/Alphabet";
import React from "react";
import { getRandomWord, getFarewellText } from "../utils/word";
import { initializeLanguages, initializeKeyboard } from "/utils/functions";

export default function App() {
  const [message, setMessage] = React.useState("");
  const [languages, setLanguages] = React.useState(initializeLanguages());
  const [keyboard, setKeyboard] = React.useState(initializeKeyboard());
  const [word, setWord] = React.useState(
    getRandomWord()
      .toUpperCase()
      .split("")
      .map((letter) => ({ letter, guessed: false }))
  );

  function deleteLanguage() {
    const languageToChange = languages.findIndex((l) => l.dead == false);
    if (languageToChange >= 0) {
      setLanguages((prev) => {
        const updated = [...prev];
        console.log("Pre ", updated);
        updated[languageToChange] = {
          ...updated[languageToChange],
          dead: true,
        };
        console.log("Posle", updated);
        return updated;
      });
    }
    return languageToChange;
  }
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
            const languageId = deleteLanguage();
            if (languageId != -1)
              setMessage(getFarewellText(languages[languageId].value));
            return { ...item, status: "incorrect" };
          }
        } else return item;
      })
    );
  }
  return (
    <>
      <Header message={message} />
      <Languages languages={languages} />
      <LetterBoxes word={word} />
      <Alphabet
        handleLetterGuess={handleLetterGuess}
        keyboard={keyboard}
        setKeyboard={setKeyboard}
      />
    </>
  );
}
