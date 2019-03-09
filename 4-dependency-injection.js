// https://www.codewars.com/kata/dependency-injection/

class DI {
  constructor(dependency) {
    this.dependency = dependency;
  }

  inject(func) {
    return func.arguments;
  }
};

// Should return new function with resolved dependencies
// DI.prototype.inject = function (func) {
//   let args = func(...arguments)
//   return func();
// }

const deps = {
  'dep1': function () {return 'this is dep1';},
  'dep2': function () {return 'this is dep2';},
  'dep3': function () {return 'this is dep3';},
  'dep4': function () {return 'this is dep4';}
};
  
let di = new DI(deps);

console.log(di.inject((dep3, dep1, dep2) => {
  return `ok!`
}));

// const myFunc = di.inject(function (dep3, dep1, dep2) {
//   return [dep1(), dep2(), dep3()].join(' -> ');
// });

// console.log(myFunc()) //, 'this is dep1 -> this is dep2 -> this is dep3'
