let twoSum = function(numbers, target) {
    let final = [];
    for (let i = 0; i < numbers.length-1; i++) {
        let first = numbers[i];
        let second = numbers[i+1];
        console.log(first);
        console.log(second);
        if (first + second === target) {
            final.push(i + 1, i + 2);
        }
    }
    return final;
};

let nums = [2, 3, 4];
let mark = 6;

console.log(twoSum(nums, mark));