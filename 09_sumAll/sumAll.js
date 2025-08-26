const sumAll = function(a, b) {
    if (a < 0 || b < 0) {
        return 'ERROR'
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR'
    }

    if (typeof a === 'number' && a % 1 !== 0 || typeof b === 'number' && b % 1 !== 0) {
        return 'ERROR'
    }

    let sum = 0
    const start = Math.min(a, b)
    const end = Math.max(a, b)

    for (let i = start; i <= end; i++) {
        sum += i
    }
    return sum
    
};

// Do not edit below this line
module.exports = sumAll;
