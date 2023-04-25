let trap = function (height) {
    if (height === null || height.length === 0) return 0;

    let result = 0;

    let left = 0;
    let right = height.length - 1;

    let leftWater = 0;
    let rightWater = 0;

    while (left < right) {
        leftWater = Math.max(leftWater, height[left]);
        rightWater = Math.max(rightWater, height[right]);
        result += leftWater - height[left];
        result += rightWater - height[right];

        height[left] < height[right] ? left++ : right--;
    }
    return result;
};

let nums = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(trap(nums));
