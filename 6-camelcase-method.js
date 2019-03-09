//https://www.codewars.com/kata/camelcase-method/train/javascript

String.prototype.camelCase = function(){
  if (this == '') return '';

  return this.trim().split(' ').map(l => l[0].toUpperCase() + l.slice(1)).join('')
}

console.log("test case".camelCase())// "TestCase");
console.log("camel case method".camelCase())// "CamelCaseMethod");
console.log("say hello ".camelCase())// "SayHello");
console.log(" camel case word".camelCase())// "CamelCaseWord");
console.log("".camelCase())// "");