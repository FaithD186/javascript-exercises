const fibonacci = function(n) {
    if (parseInt(n) < 0){
        return "OOPS";
    }
    if (parseInt(n) <2){
        return parseInt(n);
    }
    return fibonacci(parseInt(n) - 1) + fibonacci(parseInt(n)-2); 

};

// Do not edit below this line
module.exports = fibonacci;
