// https://www.codewars.com/kata/sum-of-positive/train/javascript

const positiveSum = arr => {
    if (arr.length == 0) return 0;
    
//     return arr.reduce((acc, item) => {
//       if (item >= 0) {
//         return acc + item;
//       } else {
//         return acc;
//       }
//     }, 0);
//   }

const positiveSum = arr => {
    return arr.filter(item => item > 0).reduce((acc, item) => acc + item,0);  
}
console.log(positiveSum([1,-10,2,-20,3,-30]))