/**
 * @param {number[]} nums
 * @return {number}
 */
//  import Math
var findNumbers = function(nums) {
    // console.log(nums.filter(num=>(num%2)===0))
    return nums.filter(num => (String(num).length)%2 === 0).length
};