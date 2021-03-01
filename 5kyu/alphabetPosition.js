function alphabetPosition(text) {
  const numbers = [];
  const str = text.toLowerCase().split("");
  const alpha = Array.from(Array(26)).map((e, i) => i + 97);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  str.forEach((letter) => {
    const index = alphabet.indexOf(letter);
    index === -1 ? null : numbers.push(alphabet.indexOf(letter) + 1);
  });

  return numbers.join(" ");
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));

function alphabetPositionRegEx(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(" ");
}

console.log(alphabetPositionRegEx("The sunset sets at twelve o' clock."));
