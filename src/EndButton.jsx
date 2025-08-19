export default function EndButton({ gameEnded, onClick }) {
  console.log("endButton");
  return (
    <button
      onClick={onClick}
      className={gameEnded != "no" ? "endButton" : "endButton invisibleMessage"}
    >
      New Game
    </button>
  );
}
