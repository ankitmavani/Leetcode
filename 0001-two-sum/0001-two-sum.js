/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const len = nums.length

    let new_set = new Set()
    for(let [index, num] of nums.entries()){
        let complement = target -num
        if(new_set.has(complement)){
            return [index, nums.indexOf(complement)]
        }
        new_set.add(num)
    }
    return false

    // for (let i = 0; i < len; i++) {
    //     for(let j=i+1;j<len;j++){
    //         if(nums[i]+nums[j]===target){
    //             return [i,j]
    //         }
    //     }
    // }
    // return []
};