/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    const len = nums.length
    left = 0
    right = len - 1

    while (left <= right) {
        if (nums[left] === 0) {
            j = left
            while(j<right){
                nums[j]=nums[j+1]
                j++
            }
            nums[right]=0
            right--
        } else {
            left++
        }
    }
    return nums
};