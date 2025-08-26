const repeatString = function(string, number) {
    if (number < 0) {
        return 'ERROR'
    }
    let rString = ''
    for (let i = number; i > 0; i--) {
        rString += string
    }
    return rString
};

// Do not edit below this line
module.exports = repeatString;
