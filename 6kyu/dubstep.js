function songDecoder(song){
  let noWub = song.replace(/WUB/g, ' ')
  noWub = noWub.split(' ')
  noWub = noWub.filter(e => e !== '');
  noWub = noWub.join(" ")
  return noWub
}
