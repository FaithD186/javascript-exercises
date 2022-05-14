const palindromes = function (str) {
    let s = str.toLowerCase(); 
    let newStr = s.replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "").replace(/s{2,}/g, " ");

    

    
    let i = 0;
    let j = newStr.length - 1; 
    while (i < j){
        if (newStr[i] == ' '){
            i++; 
            continue;  
              
        }
        if (newStr[j] == ' '){
            j--; 
            continue;
        }
        if (newStr[i].toLowerCase() != newStr[j].toLowerCase()){
            return false;
        }
        i++;
        j--; 
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
