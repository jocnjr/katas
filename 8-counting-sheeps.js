// https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep/

const countSheep = num => {
    let str = '';
    for (let i = 1; i <= num; i++ ) {
      str += `${i} sheep...`;
    }
    return str; 
}

const countSheep = num => {
    return [...Array(num)].map((item, i) => i + 1 + ' sheep...' ).join('');
  }