// https://www.codewars.com/kata/sum-of-intervals/train/javascript

const sumIntervals = (intervals) => {

    return intervals.reduce((result, ints) => {
      for (let i = ints[0]; i < ints[1]; i++) {
        if (result.indexOf(i) < 0) {
          result.push(i);
        }
      }
      return result;
    }, []).length;
  
}

// const sumIntervals = (intervals) => {

//     if (intervals.length === 1) return intervals[0][1] - intervals[0][0];
    
//     let result = intervals.reduce((acc, int) => {
//       let obj = {};
//       obj.min = int[0];
//       obj.max = int[1];
      
//       obj.count = obj.max - obj.min;
//       obj.isNew = true;
      
//       acc.push(obj);
      
//       return acc;
      
//     }, []);
    
    
//     result = result.sort((a,b) => a.min - b.min)
    
//     let count = 0;
    
//     console.log(result);
    
//     result.forEach((interval, idx) => {
//       result.slice(idx+1, idx+2).forEach(nextInterval => {
//         if (interval.max <= nextInterval.min || interval.min >= nextInterval.max) {
//           if (interval.isNew && nextInterval.isNew) {
//             console.log(interval, nextInterval, count, 'begin both new no overlap')
//             count += interval.count + nextInterval.count;
//             interval.isNew = false;
//             nextInterval.isNew = false;
//             console.log(interval, nextInterval, count, 'end both new no overlap')
//           } else if (interval.isNew) {
//             console.log(interval, nextInterval, count, 'begin interval new no overlap')
//             count += interval.count;
//             interval.isNew = false;
//             // nextInterval.isNew = false;
//             console.log(interval, nextInterval, count, 'end interval new no overlap')
//           } else if (nextInterval.isNew) {
//             console.log(interval, nextInterval, count, 'begin next new no overlap')
//             count += nextInterval.count;
//             nextInterval.isNew = false;
//             // nextInterval.isNew = false;
//             console.log(interval, nextInterval, count, 'end next no overlap')

//           }
//         } else {
//           if (interval.min !== nextInterval.min && interval.max !== nextInterval.max) {
//             if (interval.isNew) {
//                 count += nextInterval.max - interval.min;
//                 interval.isNew = false;
//                 nextInterval.isNew = false;          
//                 console.log(`min: ${interval.min} --- max: ${nextInterval.max}`, interval, nextInterval, count, 'do overlap');
//             }
  
//           } else {
//   //           if (interval.isNew) {
//             count += nextInterval.count;
//             interval.isNew = false;
//             console.log('else')
//   //           nextInterval.isNew = false;
//   //           }
  
//           }
//         }
//       });
//     })
    
//     return count;
// }

console.log(sumIntervals([[1,5], [1,5]])); // 4
console.log(sumIntervals([[1,5],[6,10]])) // 8
console.log(sumIntervals([[1,4],[7, 10],[3, 5]])) // 7

