function anagrams(word, words) {
  isAnagram = [];
  words.forEach((w) => {
    word.split("").sort().join("") === w.split("").sort().join("")
      ? isAnagram.push(w)
      : null;
  });
  return isAnagram;
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));

function anagrams2(word, words) {
  return words.filter((v) => {
    return word.split("").sort().join("") == v.split("").sort().join("");
  });
}

console.log(anagrams2("abba", ["aabb", "abcd", "bbaa", "dada"]));
