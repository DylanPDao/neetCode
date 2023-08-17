/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length < 1) return 0

    let max = 1
    let count = 1


    const sorted = nums.sort((a, b) => a - b)
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i + 1]) continue
        if (sorted[i] === sorted[i + 1] - 1) {
            count++
            max = Math.max(count, max)
        }
        else {
            count = 1
        }
    }
    return max
};
