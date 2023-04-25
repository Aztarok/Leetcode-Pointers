let mostWater = function(nums) {
    let result = [];
    let n = nums.length;
    let left = 0;
    let right = n - 1;
    while (left < right) {
        let firstHeight = nums[left];
        let secondHeight = nums[right];
        let diff = right - left;
        let min = Math.min(firstHeight, secondHeight);
        let current = diff * min;
        result.push(current);
        min === firstHeight ? left++ : right--;
        
    }
    let final = Math.max(...result);
    return final;
};

let nums = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(mostWater(nums));