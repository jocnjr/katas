// https://www.codewars.com/kata/5acbc3b3481ebb23a400007d


const isFlush = (cards) => {
  let result = false;
  
  ['S', 'H', 'C', 'D'].forEach(s => {
    let re = new RegExp(s, 'g');
    let matchSuites = cards.join('').match(re);
    if (matchSuites) {
      if (matchSuites.length === 5) {
        result = true;
      }
    }
    
  });
  
  return result;
}

