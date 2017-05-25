function oneAway(str1, str2) {
  let charCount = {},
      discrepancy1 = 0, // char discrpancy for first str
      discrepancy2 = 0;

  str1.split('').forEach(char => {
    charCount[char] ? charCount[char]++ : charCount[char] = 1;
  })

  str2.split('').forEach(char => {
    charCount[char] ? charCount[char]-- : charCount[char] = -1;
  })

  Object.keys(charCount).forEach(char =>{
    if (charCount[char] > 0) {
      discrepancy1++;
    } else if (charCount[char] < 0) {
      discrepancy2++;
    }
  })

  if (discrepancy1 > 1 || discrepancy2 > 1) {
    return false;
  } else {
    return true;
  }
}
