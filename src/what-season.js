module.exports = function getSeason(date) {

    if (getSeason.arguments.length === 0) {
        return "Unable to determine the time of year!"
    }

    if (!date.getTime()) {
        throw new Error();
    }

    if (isNaN(date) !== true && date instanceof Date) {
        let month = date.getMonth();
        if (month < 2 || month === 11) {
            return 'winter';
        } else if (month < 5) {
            return 'spring';
        } else if (month < 8) {
            return 'summer';
        } else {
            return 'autumn';
        }

    } else {
        throw new Error();
    }

};

