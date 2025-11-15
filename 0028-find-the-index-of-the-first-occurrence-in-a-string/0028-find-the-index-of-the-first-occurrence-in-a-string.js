/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let hay_length = haystack.length
    let needle_length = needle.length
    for (let i = 0; i <= hay_length - needle_length; i++) {
        if (haystack.slice(i, i + needle_length) === needle) {
            return i
        }
    }
    return -1
};