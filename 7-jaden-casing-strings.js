//https://www.codewars.com/kata/jaden-casing-strings/javascript

String.prototype.toJadenCase = function () {
    return this.split(' ').map(w => `${w.substring(0,1).toUpperCase()}${w.substring(1)}`).join(' ');
  };

  console.log(`one two three`.toJadenCase());
  console.log(``.toJadenCase());
  console.log(` one two three`.toJadenCase());