/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        'I' : 1,
        'v' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    };

    let ans = 0;
    for (let i = 0; i < s.length-1; i++){
        if(roman[s[i]] < roman[s[i+1]]){
            ans -= roman[s[i]];
        }
        else{
            ans += roman[s[i]];
        }
    }
    return ans + roman[s[s.length - 1]];
};


module.exports={romanToInt}