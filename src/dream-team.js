module.exports = function createDreamTeam(members) {
    let nameArr = [];
    if (!Array.isArray(members)) {
        return false;
    }

    members.forEach((element) => {
        if (typeof (element) === "string") {
            element = element.toUpperCase().replace(/\s+/g, '');
            nameArr.push(element[0]);
        }
        return false;
    });
    return nameArr.sort().join('');
};