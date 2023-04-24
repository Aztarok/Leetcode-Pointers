let threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let final = [];
    let n = nums.length;
    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;
        if (nums[i] === nums[i-1]) continue;
        while (left < right) {
            let result = nums[i] + nums[left] + nums[right];

            if (result > 0) {
                right--;
            } else if (result < 0) {
                left++;
            } else {
                final.push([nums[i], nums[left], nums[right]]);
                while(nums[left] === nums[left + 1]) left++;
                while(nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
        }
    }
    
    return final;
};

let nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));