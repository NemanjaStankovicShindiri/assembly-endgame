import "./App.css";
import Header from "/src/Header";
import Languages from "/src/Languages";
import LetterBoxes from "/src/LetterBoxes";
import Alphabet from "/src/Alphabet";
import EndButton from "./EndButton";
import React, { useReducer } from "react";
import { reducer, getInitialState } from "/utils/reducer";
import { resetGame } from "../utils/functions";

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, null, () =>
    getInitialState()
  );
  React.useEffect(() => {
    state.languages.findIndex((l) => l.dead === false) ===
      state.languages.length - 1 &&
      dispatch({ type: "SET_GAME_ENDED", payload: "lose" });
    state.word.every((item) => item.guessed === true) &&
      dispatch({ type: "SET_GAME_ENDED", payload: "win" });
  }, [state.languages, state.word]);

  const handleLetterGuess = React.useCallback((letter) => {
    dispatch({ type: "SET_WORD", payload: letter.letter });
    dispatch({ type: "SET_KEYBOARD", payload: letter.letter });
  }, []);
  return (
    <>
      <Header gameEnded={state.gameEnded} message={state.message} />
      <Languages languages={state.languages} />
      <LetterBoxes word={state.word} gameEnded={state.gameEnded} />
      <Alphabet
        handleLetterGuess={handleLetterGuess}
        keyboard={state.keyboard}
        gameEnded={state.gameEnded}
      />
      <EndButton
        onClick={() => resetGame(dispatch)}
        gameEnded={state.gameEnded}
      ></EndButton>
    </>
  );
}
