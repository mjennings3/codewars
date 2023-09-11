//personal untility for debugging codewars problems
function countSpaces(str) {
  var count = 0
  var sparr = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ' ') { count++ }
    else {
      if (count > 0) sparr.push(count)
      count = 0
    }
  }
  return sparr
}