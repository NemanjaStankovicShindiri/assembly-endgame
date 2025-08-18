export default function Languages({ languages }) {
  return (
    <div className="languages">
      {languages.map((lang) => (
        <div className="language" key={lang.value}>
          <button
            className={
              lang.dead
                ? `langButton lang-${lang.value.split(".")[0]} destroyed`
                : `langButton lang-${lang.value.split(".")[0]}`
            }
          >
            {lang.value}
          </button>
          <div className={lang.dead ? "skull" : ""}>
            {lang.dead ? "💀" : ""}
          </div>
        </div>
      ))}
    </div>
  );
}
