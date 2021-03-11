function solution(input, markers) {
  let newString = []
  const lines = input.split("\n")
  lines.map((line) => {
    line = line.split(markers[0])[0].trim()
    line = line.split(markers[1])[0].trim()
    newString.push(line)
  })
  return newString.join('\n')
};

console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]));



function solution1(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}

console.log(solution1("Q @b\nu\ne -e f g", ["@", "-"]));
