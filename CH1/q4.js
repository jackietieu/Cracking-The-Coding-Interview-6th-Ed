function isPermutationPalindrome(str) {
  let lettersCount = {},
      trimmedStr = str.replace(/\s/g, '').split(''),
      exceptionHit = false,
      result = true;

  trimmedStr.forEach(el => {
    lettersCount[el] ? lettersCount[el]++ : lettersCount[el] = 1;
  })

  Object.keys(lettersCount).forEach(char => {
    if (lettersCount[char] % 2 !== 0) {
      if (exceptionHit) {
        result = false;
      } else {
        exceptionHit = true;
      }
    }
  })

  return result;
}

// create count hash
// it's a palindrome if...
// 1) every char has an even number of appearances
// 2) or n - 1 chars show up an even number of times and 1 char has an odd count
// otherwise it's not a permutation/palindrome
