/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const len = nums.length
    let slow = 0
    let fast = 1
    while (fast < len) {
        if(nums[slow] === nums[fast]){
            fast++
        }else {
            [nums[slow+1], nums[fast]] = [nums[fast], nums[slow+1]]
            slow++
            fast++
        }
    }
    // console.log(nums.slice(0, slow+1), slow, fast)
    return slow+1
};