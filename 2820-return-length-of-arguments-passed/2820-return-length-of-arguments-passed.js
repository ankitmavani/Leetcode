/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    console.log(args)
    return args.length
    // return args
};

/**
 * argumentsLength(1, 2, 3); // 3
 */