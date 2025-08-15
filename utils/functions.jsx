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
  const allColors = [
    "#D02B2B",
    "#328AF1",
    "#F4EB13",
    "#2ED3E9",
    "#298EC6",
    "#599137",
    "#FFD742",
    "#D02B2B",
    "#2D519F",
  ];
  return allLanguages.map((value, index) => ({
    value,
    color: allColors[index],
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
