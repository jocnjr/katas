// https://www.codewars.com/kata/ranking-system/train/javascript

const rankings = (arr) => {
    
  const sortedArr = [...arr].sort((a,b) => b-a);
  
  return arr.map((item, idx) => {
    return sortedArr.indexOf(item) + 1;
  })
  
}

console.log(rankings([1,3,2])) //, [3,1,2]))
console.log(rankings([1,2,3,4,5])) //, [5,4,3,2,1]))
console.log(rankings([3,4,1,2,5])) //, [3,2,5,4,1]))
console.log(rankings([10,20,40,50,30])) //, [5, 4, 2, 1, 3]))
console.log(rankings([1, 10]))//, [2, 1]))
console.log(rankings([22, 33, 18, 9, 110, 4, 1, 88, 6, 50]))//, [5, 4, 6, 7, 1, 9, 10, 2, 8, 3]))