const repeatString = function(str, n) {
    if (n < 0){
        return "ERROR"; 
    }
    newStr = ''
    for (let i = 0; i < n; i++){
        newStr = newStr + str; 
    }
    return newStr; 
};

// Do not edit below this line
module.exports = repeatString;