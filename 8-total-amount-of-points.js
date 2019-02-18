// https://www.codewars.com/kata/total-amount-of-points

const points = games => {
    return games.reduce((acc, item) => {
      let us = parseInt(item[0]);
      let them = parseInt(item[2]);
      return (us > them) ? acc += 3 : (us === them) ? acc += 1 : acc;
  }, 0);
}