// https://www.codewars.com/kata/count-all-the-sheep-on-farm-in-the-heights-of-new-zealand/train/javascript


const lostSheep = (friday,saturday,total) => {

    const sheeps = [...friday,...saturday];

    if (sheeps.length === 0) return total;
    
    return sheeps.reduce((sheep, acc) => { acc - sheep }, total)
}