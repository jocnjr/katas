// https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript

function abbrevName(name){
  return name.split(' ').map(w => w.substring(0,1).toUpperCase()).join('.');
}
console.log(abbrevName('Bob Marley'))