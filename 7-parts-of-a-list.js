// https://www.codewars.com/kata/parts-of-a-list/train/javascript

const partlist = (arr) => {
 
    const result = arr.map((_, idx) => {
        return [arr.slice(0,idx).join(' '), arr.slice(idx).join(' ')];
    });

    return result.slice(1);
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"])) // -> [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])
console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"])) // -> [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])
console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"])) // -> [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])
