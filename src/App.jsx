import "./App.css";
import Header from "/src/Header";
import Languages from "/src/Languages";
import LetterBoxes from "/src/LetterBoxes";
import Alphabet from "/src/Alphabet";
import React from "react";
import { getRandomWord } from "../utils/word";
import { initializeLanguages, initializeKeyboard } from "/utils/functions";

export default function App() {
  const [languages, setLanguages] = React.useState(initializeLanguages());
  const [keyboard, setKeyboard] = React.useState(initializeKeyboard());
  const [word, setWord] = React.useState(
    getRandomWord()
      .toUpperCase()
      .split("")
      .map((letter) => ({ letter, guessed: false }))
  );
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
          return containsLetter
            ? { ...item, status: "correct" }
            : { ...item, status: "incorrect" };
        } else return item;
      })
    );
  }
  return (
    <>
      <Header />
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
