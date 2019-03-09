// https://www.codewars.com/kata/sort-the-odd/train/javascript

const sortArray = (array) => {
  if (array.length == 0) return array;

  const sortedOdds = array.filter(num => (num % 2 !== 0)).sort((a,b) => a-b);
  let countOdds = 0;
  
  return array.reduce((result, num, idx) => {
    if (num % 2 !== 0) {
      result[idx] = sortedOdds[countOdds];
      countOdds++;
    } else {
      result[idx] = num;
    }
    
    return result;
    
  }, []);
}