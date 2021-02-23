function pigIt(str){
    wordArr = str.split(' ')
    wordPig = ''

    wordArr.forEach((word) => {
        if( word == '?' || word == '!' ) {
            wordPig += ' ' + word
            return wordPig.trim()
        }
        pigged = word.split('')
        pigged.push(pigged.shift())
        pigged = pigged.join('')
        pigged += 'ay'
        wordPig += ' ' + pigged

        console.log(pigged)
    })
    return wordPig.trim()
}

console.log( pigIt('Pig latin is cool !') )

function pigIt(str) {
  var arrayWord = str.split(' ');
  return arrayWord.map(function(word) {
    var firstLetter = word.charAt(0);
    return word.slice(1) + firstLetter + 'ay';
  }).join(' ');
}
