// https://www.codewars.com/kata/55d1d6d5955ec6365400006d

console.time('recursive');
function roundToNext5(n){
  if (n % 5 === 0) return n;
  
  return roundToNext5(n+1);

  // if (n % 5 === 0) {
  //   return n;
  // } else if (n >= 0){
  //   return n + (5 - (n % 5));
  // } else {
  //   return n - (n % 5);
  // }
}

[
  [0,0],
  [1,5],
  [3,5],
  [5,5],
  [7,10],
  [39,40],
  [31,35],
  [1005,1005],
  [98,100],
  [203,205]
].forEach(
  ([x,out])=> console.log(roundToNext5(x))
);
console.timeEnd('recursive');

