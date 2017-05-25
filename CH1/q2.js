const isPermutation = (str1, str2) => (
  str1.split('').sort().join('') === str2.split('').sort().join('')
);

//O(nlogn + mlogm) sort strings and compare, O(1) space
//O(n + m) count hash
