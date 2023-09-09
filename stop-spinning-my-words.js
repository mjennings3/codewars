/*
DESCRIPTION:
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

// My Solution

function spinWords(string){
  var currentWord = ''
  var result = ''
  var wordCount = 0
  for (var i in string) {
    currentWord += string[i]
    if (string[i] == ' ' || i == string.length-1) {
      if (string[i] == ' ') {
        currentWord = currentWord.slice(0, currentWord.length-1)
        wordCount++
      }
      if (wordCount > 0) { result += ' ' }
      result += spinWord(currentWord)
      currentWord = ''
    }
  }
  if (result[0] == ' ' && string[0] != ' ') { result = result.slice(1, result.length) }
  return result
}

function spinWord(string){
  if (string.length < 5) return string
  let spunWord = ''
  for (let i = string.length-1; i >= 0; i--) {
    spunWord += string[i]
  }
  return spunWord
}