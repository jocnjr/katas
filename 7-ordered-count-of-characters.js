// https://www.codewars.com/kata/ordered-count-of-characters/

const orderedCount = (text) => {
  let result = [];
  let count = [];

  [...text].forEach(letter => {
        if (count[text.indexOf(letter)]) {
              count[text.indexOf(letter)] += 1;
        } else {
          count[text.indexOf(letter)] = 1;
        }
    })
            
count.forEach((c, idx) => result.push([text[idx], c]));
            
//   const objResult = [...text].reduce((acc, item) => {
//       if (acc[item]) {
//         acc[item] += 1;
//       } else {
//         acc[item] = 1;
//       }
//       return acc;
//   }, {});
  
//   for (let key in objResult) {
//     result.push([key, objResult[key]])
//   }
  
  return result;

} 

console.log(orderedCount("abracadabra")); // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]]
console.log(orderedCount('212')) // [['2', 2], ['1', 1 ]]