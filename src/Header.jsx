export default function Header({ message }) {
  return (
    <header>
      <div>
        <h1>Assembly:Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </div>
      <div>{message}</div>
    </header>
  );
}
