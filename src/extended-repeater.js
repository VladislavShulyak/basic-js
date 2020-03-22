module.exports = function repeater(str, options) {

        let string = '';


        let stringSeparator = options.addition + options.additionSeparator;
        let stringTemp ='';
        for (let i = 0; i < options.additionRepeatTimes; i++) {
            stringTemp +=stringSeparator;
        }
        string = str + stringTemp;
        string = string.substring(0,string.length - options.additionSeparator.length );


        string = string + options.separator;
        let stringTemp2 = string;
        for (let i = 0; i < options.repeatTimes - 1; i++) {
            string += stringTemp2;
        }
        string = string.substring(0,string.length - options.separator.length );
        return string;

};
  