/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    // console.log(title[0].split("")[0].toUpperCase()+title.slice(1))
    return title
        .toLowerCase()
        .split(" ")
        .map((word) => word.length <= 2 ? word.toLowerCase() : word.split("")[0].toUpperCase() + word.slice(1)).join(" ")
};