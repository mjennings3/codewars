//Fully Noted Version Below

function justifyLine(line, width) {
  // # of gaps = # of words - 1
  // # of spaces = width - # of letters
  // # of spaces per gap = # of spaces / # of gaps
  var numberOfGaps = line.arr.length-1
  var numberOfSpaces = width - line.length
  var numberOfSpacesPerGap = numberOfSpaces / numberOfGaps
  if (numberOfSpacesPerGap == 1 || numberOfSpacesPerGap == Infinity) { return line.arr.join(' ')}
  var spaces = ''
  while (numberOfSpacesPerGap >= 0) {
    spaces += ' '
    numberOfSpacesPerGap--
  }
  
  // problem: the spaces removed must use modular math;
  // right now all lines have either n gaps of m space count (length)
  // or n-1 gaps of m length and one o gap of l length at the end
  // example (width 15):
  // hey, you there --> hey,  you there
  // no such thing as n-2, n-3, etc
  // example (width 20):
  // hey, you over there --> hey,  you over there
  // SOLUTION: (# of spaces) % (# of gaps) = # of gaps o at end of length l
  //
  // solution area
  if (line.length + spaces.length * numberOfGaps > width) {
    let lastWordsCount = (numberOfSpaces % numberOfGaps)+1
    let lastWords = line.arr.slice((lastWordsCount), line.arr.length)
    if (line.arr.slice(0,(lastWordsCount)).length == 0) { return lastWords.join(spaces) }
    return line.arr.slice(0, lastWordsCount).join(spaces) + spaces.slice(0, -1) + lastWords.join(spaces.slice(0,-1))
  }
  // end solution area
  return line.arr.join(spaces)
}