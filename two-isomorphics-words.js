function isomorph(a, b) {

  if (noDuplicated(a)) return false;
  
  return findDuplicated(a);
  
}

const findDuplicated = (str) => {
  
  let dubs = {};
  let idxs = [];
  
  const arrStr = str.split('');
  
  arrStr.forEach((item, idx) => {
    if (!dubs[item]) dubs[item] = [];
    
    dubs[item].push(arrStr.indexOf(item));
  });
  console.log(dubs)
  for (let idx in dubs) {
    if (dubs[idx] >= 2) {
      idxs.push(idx);
    }
  }
  
  return idxs;
};

const noDuplicated = (str) => {

  const noDups = [...new Set([...str])];
  
  return ([...str].length === noDups.length)

}


----

function isomorph(a, b) {
  console.log('begin==>',a,b);
  if (a.length !== b.length) return false;
  if (noDuplicated(a) && noDuplicated(b) && noEqualLetters(a,b)) return true;
  console.log(noEqualLetters(a,b));
  const aArr = [...a];
  const bArr = [...b];
  
  const dubs = [];
  let result = false;

  for (let i = 0; i < aArr.length; i++) {
    let equals = [];
    for (let j = 0 ; j < aArr.length; j++) {
      console.log(j, aArr[i], aArr[j]);
      if (aArr[i] === aArr[j]) equals.push(j);
    }
    if (equals.length >= 2) dubs.push(equals)
    console.log(equals,dubs)
  }
  
  if (dubs.length < 2) return false;
  
  dubs.forEach(equal => {
    console.log(equal,equal[0])
    let val = bArr[equal[0]];
    equal.forEach((e) => {
      console.log(val,bArr[e], e,result)
      result = false;
      if (val !== bArr[e]) {
        result = false;
      } else {
        result = true;
      }
    });
  });
  
  return result;
}

const noDuplicated = (str) => {

  const noDups = [...new Set([...str])];
  
  return ([...str].length === noDups.length)

}

const noEqualLetters = (str1,str2) => {
  let result = false;
  [...str1].forEach(l => [...str2].forEach(l2 => {
    console.log('aloo',l,l2)
    if (l !== l2) result = true;
  }))
  return result;
}
