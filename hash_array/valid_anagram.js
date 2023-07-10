/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    s = s.toLowerCase().split('').sort().join('')
    t = t.toLowerCase().split('').sort().join('')
    console.log(s, t)
    if (s === t) {
        return true
    } else {
        return false
    }
};
