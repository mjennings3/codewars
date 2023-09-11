const justifyLine = require("./justifyLine.js")

function justify(text, width) {
  if (text.length <= width) { return text }
  text = text.split(' ')
  var result = ``
  var thisLine = {
                  arr: [text[0]],
                  length: text[0].length
                 }
  
  for (let i = 1; i < text.length; i++) {
    // adding thisLine.arr.length at the end ads the spaces for calculation purposes but not to the actual thisLine.length
    if (thisLine.length + text[i].length + thisLine.arr.length <= width) {
      thisLine.arr.push(text[i])
      thisLine.length += text[i].length
    } else {
      result += justifyLine(thisLine, width) + '\n'
      thisLine.arr = [text[i]]
      thisLine.length = text[i].length
    }
  }
  if (thisLine.arr.length) {result += thisLine.arr.join(' ')}
  console.log('result',result)
  return result
}

justify("hey")