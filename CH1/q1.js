// O(n) approach using hash table, O(n) space
//
// function isUnique(str) {
//   let uniqueSet = {}
//
//   for (let i = 0; i < str.length; i++) {
//     if (uniqueSet[str[i]]) {
//       return false;
//     } else {
//       uniqueSet[str[i]] = true;
//     }
//   }
//
//   return true;
// }

//O(n^2) below, O(1) space

function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }

  return true;
}
