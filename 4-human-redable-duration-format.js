//https://www.codewars.com/kata/human-readable-duration-format/train/javascript

const formatDuration = (seconds) => {
  if (seconds === 0) {
    return 'now';
  }

  let result = [];

  let y = Math.floor(seconds / (365*24*60*60));
  seconds = seconds % (365*24*60*60);
  let d = Math.floor(seconds / (24*60*60));
  seconds = seconds % (24*60*60);
  let h = Math.floor(seconds / (60*60));
  seconds = seconds % (60*60);
  let m = Math.floor(seconds / 60);
  seconds = seconds % 60;
  let s = seconds;

  
  let yStr = (y > 0) ? result.push(y + (y === 1 ? ` year` : ` years`)) : '';
  let dStr = (d > 0) ? result.push(d + (d === 1 ? ` day` : ` days`)) : '';
  let hStr = (h > 0) ? result.push(h + (h === 1 ? ` hour` : ` hours`)) : '';
  let mStr = (m > 0) ? result.push(m + (m === 1 ? ` minute` : ` minutes`)) : '';
  let sStr = (s > 0) ? result.push(s + (s === 1 ? ` second` : ` seconds`)) : '';

  
  return result.reduce((acc, item, idx) => {
    if (idx === 0) return item;
    
    if (idx > 0 && idx !== result.length - 1) {
      return acc += `, ${item}`
    } else {
      return acc += ` and ${item}`
    }
  }, '');

}

console.log(formatDuration(1)) //1 second");
console.log(formatDuration(62)) //"1 minute and 2 seconds");
console.log(formatDuration(120))// "2 minutes");
console.log(formatDuration(3600))//, "1 hour");
console.log(formatDuration(3662))//, "1 hour, 1 minute and 2 seconds");
//