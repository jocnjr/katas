// https://www.codewars.com/kata/the-supermarket-queue/train/javascript

const queueTime = (customers, n=1) => {
    if (customers.length === 0) return 0;

    let lanes = [...Array(n)].map(c => 0)
    customers.forEach(customer => {
        lanes[lanes.indexOf(Math.min(...lanes))] += customer;
    })
    return Math.max(...lanes);
    // let clock = 0;
    // let result = 0;

    // customers.sort((a,b) => a - b);

    // for (let i = 0; i < customers.length; i++) {
    //     // if (customers[i] > 0) {
    //         for (let j = customers[i]; j > 0; j-- ) {
    //             console.log(customers, customers[i], clock, i);
    //             customers[i] = customers[i] - 1;
    //             if (n > 1) {
    //                 for (let k = 1; k < n; k++) {
    //                     customers[i+k] = customers[i+k] - 1;
    //                 }
    //             }
    //             clock++;
    //         }
    //     // }
    // }
    // return clock;
};

console.log(`${queueTime([], 1)}`);  // 0
// console.log(`${queueTime([1,2,3,4], 1)}`); //, 10);
console.log(`${queueTime([2,2,4,4,3,3], 2)}`); //, 9);
// console.log(`${queueTime([1,2,3,4,5], 100)}`); //, 5);
// console.log(`${queueTime([2,2,4,4,3,3], 4)}`); //, 9);

console.log(queueTime([17,7,36,20,37,33,26,17,36,30,23,35,14,29], 4)); //105

console.log(queueTime([6,31,47,50,28,30,6,3,46,31,1,24,8,47,23,41,27,6,13,14,28,15], 2)); //266