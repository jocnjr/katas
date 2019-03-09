// https://www.codewars.com/kata/scramblies/train/javascript

// https://www.codewars.com/kata/reviews/55c04c11aa1e89cf9f000185/groups/5a9ea24937c5798bf80012a6

const scramble = (str1, str2) => {

    let cache = {};
    let currIndex = null;
    for (let i = 0; i < str2.length; i++) {
        let isCached = cache[str2[i]];
        const str2Letter = str2[i];
        (isCached) ? currIndex = str1.indexOf(str2Letter, isCached) : currIndex = str1.indexOf(str2Letter);
        
        if (currIndex < 0) { 
          return false 
        } else {
          cache[str2Letter] = currIndex + 1;
        }
    }
 
 return true;
}

console.log(`${scramble('cedewaraaossoqqyt','codewars')}`); //true