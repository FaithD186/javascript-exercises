const ftoc = function(ftemp) {
let c = (ftemp - 32) * (5/9);
return Math.round(c * 10) / 10; 
};

const ctof = function(ctemp) {
  let f = (ctemp * (9/5) + 32);
  return Math.round(f * 10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
