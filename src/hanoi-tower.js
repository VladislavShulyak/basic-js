module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let object ={};

    let turns = 2 ** disksNumber;
    object.seconds = turns /(turnsSpeed/3600);
    object.turns = turns;
    return object;
};