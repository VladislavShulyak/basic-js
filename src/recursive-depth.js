let test = [1];
module.exports = class DepthCalculator {
    calculateDepth(arr, value = 2) {

        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                this.calculateDepth(arr[i], value + 1);
                test.push(value);
            }
        }
        let temp =  Math.max(...test);
        return temp;
        test = [1];

    }
};