module.exports = function repeater(str, options) {


    if (options.separator === undefined) {
        options.separator = '+';
    }
    if (options.addition === undefined) {
        options.addition = '';
    }
    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 0;
    }
    if (options.additionSeparator === undefined) {
        options.additionSeparator = '';
    }
    if (options.repeatTimes === undefined) {
        return (str + options.addition)
    } else {
        let string;
        let stringSeparator = options.addition + options.additionSeparator;
        let stringTemp = '';
        for (let i = 0; i < options.additionRepeatTimes; i++) {
            stringTemp += stringSeparator;
        }
        string = str + stringTemp;
        string = string.substring(0, string.length - options.additionSeparator.length);

        string = string + options.separator;
        let stringSeparatorTemp = string;
        for (let i = 0; i < options.repeatTimes - 1; i++) {
            string += stringSeparatorTemp;
        }
        string = string.substring(0, string.length - options.separator.length);
        return string;
    }

};
  