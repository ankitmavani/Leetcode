/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let chuked_arr = []
    let arr1 = []

    for(let i=0;i<arr.length;i=i+size){
        chuked_arr.push(arr.slice(i,i+size > arr.length ? arr.length:i+size))
    }

    return chuked_arr
};
