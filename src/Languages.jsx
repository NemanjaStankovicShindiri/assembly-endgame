export default function Languages({ languages }) {
  return (
    <>
      {languages.map((lang) => (
        <button style={{ backgroundColor: lang.color }} key={lang.value}>
          {lang.value}
        </button>
      ))}
    </>
  );
}
