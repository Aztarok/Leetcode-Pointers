let twoSum = function(numbers, target) {
    let final = [];
    let left = 0;
    let right = numbers.length-1;
    while (left < right) {
        if (numbers[left] + numbers[right] > target) {
            right--;
        } else if (numbers[left] + numbers[right] < target) {
            left++;
        } else {
            final.push(left + 1, right + 1);
            break;
        }
    }
    return final;
};

let nums = [2, 7, 11, 15];
let mark = 18;

console.log(twoSum(nums, mark));