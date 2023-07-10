/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = {};
    strs.forEach((str) => {
        let s = str.split('').sort().join('');
        if (!map[s]) map[s] = [];
        map[s].push(str)
    })
    return Object.values(map)
};
