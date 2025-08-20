import { getAndObjectifyWord, getFarewellText } from "../utils/word";
import {
  initializeLanguages,
  initializeKeyboard,
  deleteLanguageIndex,
} from "/utils/functions";

export function getInitialState() {
  return {
    message: "",
    gameEnded: "no",
    languages: initializeLanguages(),
    keyboard: initializeKeyboard(),
    word: getAndObjectifyWord(),
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case "SET_GAME_ENDED":
      return { ...state, gameEnded: action.payload };
    case "SET_WORD":
      return {
        ...state,
        word: state.word.map((item) =>
          item.letter === action.payload ? { ...item, guessed: true } : item
        ),
        keyboard: state.keyboard.map((item) =>
          item.letter === action.payload ? { ...item, status: "checked" } : item
        ),
      };
    case "SET_KEYBOARD":
      var incorrect = false;
      return {
        ...state,
        keyboard: state.keyboard.map((item) => {
          if (item.letter == action.payload) {
            const containsLetter = state.word.some(
              (l) => l.letter == action.payload
            );
            if (containsLetter) {
              return { ...item, status: "correct" };
            } else {
              incorrect = true;
              return {
                ...item,
                status: "incorrect",
              };
            }
          } else return item;
        }),
        languages:
          incorrect && deleteLanguageIndex(state.languages) !== -1
            ? state.languages.map((item, index) => ({
                ...item,
                dead: index <= deleteLanguageIndex(state.languages),
              }))
            : state.languages,
        message: incorrect
          ? getFarewellText(
              state.languages[deleteLanguageIndex(state.languages)].value
            )
          : state.message,
      };
    case "RESET_GAME":
      return getInitialState();
    default:
      return state;
  }
}
