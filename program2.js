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

    for (let i = 0; i < s.length-1; i++){
        if(next && curr < next){
            ans -= curr;
        }
        else{
            ans += curr;
        }
    }
    return total;
};


module.exports={romanToInt}