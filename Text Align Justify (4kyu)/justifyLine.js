//Final Solution
function justifyLine(line, width) {
  var numberOfGaps = line.arr.length-1
  var numberOfSpaces = width - line.length
  var numberOfSpacesPerGap = numberOfSpaces / numberOfGaps
  if (numberOfSpacesPerGap == 1 || numberOfSpacesPerGap == Infinity) { return line.arr.join(' ')}
  var spaces = ''
  while (numberOfSpacesPerGap >= 0) {
    spaces += ' '
    numberOfSpacesPerGap--
  }
  if (line.length + spaces.length * numberOfGaps > width) {
    let lastWordsCount = (numberOfSpaces % numberOfGaps)+1
    let lastWords = line.arr.slice((lastWordsCount), line.arr.length)
    if (line.arr.slice(0,(lastWordsCount)).length == 0) { return lastWords.join(spaces) }
    return line.arr.slice(0, lastWordsCount).join(spaces) + spaces.slice(0, -1) + lastWords.join(spaces.slice(0,-1))
  }
  return line.arr.join(spaces)
}

module.exports = {justifyLine}