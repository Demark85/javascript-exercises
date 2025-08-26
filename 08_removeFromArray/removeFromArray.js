const removeFromArray = function(array, ...targets) {
    const difference = array.filter(element => !targets.includes(element))

    return difference
};

// Do not edit below this line
module.exports = removeFromArray;
