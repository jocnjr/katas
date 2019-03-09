// https://www.codewars.com/kata/get-the-middle-character

    const getMiddle = s => {
    return (s.length % 2 === 0) ? s.substring(Math.floor((s.length / 2) - 1), Math.floor((s.length/2) + 1)) : s.substring(Math.floor(s.length / 2), Math.floor((s.length / 2) + 1));
    }

    console.log(getMiddle('banana')); // -> na
    console.log(getMiddle('noite')); // -> i


    // let half = s.length/2

    // if(s.length % 2 == 0) {
    // return s[half-1] + s[half];
    // } else {
    // return s[parseInt(half)];
    // }
