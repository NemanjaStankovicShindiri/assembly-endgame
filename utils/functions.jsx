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
  return allLanguages.map((value, index) => ({
    value,
    dead: false,
  }));
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
