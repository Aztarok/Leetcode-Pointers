let maxArea = function (nums) {
    let result = 0;
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let firstHeight = nums[left];
        let secondHeight = nums[right];
        let diff = right - left;
        let min = firstHeight > secondHeight ? secondHeight : firstHeight;
        let current = diff * min;
        result = result > current ? result : current;
        min === firstHeight ? left++ : right--;
    }
    return result;
};

let nums = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(nums));
