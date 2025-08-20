export default function EndButton({ gameEnded, onClick }) {
  return (
    <button
      onClick={onClick}
      className={gameEnded != "no" ? "endButton" : "endButton invisibleMessage"}
    >
      New Game
    </button>
  );
}
