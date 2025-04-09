/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    const throwError = (error) => { throw new Error(error) }
    return {
        toBe(num) {

            return num === val ? true : throwError("Not Equal")

        },
        notToBe(num) {
            return num !== val ? true : throwError("Equal")
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */