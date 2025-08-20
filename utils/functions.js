export function initializeLanguages() {
  const allLanguages = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Typescript",
    "Node.js",
    "Python",
    "Ruby",
    "Assembly",
  ];
  return allLanguages.map((value) => ({
    value,
    dead: false,
  }));
}

export function parseMessage(gameEnded, message) {
  const messageToShow = [];
  var messageColor = "";
  switch (gameEnded) {
    case "win":
      messageColor = " messageGreen";
      messageToShow.push("You win!");
      messageToShow.push("Well done! 🎉");
      break;
    case "lose":
      messageColor = " messageRed";
      messageToShow.push("Game over!");
      messageToShow.push("You lose! Better start learning Assembly 😭");
      break;
    case "no":
      messageToShow.push(message);
      messageColor = "";
      break;
  }
  return { messageColor, messageToShow };
}

export function initializeKeyboard() {
  return Array.from({ length: 26 }, (_, i) => ({
    letter: String.fromCharCode(65 + i),
    status: "unchecked",
  }));
}
export function checkStatus({ status }) {
  switch (status) {
    case "unchecked":
      return "#FCBA29";
    case "correct":
      return "#10A95B";
    case "incorrect":
      return "#EC5D49";
  }
}

export function deleteLanguageIndex(languages) {
  return languages.findIndex((l) => l.dead === false);
}

export function resetGame(dispatch) {
  dispatch({ type: "RESET_GAME" });
}
