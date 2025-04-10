/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = {}
    return function(...args) {
        let key = String(args)

        if(key in cache){
            return cache[key]
        }
        let value = fn(...args)
        cache[key] = value
        return value
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */