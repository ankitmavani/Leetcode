/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max_count = 0
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++
        } else {
            if (max_count < count) {
                max_count = count
                count = 0
            } else {
                count = 0
            }
        }
    }
    if (max_count < count) {
        max_count = count
    }
    return max_count
};
