function spinWords(words) {
  const reversed = [];
  words.split(" ").forEach((word) => {
    word.length > 4
      ? reversed.push(word.split("").reverse().join(""))
      : reversed.push(word);
  });
  return reversed.join(" ");
}

console.log(spinWords("Just kidding there is still one more"));

function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}
