import React from "react";
import { parseMessage } from "../utils/functions";

export default React.memo(function Header({ gameEnded, message }) {
  const messageObj = React.useMemo(
    () => parseMessage(gameEnded, message),
    [gameEnded, message]
  );
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
          message === "" && gameEnded === "no"
            ? "message invisibleMessage"
            : "message" + messageObj.messageColor
        }
      >
        <p>{messageObj.messageToShow[0]}</p>
        {messageObj.messageToShow[1] ? (
          <p className="messageDetails">{messageObj.messageToShow[1]}</p>
        ) : (
          ""
        )}
      </div>
    </header>
  );
});
