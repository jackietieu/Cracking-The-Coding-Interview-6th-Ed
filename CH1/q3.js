function URLify(str, trueLen) {
  let trimmedStr = str.slice(0, trueLen);
  return trimmedStr.replace(/\s/g, '%20');
}
