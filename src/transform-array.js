module.exports = function transform(arr) {
    if (arr.length === 0) return arr;
    if (!(arr instanceof Array)) {
        throw new Error();
    }

    let elements = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "--discard-next") {
            if (i < arr.length - 1) {
                i += 1;
            }
        } else if (arr[i] === '--discard-prev') {
            elements.pop();
        } else if (arr[i] === '--double-next') {
            if (i < arr.length - 1) {
                elements.push(arr[i + 1]);
            }
        } else if (arr[i] === '--double-prev') {
            if (i > 0) {
                elements.push(arr[i - 1]);
            }
        } else elements.push(arr[i])
    }
    return elements;
};
