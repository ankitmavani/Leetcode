/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const setList = [...new Set(nums)]
    return setList.length !== nums.length
};