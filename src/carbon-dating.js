const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sample) {
    let time;
    if (typeof (sample) === "string" && parseInt(sample)) {
        time = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sample)) / (0.693 / HALF_LIFE_PERIOD));
        if (time <= 0 || isNaN(time) === true) {
            return false;
        }
        return time;
    } else return false;
};
