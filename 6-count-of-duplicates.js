//https://www.codewars.com/kata/counting-duplicates/train/javascript

const duplicateCount = (text) => {

  if (!text) return 0;
  
  return [...new Set(text.toLowerCase())].reduce((acc, letter) => {
    let regex = new RegExp(letter, 'gi');
    let match = text.match(regex);
    if (match) {
        (match.length > 1) ? acc++ : acc;
        // console.log(match)
        return acc;
    } else {
        return acc;
    }
  }, 0)
}

console.log(duplicateCount("")) //, 0);
console.log(duplicateCount("abcde")) //, 0);
console.log(duplicateCount("aabbcde")) //, 2));
console.log(duplicateCount("aabBcde")) //, 2,"should ignore case"));
console.log(duplicateCount("Indivisibility")) //, 1))
console.log(duplicateCount("Indivisibilities")) //, 2, "characters may not be adjacent")
