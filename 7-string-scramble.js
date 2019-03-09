// https://www.codewars.com/kata/string-scramble/train/javascript

const scramble = (str, arr) => {

    let result = [];
    
    arr.forEach((newIdx, idx) => {
      result[newIdx] = str[idx];
      console.log(`${result}`);
    });
    
    return result.join('')
  
  };

  console.log(scramble('abcd', [0,3,1,2]));