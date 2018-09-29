module.exports = function longestConsecutiveLength(array) {
  // your solution here
    if (array.length === 0) {
        return 0;
    }
    let result = 1;
    let count = 1;
    function compareNumber (a, b) {
        return a - b;
    }
    array.sort(compareNumber);
    for (let i = 0, length = array.length; i < length; i++) {
        if (array[i + 1] - array[i] === 1) {
            count++;
        }
        else if (array[i + 1] - array[i] > 1) {
            result = Math.max(result, count);
            count = 1;
        }
    }
    return result;
};