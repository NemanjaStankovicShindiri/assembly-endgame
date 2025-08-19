export default function Header({ gameEnded, message }) {
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
  console.log("header loaded");
  return (
    <header>
      <div>
        <h1>Assembly:Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </div>
      <div
        className={
          message == "" && gameEnded == "no"
            ? "message invisibleMessage"
            : "message" + messageColor
        }
      >
        <p>{messageToShow[0]}</p>
        {messageToShow[1] ? (
          <p className="messageDetails">{messageToShow[1]}</p>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
