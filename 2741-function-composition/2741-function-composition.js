/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let val = x
        functions.reverse().map((item)=>{
            // console.log(item(val))
            val = item(val)
        })
        return val
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */