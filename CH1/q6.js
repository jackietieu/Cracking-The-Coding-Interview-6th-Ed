function strCompressor(str) {
  let compressedStr = "",
      compressedLen = 0,
      currentCharLen;

  for (let i = 0; i < str.length; i++) {
    currentCharLen = 1;

    while (true) {
      if (str[i] === str[i + 1]) {
        currentCharLen++;
        i++;
      } else {
        break;
      }
    }

    compressedStr += `${str[i]}${currentCharLen}`;
  }

  return compressedLen < str.length ? compressedStr : str;
}
