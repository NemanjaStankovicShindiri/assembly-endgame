export default function Languages({ languages }) {
  return (
    <>
      {languages.map((lang) => (
        <button
          className={lang.dead ? "destroyed" : `lang-${lang.value}`}
          key={lang.value}
        >
          {lang.value}
        </button>
      ))}
    </>
  );
}
