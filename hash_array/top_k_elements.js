**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = {}
    const answer = []
    nums.forEach((num) => {
        if (!map[num]) map[num] = []
        map[num].push(num)
    })
    const mapEntries = Object.entries(map)
    const sorted = mapEntries.sort((a, b) => b[1].length - a[1].length)
    for (let i = 0; i <= k - 1; i++) {
        answer.push(Number(sorted[i][0]))
    }
    console.log(sorted)
    return answer
};
