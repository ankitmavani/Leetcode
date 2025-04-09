/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let once_time = false
    return function(...args){
        if(once_time){
            return undefined
        } else{
            once_time = true
            return fn(...args)
        }
        // return once_time ? undefined : fn(...args) 
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
