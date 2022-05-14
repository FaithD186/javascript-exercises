const add = function(x, y) {
  return x + y;
	
};

const subtract = function(x, y) {
  return x - y;
	
};

const sum = function(arr) {
  let total = 0;
  for (element of arr){
    total = total +  element;
  }
  return total;
	
};

const multiply = function(arr) {
  let total = arr[0]; 
  for (let i = 1; i < arr.length; i++){
    total = total * arr[i]; 
  }
  return total;

};

const power = function(x, y) {
  let total = 1; 
	for (let i=0; i < y; i++){
    total = total * x;
  }
  return total;

};

const factorial = function(x) {
	if(x==0 || x ==1){
    return 1;
  }
  else{
    total = 1; 
    for (let i =1; i < x; i++){
      total = total * (i + 1);
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
