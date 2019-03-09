//https://www.codewars.com/kata/determine-if-the-poker-hand-is-flush/train/javascript

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

  console.log(isFlush([  "AS", "3S",  "9S", "KS", "4S" ])) //,  true );
  console.log(isFlush([  "AD", "4S",  "7H", "KC", "5S" ])) //, false );
  console.log(isFlush([  "AD", "4S", "10H", "KC", "5S" ])) //, false );
  console.log(isFlush([  "QD", "4D", "10D", "KD", "5D" ])) //,  true );
  console.log(isFlush([ "10D", "4D",  "QD", "KD", "5D" ])) //,  true );